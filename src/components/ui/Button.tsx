"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "font-medium rounded-lg transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black";

  const variants = {
    primary:
      "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed",
    secondary:
      "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black hover:shadow-lg hover:shadow-cyan-500/50 disabled:border-gray-700 disabled:text-gray-700 disabled:cursor-not-allowed",
    ghost:
      "text-white hover:bg-white/10 disabled:text-gray-600 disabled:cursor-not-allowed",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      type={type}
    >
      {content}
    </button>
  );
}
