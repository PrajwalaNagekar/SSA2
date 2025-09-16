"use client";
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react";

export function GurudevSection() {
  const fullText = "Ravishankar";
  const [typed, setTyped] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let speed = 110;
    let pause = 900;
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
      }, speed / 1.5);
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

  return (
    <section className="py-12 md:py-16 bg-white text-justify">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 md:mb-8">
            <span className="text-indigo-600 font-semibold text-xs md:text-sm uppercase tracking-wide">About</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-3 md:mb-4">
              Gurudev Sri Sri{" "}
              <span className="text-pink-500 inline-block min-w-[120px] sm:min-w-auto">
                {typed}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
            <div className="flex justify-center mb-4 md:mb-6">
              <Separator className="w-16 md:w-24 bg-indigo-600 h-0.5 md:h-1" />
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-lg px-2 sm:px-0">
            Sri Sri Ravi Shankar is a humanitarian and spiritual leader, an ambassador of peace and human values, and
            founder of The Art of Living Foundation. Through his life and work, Sri Sri has inspired millions around the
            world with a vision of a stress-free, violence-free world. He has founded courses that provide techniques
            and tools to live a deeper, more joyous life and has established nonprofit organisations that recognise a
            common human identity above the boundaries of race, nationality, and religion.
          </p>
        </div>
      </div>
    </section>
  );
}