// BrandingDigitalHero.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

export default function BrandingDigitalHero() {
  const { isDark } = useTheme();

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      ".hero-title",
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.6,
        ease: "power4.out",
      },
    );

    // Subtitle animation
    gsap.fromTo(
      ".hero-subtitle",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power4.out",
        delay: 0.3,
      },
    );

    // Accent line animation
    gsap.fromTo(
      ".accent-line",
      { width: 0 },
      {
        width: "8rem",
        duration: 1.2,
        ease: "power3.out",
        delay: 0.8,
      },
    );

    // Buttons stagger animation
    gsap.fromTo(
      ".hero-buttons button",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1.1,
      },
    );
  }, []);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isDark ? "bg-black" : "bg-muted"}`}
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=85&w=1920"
          alt="Creative digital agency workspace"
          className="w-full h-full object-cover scale-110 opacity-45"
        />
        {/* Strong overlay for text readability */}
        <div
          className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-black/80 via-black/70 to-black/90" : "bg-gradient-to-b from-[#3d220e]/70 via-[#3d220e]/60 to-[#3d220e]/80"}`}
        />
        {/* Subtle radial gradient */}
        <div
          className={`absolute inset-0 ${isDark ? "bg-gradient-to-r from-black/60 via-transparent to-black/60" : "bg-gradient-to-r from-[#3d220e]/40 via-transparent to-[#3d220e]/40"}`}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-10 md:px-12 max-w-6xl mx-auto">
        <div className="hero-title">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none uppercase text-white">
            BRANDING
            <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B6B4A] via-[#f9e8c8] to-[#8B6B4A]">
              & DIGITAL
            </span>
            <br />
            MARKETING
          </h1>

          {/* Accent line */}
          <div className="accent-line h-2 bg-gradient-to-r from-[#8B6B4A] to-[#f9e8c8] mx-auto mt-10 md:mt-12 rounded-full" />

          {/* Subtitle */}
          <p
            className={`hero-subtitle mt-10 md:mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl ${isDark ? "text-zinc-300" : "text-[#f9e8c8]"} max-w-4xl mx-auto font-light leading-relaxed`}
          >
            We craft powerful brand identities and high-impact digital
            experiences that
            <span className="text-[#f9e8c8] font-medium">
              {" "}
              don’t just stand out — they dominate, convert, and scale.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(139, 107, 74, 0.6)",
              }}
              whileTap={{ scale: 0.96 }}
              className="px-10 py-5 bg-gradient-to-r from-[#3d220e] to-[#5c4635] hover:from-[#5c4635] hover:to-[#3d220e] text-white font-semibold text-lg rounded-full shadow-2xl transition-all duration-300"
            >
              VIEW OUR WORK
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className={`px-10 py-5 bg-transparent border-2 ${isDark ? "border-zinc-600 hover:border-[#8B6B4A] text-zinc-300 hover:text-white" : "border-[#e8d9c2] hover:border-[#8B6B4A] text-[#f9e8c8] hover:text-white"} font-medium text-lg rounded-full transition-all duration-300`}
            >
              LET'S TALK STRATEGY
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className={`w-10 h-10 md:w-12 md:h-12 ${isDark ? "text-zinc-500" : "text-[#8B6B4A]"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
