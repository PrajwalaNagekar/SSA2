"use client";
import { useState, useEffect } from "react";

export default function Discovery() {
  const images = [
    "/Photo-from-Barnali-Bhowmik26.webp",
    "/Photo-from-Barnali-Bhowmik23.webp",
    "/Photo-from-Barnali-Bhowmik12-scaled.webp",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/IMG_20241124_180659-scaled.webp",
    "/Photo-from-Barnali-Bhowmik11-scaled.webp",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/IMG_20241124_140731-1-scaled.webp",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/IMG_20241124_124623-scaled.webp",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_9797-scaled.webp",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_9768-1-scaled.webp",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_9766-1-scaled.webp",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_9745-scaled.webp",
   ];

  // Typing animation for "Unique"

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-white text-justify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="flex items-center justify-center gap-1 sm:gap-1.5 mb-6 mt-3 sm:mt-4">
            <div className="w-4 sm:w-6 h-0.5 sm:h-1 rounded-full bg-indigo-500" />
            <div className="w-4 sm:w-6 h-0.5 sm:h-1 rounded-full bg-indigo-500" />
            <div className="w-4 sm:w-6 h-0.5 sm:h-1 rounded-full bg-pink-400" />
            <div className="w-4 sm:w-6 h-0.5 sm:h-1 rounded-full bg-pink-400" />
            <div className="w-4 sm:w-6 h-0.5 sm:h-1 rounded-full bg-indigo-500" />
            <div className="w-4 sm:w-6 h-0.5 sm:h-1 rounded-full bg-indigo-500" />
          </div>
        </div>

        {/* Image Grid - Responsive Layout */}
       <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
  {images.map((src, i) => (
    <div 
      key={i} 
      className="
        overflow-hidden rounded-lg bg-gray-100 shadow-sm
        h-64 sm:h-72 md:h-80
        hover:shadow-md transition-all duration-300
      "
    >
      <img
        src={src}
        alt={`Gallery image ${i + 1}`}
        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 cursor-pointer"
        draggable={false}
        loading="lazy"
      />
    </div>
  ))}
</div>


        {/* Show More Button for Mobile */}
        <div className="flex justify-center mt-6 sm:hidden">
          <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-400 text-white font-medium rounded-full hover:from-indigo-600 hover:to-pink-500 transition-all duration-300 shadow-md hover:shadow-lg">
            View All Images
          </button>
        </div>
      </div>
    </section>
  );
}