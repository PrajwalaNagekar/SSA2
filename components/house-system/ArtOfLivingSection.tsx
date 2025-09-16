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

const ArtOfLivingSection = () => {
  const animatedText = useTypingEffect("Foundation");

  return (
    <div className="w-full bg-white py-16 px-4 text-justify">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-2xl font-bold">
            <span className="text-[#3b378a]">The Art of Living </span>
            <span className="text-[#d9439f] relative">
              {animatedText}
              <span className="animate-pulse">|</span>
            </span>
            <span className="text-[#3b378a]"> :</span>
          </h1>
          
          {/* Diagonal Lines Divider */}
          <div
            className="w-32 h-[8px] rounded mb-8"
            style={{
              background:
                "repeating-linear-gradient(45deg,#3b378a_0px,#3b378a_8px,#fff_8px,#fff_16px)",
            }}
          />
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 max-w-full">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            The house system at Sri Sri Academy, Siliguri helps to teach children the value of teamwork and encourage a sense of camaraderie, identity and belonging. It provides opportunities for participation, involvement and leadership skills to develop self esteem and confidence.
          </p>
          
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Houses are allotted to students from Class I. Participation is encouraged through various inter-house competitions in creative and performing arts, literary activities, sports and special assemblies, thereby, developing confidence in the members of the house to show case their talents. A healthy competitive and team spirit is thus inculcated and encouraged in every child. Throughout the year, students receive points which contribute to the house competitions. Then at the end of the year, all points are counted and the winning house for the year is announced and awards are distributed. The houses are:
          </p>
        </div>

        {/* Bottom Border Line */}
        <div className="mt-12 pt-8 border-t-2 border-gray-300"></div>
      </div>
    </div>
  );
};

export default ArtOfLivingSection;
