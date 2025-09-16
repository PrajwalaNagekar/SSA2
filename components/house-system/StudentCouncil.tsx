"use client";
import { useState } from "react";
import Image from "next/image";

interface StudentCouncilProps {
  title?: string;
  imageUrl: string;
  imageAlt?: string;
}

export function StudentCouncil({
  title = "",
  imageUrl,
  imageAlt = "Student Council Members"
}: StudentCouncilProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-transparent text-justify">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#312b8b]">
            {title}
          </h2>
        </div>
        
        {/* Image Container - Make bigger and easier to read */}
        <div className="w-full max-w-5xl lg:max-w-7xl xl:max-w-[1600px] mx-auto">
          <div
            className="relative w-full min-h-[400px] md:min-h-[600px] lg:min-h-[800px] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setOpen(true)}
            title="Click to enlarge"
            tabIndex={0}
            role="button"
            aria-label="Open enlarged image"
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              style={{ objectFit: "contain" }}
              className="w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Modal Popup */}
        {open && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 transition-all"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-5xl w-full mx-4 rounded-lg"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-2 top-2 z-10 bg-white/80 rounded-full p-2 hover:bg-white focus:outline-none"
                aria-label="Close"
              >
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M6 18L18 6" stroke="#312b8b" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </button>
              <div className="w-full h-[60vw] max-h-[90vh] relative bg-white rounded-lg p-2 flex items-center justify-center">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
