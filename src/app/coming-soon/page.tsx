"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-1/4 w-16 h-16 bg-green-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Construction sticker/badge */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg shadow-orange-500/30">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl"
            >
              🚧
            </motion.span>
            <span className="text-black font-bold text-lg">Under Construction</span>
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl"
            >
              🚧
            </motion.span>
          </div>
        </motion.div>

        {/* Big emoji/icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <motion.span
            className="text-8xl inline-block"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            👨‍💻
          </motion.span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4"
        >
          Coming <span className="text-cyan-500">Soon!</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[var(--muted)] text-lg mb-8 leading-relaxed"
        >
          This project demo is currently under development. 
          <br />
          I&apos;m working hard to bring you something amazing! ✨
        </motion.p>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="text-sm text-[var(--muted)]">Progress</span>
            <div className="w-48 h-3 bg-[var(--card)] rounded-full overflow-hidden border border-[var(--card-border)]">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <span className="text-sm font-semibold text-cyan-500">70%</span>
          </div>
        </motion.div>

        {/* Stickers row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 mb-10 flex-wrap"
        >
          {["🔨", "⚙️", "🎨", "🚀", "💡"].map((emoji, index) => (
            <motion.div
              key={emoji}
              className="w-14 h-14 bg-[var(--card)] border border-[var(--card-border)] rounded-2xl flex items-center justify-center text-2xl shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link href="/#projects">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Portfolio
            </motion.button>
          </Link>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 text-sm text-[var(--muted)]"
        >
          Want to know more? <Link href="/#contact" className="text-cyan-500 hover:underline">Contact me</Link> 💬
        </motion.p>
      </div>
    </div>
  );
}
