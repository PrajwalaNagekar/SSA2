"use client";
import { useState, useEffect } from "react";

export default function ConnectedGaralley() {
  const images = [
    "/Copy-of-IMG_0175-scaled.webp",
    "/Copy-of-IMG_0256-1-scaled.webp",
    "/Copy-of-IMG_0393-scaled.webp",
    "/Copy-of-IMG_0469-scaled.webp",
    "/Copy-of-IMG_1284-scaled.webp",
    "/DSC_5892-scaled.webp",
    "/IMG_0410-scaled.webp",
    "/IMG_0471-scaled.webp",
    "/IMG_0623-scaled.webp",
    "/IMG_0771-scaled.webp",
    "/IMG_1054-scaled.webp",
    "/IMG_1344-scaled.webp",
    "/IMG_20240824_161453206-scaled.webp",
    "/IMG_20240824_162807106-scaled.webp",
    "/IMG_20240824_163319460-scaled.webp",
    "/IMG_20240824_175003906_HDR-scaled.webp",
    "/PXL_20240824_120403495-scaled.webp",
    "/PXL_20240825_064542345-Copy-scaled.webp",
    "/PXL_20240825_122538212-scaled.webp",
    "/Copy-of-IMG_0385-scaled.webp",
    "/WhatsApp-Image-2024-09-16-at-11.44.23-AM-scaled.webp",
  ];

  // Demo video and form data
  const videos = [
    { src: "/sample-video.mp4", title: "Sample Video" }
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-white">
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

        {/* Unified Grid for Images, Videos, File, Form */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Images Section */}
          {images.map((src, i) => (
            <div
              key={`img-${i}`}
              className="overflow-hidden rounded-lg bg-gray-100 shadow-sm h-64 sm:h-72 md:h-80 w-full"
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

          {/* Video Section */}
          {videos.map((video, i) => (
            <div
              key={`vid-${i}`}
              className="overflow-hidden rounded-lg bg-gray-100 shadow-sm h-64 sm:h-72 md:h-80 w-full flex items-center justify-center"
            >
              <video
                src={video.src}
                controls
                className="object-cover w-full h-full"
              />
            </div>
          ))}

          {/* File Section */}
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-sm h-64 sm:h-72 md:h-80 w-full flex items-center justify-center">
            <a
              href="/sample-file.pdf"
              download
              className="text-center text-indigo-500 hover:text-pink-400 font-semibold"
            >
              Download File
            </a>
          </div>

          {/* Form Section */}
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-sm h-64 sm:h-72 md:h-80 w-full flex items-center justify-center">
            <form className="w-full px-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none"
                placeholder="Enter your name"
              />
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md font-medium"
              >
                Submit
              </button>
            </form>
          </div>
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
