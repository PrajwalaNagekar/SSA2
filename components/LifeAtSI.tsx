"use client";
import { useEffect, useState, useRef } from "react";

export function LifeAtSI() {
  const fullText = "Sri Sri Academy";
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  // Typing animation effect
  useEffect(() => {
    let typingSpeed = 120;
    let deletingSpeed = 60;
    let pause = 1500;
    let timer;

    if (!isDeleting && index <= fullText.length) {
      timer = setTimeout(() => {
        setTyped(fullText.slice(0, index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index >= 0) {
      timer = setTimeout(() => {
        setTyped(fullText.slice(0, index));
        setIndex(index - 1);
      }, deletingSpeed);
    }

    if (index === fullText.length + 1 && !isDeleting) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setIndex(fullText.length - 1);
      }, pause);
    } else if (isDeleting && index < 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setIndex(1);
      }, pause);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, fullText]);

  // Auto-scroll effect for horizontal cards
  useEffect(() => {
    const startAutoScroll = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const scrollAmount = 2; // Pixels to scroll per frame
          
          if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
            // Smooth scroll back to start
            container.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            // Continue scrolling
            container.scrollBy({
              left: scrollAmount,
              behavior: 'smooth'
            });
          }
        }
      }, 50);
    };

    startAutoScroll();

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            <span className="block sm:inline">Life At{" "}</span>
            <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent inline-block">
              {typed}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
          
          {/* Decorative divider */}
          <div className="mx-auto mt-3 sm:mt-4 mb-0 w-20 sm:w-28 h-2 sm:h-3 flex justify-center">
            <div className="w-1.5 sm:w-2.5 h-0.5 bg-indigo-400 rotate-[18deg] mx-0.5 sm:mx-1" />
            <div className="w-1.5 sm:w-2.5 h-0.5 bg-indigo-400 rotate-[18deg] mx-0.5 sm:mx-1" />
            <div className="w-1.5 sm:w-2.5 h-0.5 bg-pink-400 rotate-[18deg] mx-0.5 sm:mx-1" />
            <div className="w-1.5 sm:w-2.5 h-0.5 bg-pink-400 rotate-[18deg] mx-0.5 sm:mx-1" />
            <div className="w-1.5 sm:w-2.5 h-0.5 bg-indigo-400 rotate-[18deg] mx-0.5 sm:mx-1" />
            <div className="w-1.5 sm:w-2.5 h-0.5 bg-indigo-400 rotate-[18deg] mx-0.5 sm:mx-1" />
          </div>
        </div>

        {/* Main Features Grid - 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10">
          <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <img 
              src="/school-boarding-facilities.jpg" 
              alt="Boarding facilities at Sri Sri Academy" 
              className="w-full h-48 sm:h-56 lg:h-60 object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-white/40 to-white/60 flex items-center justify-center group-hover:from-black/30 transition-all duration-300">
              <span className="text-gray-900 font-semibold text-lg sm:text-xl lg:text-2xl tracking-wide text-center px-4">
                BOARDING
              </span>
            </div>
          </div>
          
          <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <img 
              src="/students-in-classroom-curriculum.jpg" 
              alt="Curriculum and classroom learning" 
              className="w-full h-48 sm:h-56 lg:h-60 object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-white/40 to-white/60 flex items-center justify-center group-hover:from-black/30 transition-all duration-300">
              <span className="text-gray-900 font-semibold text-lg sm:text-xl lg:text-2xl tracking-wide text-center px-4">
                CURRICULUM
              </span>
            </div>
          </div>
          
          <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] sm:col-span-2 lg:col-span-1">
            <img 
              src="/ai-technology-in-classroom.jpg" 
              alt="AI technology in education" 
              className="w-full h-48 sm:h-56 lg:h-60 object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-white/40 to-white/60 flex items-center justify-center group-hover:from-black/30 transition-all duration-300">
              <span className="text-gray-900 font-semibold text-lg sm:text-xl lg:text-2xl tracking-wide text-center px-4">
                AI TEACHERS
              </span>
            </div>
          </div>
        </div>

       
        {/* Horizontal Scroll Cards with Auto-Scroll */}
        <div className="relative">
          {/* Fade gradients for visual indication */}
          <div className="absolute left-0 top-0 w-4 sm:w-8 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-4 sm:w-8 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollContainerRef}
            className="w-full overflow-x-hidden pb-3 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-4 sm:gap-6 min-w-max px-1">
              {/* Card 1 */}
              <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] flex-shrink-0">
                <img 
                  src="/dmit-01-1-700x650-1-raarvsd7gfdskzhd3mtlwxs08zrrkwvgvtheq4k1bs.webp" 
                  alt="Career counseling services" 
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-white/40 to-white/60 flex items-center justify-center group-hover:from-black/40 transition-all duration-300">
                  <span className="text-gray-900 font-semibold text-base sm:text-lg lg:text-xl tracking-wide text-center px-4">
                    Career Counseling
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] flex-shrink-0">
                <img 
                  src="/dance2-582x333-1-582x332-1-500x333-1-raarvtb1n9f2wlfzy588hfjgudn4slz77y4w7ein5k.webp" 
                  alt="Music education and classes" 
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-white/40 to-white/60 flex items-center justify-center group-hover:from-black/40 transition-all duration-300">
                  <span className="text-gray-900 font-semibold text-base sm:text-lg lg:text-xl tracking-wide text-center px-4">
                    Music
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] flex-shrink-0">
                <img 
                  src="/WhatsApp-Image-2024-11-13-at-1.40.34-PM-raarvqhj2rb7xrk3em0cry9328115io07k6frkmto8.jpeg" 
                  alt="School infrastructure and facilities" 
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-white/40 to-white/60 flex items-center justify-center group-hover:from-black/40 transition-all duration-300">
                  <span className="text-gray-900 font-semibold text-base sm:text-lg lg:text-xl tracking-wide text-center px-4">
                    Infrastructure
                  </span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] flex-shrink-0">
                <img 
                  src="/laboratories-classroom.jpg" 
                  alt="Science laboratories and equipment" 
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-white/40 to-white/60 flex items-center justify-center group-hover:from-black/40 transition-all duration-300">
                  <span className="text-gray-900 font-semibold text-base sm:text-lg lg:text-xl tracking-wide text-center px-4">
                    Laboratories
                  </span>
                </div>
              </div>

              {/* Card 5 */}
              <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] flex-shrink-0">
                <img 
                  src="/Transport-3-500x300-1-raarvtb1n9f2wlfzy588hfjgudn4slz77y4w7ein5k.webp" 
                  alt="Student transportation services" 
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-white/40 to-white/60 flex items-center justify-center group-hover:from-black/40 transition-all duration-300">
                  <span className="text-gray-900 font-semibold text-base sm:text-lg lg:text-xl tracking-wide text-center px-4">
                    Transport
                  </span>
                </div>
              </div>

              {/* Card 6 */}
              <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] flex-shrink-0">
                <img 
                  src="/Safety-02-500x300-1-raarvtb1n9f2wlfzy588hfjgudn4slz77y4w7ein5k.webp" 
                  alt="Safety and security measures" 
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-white/40 to-white/60 flex items-center justify-center group-hover:from-black/40 transition-all duration-300">
                  <span className="text-gray-900 font-semibold text-base sm:text-lg lg:text-xl tracking-wide text-center px-4">
                    Safety & Security
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom scrollbar styles */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
}