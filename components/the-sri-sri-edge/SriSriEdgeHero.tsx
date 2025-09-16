"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface SriSriEdgeHeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string; // Optional image URL
  imageAlt?: string; // Optional alt text for image
  imagePosition?: "left" | "right"; // Image position relative to text
}

export function SriSriEdgeHero({ 
  title, 
  subtitle, 
  imageUrl, 
  imageAlt = "",
  imagePosition = "right"
}: SriSriEdgeHeroProps) {
  return (
    <section className="relative w-full min-h-[360px] bg-[#312b8b] pb-0 overflow-hidden flex items-end">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 pt-20 md:pt-24 pb-32 md:pb-40 z-10">
        <div className={`flex flex-col ${imageUrl ? (imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse") : ""} items-center gap-8 md:gap-12`}>
          {/* Text Content */}
          <motion.div
            className={`text-left ${imageUrl ? "md:flex-1" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {title}
            </motion.h1>

            <motion.div
              className="text-white text-base sm:text-lg md:text-xl font-semibold"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {subtitle}
            </motion.div>
          </motion.div>

          {/* Image Content */}
          {imageUrl && (
  <motion.div 
    className="md:flex-1 flex justify-center"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    <div className="relative w-56 max-w-sm h-40 md:h-50  overflow-hidden">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        style={{ objectFit: "contain" }}
        className="rounded-lg"
      />
    </div>
  </motion.div>
)}
        </div>
      </div>

      {/* SVG Responsive Wave */}
      <div className="absolute left-0 bottom-0 w-full z-10">
        <svg
          viewBox="0 0 1920 180"
          width="100%"
          height="180"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", minWidth: 300 }}
        >
          <path
            d="M0 110 Q480 180 1024 110 Q1440 40 1920 160 L1920 180 L0 180 Z"
            fill="#fff"
          />
        </svg>
      </div>
    </section>
  );
}