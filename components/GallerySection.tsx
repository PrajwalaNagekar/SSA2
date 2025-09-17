"use client";
import { useState, useEffect } from "react";

export default function GallerySection() {
  const images = [
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Copy-of-IMG_0150-scaled-raarvqhkam480d245ljzf4xgheov35uwou9fxxn0qw.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Copy-of-IMG_0256-scaled-raarvu8x1y9daswnjn6hp3zauy6bxy9u1cvdv1hg20.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC00003-scaled-raarvpjq3s2xor3hb35cun5zw0thvgr6cplygnoex4.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_1913-scaled-raarvpjq3s2xor3hb35cun5zw0thvgr6cplygnoex4.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_2101-scaled-raarvrfehg5ibz0r03ylzmox2sk8auyn0ywxf7lmko.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_2255-1-scaled-raarvqhkam480d245ljzf4xgheov35uwou9fxxn0qw.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_2349-scaled-raarvpjq3s2xor3hb35cun5zw0thvgr6cplygnoex4.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_5577-scaled-raarvpjq3s2xor3hb35cun5zw0thvgr6cplygnoex4.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_5656-scaled-raarvolvwy1nd54ugkqqa5ejamy4nrng0kygzdpt3c.jpg",
    "DSC_9768-1-scaled-raarvrfehg5ibz0r03ylzmox2sk8auyn0ywxf7lmko.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/IMG_0175-scaled-raarvqhkam480d245ljzf4xgheov35uwou9fxxn0qw.jpg",
    "IMG_20240904_085003-scaled-raarvolvwy1nd54ugkqqa5ejamy4nrng0kygzdpt3c.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/PXL_20240825_122538212-scaled-raarvolvwy1nd54ugkqqa5ejamy4nrng0kygzdpt3c.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/WhatsApp-Image-2024-11-13-at-1.40.34-PM-raarvqhj2rb7xrk3em0cry9328115io07k6frkmto8.jpeg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_2255-1-scaled-raarvqhj2rb7xrk3em0cry9328115io07k6frkmto8.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Sri-Sri-Ravi-Shankar.jpg",
  ];

  // Typing animation for "Unique"
  const fullText = "Unique";
  const [typed, setTyped] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let speed = 120;
    let pause = 1100;
    let timer;

    if (isTyping && index <= fullText.length) {
      timer = setTimeout(() => {
        setTyped(fullText.slice(0, index));
        setIndex(index + 1);
      }, speed);
    } else if (!isTyping && index >= 0) {
      timer = setTimeout(() => {
        setTyped(fullText.slice(0, index));
        setIndex(index - 1);
      }, speed / 2);
    }

    if (isTyping && index === fullText.length + 1) {
      timer = setTimeout(() => {
        setIsTyping(false);
        setIndex(fullText.length - 1);
      }, pause);
    } else if (!isTyping && index < 0) {
      timer = setTimeout(() => {
        setIsTyping(true);
        setIndex(1);
      }, pause / 2);
    }

    return () => clearTimeout(timer);
  }, [index, isTyping, fullText]);

  // Modal state
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="text-xs sm:text-sm font-medium text-[#44469b] uppercase mb-2 tracking-wider">
            Gallery
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 leading-tight">
            Hinting At The{" "}
            <span className="text-pink-500 inline-block">
              {typed}
              <span className="animate-pulse">|</span>
            </span>
            <br className="sm:hidden" />
            <span className="sm:ml-2">Experience</span>
          </h2>
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
              className={`
                aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-sm
                ${i >= 6 ? 'hidden sm:block' : ''}
                ${i >= 4 ? 'hidden xs:block' : ''}
                hover:shadow-md transition-all duration-300
              `}
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
          <button
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-400 text-white font-medium rounded-full hover:from-indigo-600 hover:to-pink-500 transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => setShowModal(true)}
          >
            View All Images
          </button>
        </div>
      </div>

      {/* Modal for all images */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center px-2 py-8 overflow-y-auto">
          <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-4 relative">
            <button
              className="absolute top-4 right-5 z-10 text-3xl text-pink-600 font-bold px-3 py-1 focus:outline-none hover:text-pink-400 transition"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {images.map((src, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    className="object-cover w-full h-full"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
