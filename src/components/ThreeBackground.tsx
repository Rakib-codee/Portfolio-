"use client";

import { useRef, useState, ReactNode } from "react";
import { Canvas, useFrame, RootState } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Animated floating sphere
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state: RootState) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

// Floating particles
function Particles({ count = 500 }: { count?: number }) {
  // Generate random positions only once per count
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  });

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state: RootState) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
                  attach="attributes-position"
                  count={count}
                  array={positions}
                  itemSize={3}/>
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#06b6d4"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Wireframe torus
function WireframeTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state: RootState) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 0, -2]}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshBasicMaterial color="#06b6d4" wireframe opacity={0.3} transparent />
    </mesh>
  );
}

// Animated icosahedron
function AnimatedIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state: RootState) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[-3, 0, -1]}>
      <icosahedronGeometry args={[0.8, 0]} />
      <meshBasicMaterial color="#8b5cf6" wireframe />
    </mesh>
  );
}

// Scene content
function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
      
      <AnimatedSphere />
      <Particles count={300} />
      <WireframeTorus />
      <AnimatedIcosahedron />
      <Stars radius={50} depth={50} count={1000} factor={2} saturation={0} fade speed={1} />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

// Main 3D Hero Background
export function HeroBackground3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}

// Floating shapes scene content
function FloatingShapesContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-2, 1, 0]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#06b6d4" wireframe />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[2, -1, -1]}>
          <dodecahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[0, 2, -2]}>
          <tetrahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#06b6d4" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>

      <Particles count={100} />
    </>
  );
}

// Floating geometric shapes for sections
export function FloatingShapes() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <FloatingShapesContent />
      </Canvas>
    </div>
  );
}

// Interactive 3D Card effect
export function Card3D({ children }: { children: ReactNode }) {
  return (
    <div className="relative preserve-3d perspective-1000">
      {children}
    </div>
  );
}

// Minimal particle background (lighter alternative)
export function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles count={200} />
      </Canvas>
    </div>
  );
}
