"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/content/testimonials";
import { Heading, Text } from "../ui";

export function Testimonials() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16 flex flex-col items-center">
        <motion.span
          className="inline-block text-cyan-400 font-mono text-sm tracking-wider uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What People Say
        </motion.span>
        <Heading level={2}>Client Testimonials</Heading>
        <Text muted className="max-w-2xl text-center">
          Don&apos;t just take my word for it. Here&apos;s what clients have to say about working with me.
        </Text>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <motion.div
              className="h-full p-6 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] relative"
              style={{ boxShadow: "var(--shadow)" }}
              whileHover={{ y: -4, borderColor: "rgba(6, 182, 212, 0.3)" }}
            >
              {/* Quote Icon */}
              <svg
                className="absolute top-6 right-6 w-8 h-8 text-cyan-500/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <Text muted className="mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </Text>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--card-border)]">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-black font-bold">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--muted)]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
