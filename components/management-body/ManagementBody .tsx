"use client";
import React, { useEffect, useState } from "react";

// Replace with your actual image paths
const management = [
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/magazine-11.webp",
    name: "Mr. Saroj Kumar Agarwal",
    desc: "Industrialist | Visionary | Humanitarian | Mountaineer",
  },
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/magazine-10.webp",
    name: "Mr. Raunak Agarwal",
    desc: "Entrepreneur | Philanthropist | Growth Catalyst | Leader",
  },
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/magazine-9.webp",
    name: "Mrs. Prachi Agarwal",
    desc: "Entrepreneur | Environmentalist | Patron | Digital Literacy",
  },
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/magazine-6.webp",
    name: "Mr. Jayant Hari Har Lal",
    desc: "Educator | Advisor | Greenfield Education Project | Key Note Speaker",
  },
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/magazine-8.webp",
    name: "Mr. Naresh Agarwal",
    desc: "Business Magnate | Visionary | Philanthropist | Leader | Nation Building",
  },
];

// Typing animation hook for "Body"
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

const ManagementBody = () => {
  const animatedText = useTypingEffect("Body");

  return (
    <div className="flex flex-col items-center min-h-screen bg-white py-12 px-2 md:px-0 text-justify">
      {/* Title and Divider */}
      <div className="max-w-2xl text-center mb-10">
        <div className="text-lg mb-2 text-gray-500">Our Expert</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-sans">
          Management{" "}
          <span className="text-[#d9439f] border-r-2 border-[#d9439f] pr-1">
            {animatedText}
          </span>
        </h2>
        <div
          className="mx-auto flex justify-center w-32 h-[6px] mb-1 rounded"
          style={{
            background:
              "repeating-linear-gradient(135deg,#d9439f_0px,#d9439f_8px,#fff_8px,#fff_16px)",
          }}
        />
      </div>
      {/* Cards Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
        {management.map((member, i) => (
          <div
            className="flex flex-col items-center bg-gradient-to-b from-[#3b378a] to-[#d9439f] rounded-[2.5rem] shadow-xl transition-transform hover:-translate-y-2 h-full"
            key={i}
          >
            {/* Image as in original design */}
            <div className="w-full flex justify-center pt-9">
              <div className="w-[92%] aspect-[4/3] bg-white rounded-2xl overflow-hidden border-4 border-white shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Name and Description on white box at bottom */}
            <div className="w-[92%] flex flex-col bg-white rounded-xl mt-8 mb-7 shadow px-4 py-5 items-center">
              <div className="text-center text-lg font-semibold mb-1 text-[#3b378a] leading-tight">
                {member.name}
              </div>
              <div className="text-center text-xs font-medium text-gray-600">
                {member.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagementBody;
