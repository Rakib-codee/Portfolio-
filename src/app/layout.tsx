import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SoundProvider } from "@/components/SoundProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rakib - Full Stack Developer",
  description: "Professional portfolio showcasing projects, skills, and creative work. Specializing in Next.js, React, and modern web design.",
  keywords: "Full Stack Developer, Frontend Engineer, UI/UX Designer, Next.js, React, TypeScript",
  authors: [{ name: "Md Mahfujur Rahman Rakib" }],
  openGraph: {
    title: "Md Mahfujur Rahman Rakib - Portfolio",
    description: "Modern portfolio website built with Next.js and Tailwind CSS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased overflow-x-hidden`}
        style={{ background: 'var(--background)', color: 'var(--foreground)' }}
      >
        {/* Skip to main content - Accessibility */}
        <SoundProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SoundProvider>
      </body>
    </html>
  );
}
