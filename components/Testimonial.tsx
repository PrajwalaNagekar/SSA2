"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    logo: "/08.webp",
    text: "One of the best school in kolkata. The teachers and the staff are very friendly and make ur child feel comfortable in family atmosphere. The security system is great. The management is very good.",
    name: "Roshan Bhutoria",
  },
  {
    logo: "/10.webp",
    text: "Studied here for 4 years and believe me it was the best 4 years of my life ! Of course it took a little bit time to get accustomed but once you create an image here, you will be loved by your friends, teachers and everyone..From meeting inspiring people to making crazy friends, It was really a great journey.",
    name: "Anubhav Sanyal Arts",
  },
  {
    logo: "/12.webp",
    text: "One of the best school in kolkata. The teachers and the staff are very friendly and make ur child feel comfortable in family atmosphere. The security system is great. The management is very good.",
    name: "Roshan Bhutoria",
  },
];

const parentTestimonials = [
  { img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Screenshot-2025-08-22-202349-1024x1021.png", name: "MRS. Ranjan",  video: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Testimonial-1.mp4" },
  { img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Screenshot-2025-08-22-202738-1024x1015.png", name: "MRS. Akhil",  video: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Testimonial-2.mp4" },
  { img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Screenshot-2025-08-22-202822-1024x1015.png", name: "MRS. Ajay",  video: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Testimonial-4-1.mp4" },
  { img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Screenshot-2025-08-22-202859-1024x1016.png", name: "MRS. HEEMA",  video: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Testimonial-8.mp4" },
];

export function TestimonialSection() {
  const fullText = "inspire";
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

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // For parent testimonial scroll:
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Infinite repeated scroll: double the cards, reset scrollLeft
  useEffect(() => {
    if (!isHovered) {
      const container = scrollContainerRef.current;
      let animationFrame;
      let step = () => {
        if (container) {
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
          container.scrollLeft += 1;
        }
        animationFrame = requestAnimationFrame(step);
      };
      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isHovered]);

  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-sm font-medium text-gray-500 mb-1">Testimonial</div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#273396]">
              Words That{" "}
              <span className="text-pink-500">
                {typed}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
            <span className="text-xl sm:text-2xl md:text-3xl font-light text-black">Us</span>
          </div>
          <div className="mx-auto my-3 flex w-32 h-3 justify-center items-center gap-1">
            <div className="w-6 h-1 rounded-full bg-indigo-500" />
            <div className="w-6 h-1 rounded-full bg-pink-400" />
            <div className="w-6 h-1 rounded-full bg-indigo-500" />
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 w-full max-w-5xl mx-auto mb-10">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col items-center w-24 sm:w-32">
            <img
              src={testimonials[current].logo}
              alt="logo"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>
          {/* Text */}
          <div className="flex-1 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed transition-all duration-500 text-center md:text-left">
            {testimonials[current].text}
            <div className="font-semibold mt-3">{testimonials[current].name}</div>
          </div>
          {/* Pagination */}
          <div className="flex flex-row md:flex-col gap-2 md:gap-1 items-center md:items-end text-gray-700 font-bold text-sm sm:text-base">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`cursor-pointer transition-all duration-200 ${
                  current === i ? "text-[#2a2d96]" : ""
                }`}
                onClick={() => setCurrent(i)}
              >
                {`0${i + 1}`}
              </span>
            ))}
          </div>
        </div>

        {/* Parent Testimonials */}
        <div className="max-w-6xl mx-auto mb-4 text-[#313396] px-2 font-semibold text-base sm:text-lg">
          Parent&apos;s Testimonials
          <div className="flex gap-1 mb-6 pl-2">
            <div className="w-6 h-1 rounded-full bg-indigo-500" />
            <div className="w-6 h-1 rounded-full bg-pink-400" />
            <div className="w-6 h-1 rounded-full bg-indigo-500" />
          </div>
        </div>

        {/* Cards with infinite scroll */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden gap-4 sm:gap-6 max-w-6xl mx-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {[...parentTestimonials, ...parentTestimonials].map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-[#efe6d8] rounded-2xl shadow-md border border-[#dfdbd4]"
            >
              <div
                className="relative rounded-t-2xl overflow-hidden bg-white h-60 sm:h-72 group cursor-pointer"
                onClick={() => setOpenVideo(card.video)}
              >
                <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 right-2 bg-[#27408d] text-white py-1 px-3 rounded-full text-xs font-bold">
                  BEST OF SSA
                </span>
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-full border border-white shadow-lg p-2 sm:p-3 group-hover:scale-110 transition">
                  <svg width={28} height={28} viewBox="0 0 35 35" fill="none">
                    <circle cx="17.5" cy="17.5" r="17" fill="#fff" />
                    <polygon points="13,10 25,17.5 13,25" fill="#2c298c" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video modal with close button outside video frame */}
        {openVideo && (
          <div className="fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center">
            <button
              className="absolute top-10 right-10 md:top-8 md:right-16 lg:top-16 lg:right-36 text-white text-4xl font-bold z-50 rounded-full bg-black/70 px-4 py-2 hover:bg-black/90 transition"
              onClick={() => setOpenVideo(null)}
              aria-label="Close video"
              style={{marginBottom:"24px"}}
            >
              &times;
            </button>
            <div className="bg-black rounded-xl p-4 max-w-2xl w-full relative flex justify-center items-center shadow-lg">
              <video src={openVideo} controls autoPlay className="w-full rounded-lg" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
