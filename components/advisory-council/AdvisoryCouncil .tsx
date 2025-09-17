"use client";
import React, { useEffect, useState } from "react";

// Advisors array (update 'img' key with your actual local or static image paths)
const advisors = [
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/magazine-2.webp",
    name: "Col Vembu Shankar",
    desc: "Indian Army Veteran Social Engineer"
  },
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/magazine-4.webp",
    name: "Padma Prabhu",
    desc: "Speaker Retired Teacher of Chemistry"
  },
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/magazine-3.webp",
    name: "Monika Ohri",
    desc: "Educational Consultant and Teacher Trainer"
  },
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/magazine-1.webp",
    name: "Raj Basu",
    desc: "Advisor | Environmentalist | Advisor Rural Tourism | Heritage Conservationist"
  },
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/magazine.webp",
    name: "P D Bhutia",
    desc: "Advisor | Doctor | Cardiologist | Research Organic Farming"
  },
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/magazine-6.webp",
    name: "Mr. Jayant Hari Har Lal",
    desc: "Educator | Generalist | Education Project | Key Note Speaker"
  }
];

// Typing animation hook
function useTypingEffect(text, speed = 120, pause = 1500) {
  const [displayed, setDisplayed] = useState("");
  const [forward, setForward] = useState(true);

  useEffect(() => {
    let timer;
    if (forward && displayed.length < text.length) {
      timer = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
    } else if (forward && displayed.length === text.length) {
      timer = setTimeout(() => setForward(false), pause);
    } else if (!forward && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(text.slice(0, displayed.length - 1)), speed / 2);
    } else if (!forward && displayed.length === 0) {
      timer = setTimeout(() => setForward(true), 400);
    }
    return () => clearTimeout(timer);
  }, [displayed, forward, text, speed, pause]);

  return displayed;
}

const AdvisoryCouncil = () => {
  const animatedText = useTypingEffect("Council");

  return (
    <div className="flex flex-col items-center min-h-screen bg-white py-12 px-2 md:px-0 text-justify">
      {/* Title and Divider */}
      <div className="max-w-2xl text-center mb-10">
        <div className="text-lg mb-2 text-gray-500">Our Expert</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-sans">
          Advisory{" "}
          <span className="text-[#d9439f] border-r-2 border-[#d9439f] pr-1">
            {animatedText}
          </span>
        </h2>
        <div className="mx-auto flex justify-center w-32 h-[6px] mb-1 rounded"
          style={{
            background: "repeating-linear-gradient(135deg,#d9439f_0px,#d9439f_8px,#fff_8px,#fff_16px)"
          }}
        />
      </div>
      {/* Cards Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        {advisors.map((advisor, i) => (
          <div
            className="flex flex-col items-center bg-gradient-to-b from-[#3b378a] to-[#d9439f] p-[2px] rounded-2xl shadow-lg"
            key={i}
          >
            <div className="flex flex-col bg-white rounded-2xl w-full h-full items-center p-6">
              <img
                src={advisor.img}
                alt={advisor.name}
                className="w-36 h-36 rounded-lg object-cover mb-4"
              />
              <div className="w-full">
                <div className="text-center text-base font-semibold mb-1 text-[#3b378a] leading-tight">{advisor.name}</div>
                <div className="text-center text-xs font-medium text-gray-600">{advisor.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisoryCouncil;
