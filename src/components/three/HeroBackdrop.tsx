"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

let cached: boolean | null = null;

function detect(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    if (window.matchMedia("(pointer: coarse)").matches) return false;
    if (window.innerWidth < 768) return false;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
    if (nav.connection?.saveData) return false;
    if ((nav.hardwareConcurrency ?? 8) <= 2) return false;
    if ((nav.deviceMemory ?? 8) < 4) return false;
    const canvas = document.createElement("canvas");
    if (!(canvas.getContext("webgl2") || canvas.getContext("webgl"))) return false;
    return true;
  } catch {
    return false;
  }
}

const subscribe = () => () => {};
const getSnapshot = () => {
  if (cached === null) cached = detect();
  return cached;
};
const getServerSnapshot = () => false;

/**
 * Static gradient always renders (also the SSR output). The WebGL scene is
 * only downloaded and mounted on capable desktop devices.
 */
export function HeroBackdrop() {
  const can3D = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Static layer: grid + glow orbs. Cheap, works everywhere. */}
      <div className="bg-grid fade-mask-b absolute inset-0" />
      <div className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <div className="absolute right-[-10%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-accent-2/15 blur-[110px]" />
      <div className="absolute bottom-[-20%] left-[-10%] h-[24rem] w-[24rem] rounded-full bg-accent-3/10 blur-[110px]" />
      {can3D && <HeroScene />}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
