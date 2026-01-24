"use client";

import { createContext, useContext, useRef, useCallback, useState, ReactNode } from "react";

interface SoundContextType {
  playHover: () => void;
  playClick: () => void;
  playSuccess: () => void;
  playToggle: () => void;
  playWhoosh: () => void;
  isSoundEnabled: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

// Sound frequencies and patterns using Web Audio API
const createOscillator = (
  audioContext: AudioContext,
  frequency: number,
  duration: number,
  type: OscillatorType = "sine",
  volume: number = 0.1
) => {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

  gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
};

export function SoundProvider({ children }: { children: ReactNode }) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playHover = useCallback(() => {
    if (!isSoundEnabled) return;
    try {
      const ctx = getAudioContext();
      createOscillator(ctx, 800, 0.05, "sine", 0.05);
    } catch {
      // Audio not supported
    }
  }, [getAudioContext, isSoundEnabled]);

  const playClick = useCallback(() => {
    if (!isSoundEnabled) return;
    try {
      const ctx = getAudioContext();
      createOscillator(ctx, 400, 0.1, "square", 0.08);
      setTimeout(() => createOscillator(ctx, 600, 0.05, "sine", 0.05), 50);
    } catch {
      // Audio not supported
    }
  }, [getAudioContext, isSoundEnabled]);

  const playSuccess = useCallback(() => {
    if (!isSoundEnabled) return;
    try {
      const ctx = getAudioContext();
      createOscillator(ctx, 523.25, 0.15, "sine", 0.1); // C5
      setTimeout(() => createOscillator(ctx, 659.25, 0.15, "sine", 0.1), 100); // E5
      setTimeout(() => createOscillator(ctx, 783.99, 0.2, "sine", 0.1), 200); // G5
    } catch {
      // Audio not supported
    }
  }, [getAudioContext, isSoundEnabled]);

  const playToggle = useCallback(() => {
    if (!isSoundEnabled) return;
    try {
      const ctx = getAudioContext();
      createOscillator(ctx, 600, 0.08, "triangle", 0.08);
    } catch {
      // Audio not supported
    }
  }, [getAudioContext, isSoundEnabled]);

  const playWhoosh = useCallback(() => {
    if (!isSoundEnabled) return;
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(200, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
      oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);

      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.2);
    } catch {
      // Audio not supported
    }
  }, [getAudioContext, isSoundEnabled]);

  const toggleSound = useCallback(() => {
    setIsSoundEnabled((prev) => !prev);
    // Play a sound when enabling to confirm it works
    if (!isSoundEnabled) {
      try {
        const ctx = getAudioContext();
        createOscillator(ctx, 440, 0.1, "sine", 0.1);
      } catch {
        // Audio not supported
      }
    }
  }, [getAudioContext, isSoundEnabled]);

  return (
    <SoundContext.Provider
      value={{
        playHover,
        playClick,
        playSuccess,
        playToggle,
        playWhoosh,
        isSoundEnabled,
        toggleSound,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}

// Sound toggle button component
export function SoundToggle() {
  const { isSoundEnabled, toggleSound } = useSound();

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-[var(--card)] border border-[var(--card-border)] shadow-lg hover:scale-110 transition-transform"
      aria-label={isSoundEnabled ? "Disable sound effects" : "Enable sound effects"}
    >
      {isSoundEnabled ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[var(--muted)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
          />
        </svg>
      )}
    </button>
  );
}
