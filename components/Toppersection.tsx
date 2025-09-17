"use client";
import { useState, useEffect, useRef } from "react";

const toppers = [
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/yash-x.webp",
    percent: "90%",
    classType: "CLASS XII",
    name: "HIMESH AGARWAL",
  },
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/himesh-xii.webp",
    percent: "91.2%",
    classType: "CLASS X",
    name: "YASH ANAND",
  },
  {
    img: "/pratush-x.webp",
    percent: "90%",
    classType: "CLASS XII",
    name: "PRATUSH",
  },
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/brishik.webp",
    percent: "91.2%",
    classType: "CLASS X",
    name: "YASH ANAND",
  },
];

export function ToppersSection() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % toppers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll when `current` changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: current * containerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <section className="w-full bg-[#2f2e8c] px-4 py-10 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4">
            Congratulations to our Toppers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto lg:mx-0">
            We’re reimagining education for tomorrow’s genius. Our world-class
            educators with exceptional qualifications and global experience, are
            dedicated to achieving excellence for your child.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="flex-1 w-full flex flex-col items-center justify-center">
          <div
  ref={containerRef}
  className="w-full overflow-x-auto flex no-scrollbar scroll-smooth"
  style={{ scrollSnapType: "x mandatory" }}
>
  {toppers.map((t, idx) => (
    <div
      key={idx}
      className="flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] mx-auto h-[360px] sm:h-[400px] flex flex-col justify-center items-center relative m-4"
      style={{
        scrollSnapAlign: "center",
      }}
    >
      <img
        src={t.img}
        alt={t.name}
        className="rounded-xl w-full h-full object-cover"
      />
    </div>
  ))}
</div>


          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {toppers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-200 ${
                  current === idx ? "bg-pink-500" : "bg-[#b4a2f7]"
                }`}
                aria-label={`Go to topper ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
