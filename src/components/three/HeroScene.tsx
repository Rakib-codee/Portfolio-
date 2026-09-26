"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const CYAN = "#22d3ee";
const VIOLET = "#a78bfa";

function Core() {
  const outer = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (outer.current) {
      outer.current.rotation.x += delta * 0.12;
      outer.current.rotation.y += delta * 0.18;
    }
    if (inner.current) {
      inner.current.rotation.x -= delta * 0.25;
      inner.current.rotation.z += delta * 0.2;
      const s = 1 + Math.sin(t * 1.4) * 0.04;
      inner.current.scale.setScalar(s);
    }
    if (group.current) {
      // Gentle parallax toward the pointer.
      const targetX = state.pointer.y * 0.25;
      const targetY = state.pointer.x * 0.35;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04;
      group.current.position.y = Math.sin(t * 0.6) * 0.15;
    }
  });

  return (
    <group ref={group} position={[1.6, 0.1, 0]}>
      <mesh ref={outer}>
        <icosahedronGeometry args={[1.9, 1]} />
        <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.35} />
      </mesh>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.05, 0]} />
        <meshStandardMaterial color={VIOLET} emissive={VIOLET} emissiveIntensity={0.6} roughness={0.35} metalness={0.4} flatShading />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.7, 0.012, 8, 160]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 1.6, 0.4, 0]}>
        <torusGeometry args={[3.2, 0.008, 8, 160]} />
        <meshBasicMaterial color={VIOLET} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

/** Deterministic PRNG (mulberry32) so the particle field is stable across renders. */
function seeded(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Dust({ count = 420 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const rand = seeded(1337);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (rand() - 0.5) * 22;
      arr[i * 3 + 1] = (rand() - 0.5) * 14;
      arr[i * 3 + 2] = (rand() - 0.5) * 12 - 2;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015;
      ref.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color={CYAN} transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/** True only while the element intersects the viewport AND the tab is visible. */
function useVisible(ref: React.RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let intersecting = true;
    const update = () => setVisible(intersecting && document.visibilityState === "visible");
    const io = new IntersectionObserver(
      ([entry]) => {
        intersecting = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 },
    );
    io.observe(node);
    document.addEventListener("visibilitychange", update);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [ref]);
  return visible;
}

/**
 * Hero-only 3D scene. Renders inside the hero, pauses its render loop when
 * scrolled off-screen or when the tab is hidden, and caps DPR at 1.5.
 * The parent decides whether to mount it at all (mobile, reduced motion, low power).
 */
export default function HeroScene() {
  const wrapper = useRef<HTMLDivElement>(null);
  const visible = useVisible(wrapper);

  return (
    <div ref={wrapper} className="pointer-events-none absolute inset-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        frameloop={visible ? "always" : "never"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none" }}
        eventSource={typeof document !== "undefined" ? document.body : undefined}
        eventPrefix="client"
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[6, 6, 6]} intensity={40} color={CYAN} />
        <pointLight position={[-6, -4, 2]} intensity={25} color={VIOLET} />
        <Core />
        <Dust />
      </Canvas>
    </div>
  );
}
