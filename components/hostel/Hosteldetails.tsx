"use client";
import React, { useRef, useEffect, useState } from "react";

const items = [
  {
    img: "DSC_7175-scaled-rafh8i9pufbz11nnjh2z0ya8d7tehpfers1itew14o.jpg",
    label: "Games",
  },
  {
    img: "DSC_1913-scaled-raarvpjovx9xm5lgk3lq7ghmgu5nxtk9vfiyaao7ug.jpg",
    label: "Infirmary",
  },
  {
    img: "Nutritious-Vegetarian-Cuisine1-rafi1wnzlvku5yy9v6kw0j7992wp8w565am96zaqig.webp",
    label: "Nutritious Vegetarian",
  },
  {
    img: "Safety-02-500x300-1-raarvtb1n9f2wlfzy588hfjgudn4slz77y4w7ein5k.webp",
    label: "Safety & Security",
  },
];

const AutoScroller = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    let scrollInterval;
    let animationFrameId;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && el) {
          const scrollAmount = 2; // Pixels to scroll per frame
          
          const smoothScroll = () => {
            if (el.scrollLeft + el.offsetWidth >= el.scrollWidth) {
              // Instant jump to start (creates seamless loop)
              el.scrollLeft = 0;
            } else {
              el.scrollLeft += scrollAmount;
            }
            
            if (!isHovered) {
              animationFrameId = requestAnimationFrame(smoothScroll);
            }
          };
          
          smoothScroll();
        }
      }, 50); // Check more frequently for smoother scrolling
    };

    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovered]);

  // Duplicate items for seamless looping
  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full flex flex-col items-center py-6 px-4 text-justify"> 
      <div className="w-full max-w-6xl">
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth w-full" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 h-80 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105" 
            >
              <div className="relative w-full h-full">
                <img
                  src={item.img}
                  alt={item.label}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent pt-12 pb-3 px-4"> 
                  <h3 className="text-lg font-semibold text-white text-center"> 
                    {item.label}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hide navigation dots completely */}
        <div className="hidden">
          {items.map((_, idx) => (
            <div key={idx} className="w-2 h-2 rounded-full bg-gray-300 mx-1"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScroller;