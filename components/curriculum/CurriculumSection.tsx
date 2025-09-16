"use client";
import React, { useState, useEffect } from "react";

// Typing animation hook for continuous typing effect
function useTypingEffect(text, speed = 150) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer;
    
    if (!isDeleting && currentIndex < text.length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayed(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
    } else if (!isDeleting && currentIndex === text.length) {
      // Pause at the end before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting backward
      timer = setTimeout(() => {
        setDisplayed(text.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, speed / 2);
    } else if (isDeleting && currentIndex === 0) {
      // Pause at the beginning before typing again
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, text, speed]);

  return displayed;
}

const CurriculumSection = () => {
  const animatedText = useTypingEffect("Inspire");

  const values = [
    {
      icon: "🌍",
      title: "CONCEPT",
      color: "from-blue-500 to-green-500"
    },
    {
      icon: "⚖️",
      title: "ATTITUDE", 
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: "📊",
      title: "INFORMATION",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: "🔥",
      title: "IMAGINATION",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: "🌐",
      title: "FREEDOM",
      color: "from-teal-600 to-blue-600"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4 text-justify">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-lg text-gray-600 mb-2">Our Curriculum</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Words That{" "}
            <span className="text-[#d9439f] relative">
              {animatedText}
              <span className="animate-pulse">|</span>
            </span>{" "}
            <span className="text-[#3b378a]">Us</span>
          </h2>
          <div
            className="mx-auto w-20 h-[6px] rounded mb-8"
            style={{
              background:
                "repeating-linear-gradient(135deg,#3b378a_0px,#3b378a_8px,#fff_8px,#fff_16px)",
            }}
          />
        </div>

        {/* Description Paragraph */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            Sri Sri Academy Siliguri's pedagogy is rooted in the balance of academic growth and holistic education to ensure students' all-around development. Academic curriculum with a unique set of modules is curated by experts, to give our students a distinct edge. Our curriculum incorporates the 4 Cs – Communication, Collaboration, Creativity and Critical Thinking, making learning interactive and interesting.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Our classes and curriculum have been designed to kindle a child's curiosity and make learning experiential, engaging students through academics-led activities rather than 'rote learning'. Students being part of one of the Best CBSE schools in Siliguri have the freedom to express themselves without inhibition and enables them to reach new heights of excellence. We offer a comprehensive curriculum that includes academics, arts, sports, and extracurricular activities.
          </p>
        </div>

        {/* Values Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-white text-xl`}>
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
                  <div className="w-12 h-1 bg-[#d9439f] rounded mt-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
