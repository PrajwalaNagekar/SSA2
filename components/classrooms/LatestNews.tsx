"use client";
import React, { useState, useEffect, useRef } from 'react';

const LatestNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const intervalRef = useRef(null);

  const newsCards = [
    {
      id: 1,
      title: "7 Differences Between",
      excerpt: "Whether we talk about the residential school or the day school, both carry some kind of differences. It is about",
      image: "/difference-between-day-school-and-residential-school-396x360.webp",
      url: "/7-differences-between-day-schools-and-residential-schools-you-should-know",
    },
    {
      id: 2,
      title: "Tips for Preparing",
      excerpt: "Are you looking to prepare your child for boarding school? Well, there are a number of benefits of sending your",
      image: "/WhatsApp-Image-2025-07-03-at-13.56.12_f0545b22-1-396x360.webp",
      url: "/tips-for-preparing-your-child-for-boarding-school-life",
    },
    {
      id: 3,
      title: "Top 5 Boarding",
      excerpt: "Whenever we think about a child’s education and how to engage him or her in a good environment to learn",
      image: "/top-5-boarding-school-in-west-bengal-1.webp",
      url:"/top-5-boarding-school-in-west-bengal",
    },
    {
      id: 4,
      title: "The Advantages of",
      excerpt: "Today, there are many International students who are coming to India to get a taste of the education here. Coming",
      image: "/advantage-of-boarding-school-for-international-students-1024x555-1.webp",
      url:"/the-advantages-of-boarding-school-for-international-students",
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % newsCards.length);
      }, 3000); // Change slide every 3 seconds
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    startAutoScroll();

    // Clean up on component unmount
    return () => stopAutoScroll();
  }, [newsCards.length]);

  // Scroll to current index
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].offsetWidth;
      const gap = 24; // space-x-6 is 1.5rem which is 24px
      const scrollPosition = currentIndex * (cardWidth + gap);
      
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-12 overflow-hidden text-justify">
      {/* Latest News, Heading & Subheading */}
      <div className="pt-8 pb-6 flex flex-col items-center">
        <span className="text-primary-700 font-semibold text-lg mb-1">Latest News</span>
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Happiness <span className="text-pink-500">Curriculum</span>
        </h1>
        <div className="w-16 border-b-4 border-primary-700 border-dotted mt-4"></div>
      </div>

      {/* Cards Container with Auto Scroll */}
      <div className="w-full max-w-6xl px-4 mt-8 md:mt-16">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden pb-6 md:pb-8 space-x-6 md:space-x-8 scroll-smooth"
        >
          {newsCards.map((card) => (
            <div 
              key={card.id} 
              className="flex-shrink-0 w-[85%] md:w-[45%] bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col">
                <div className="flex-shrink-0 w-full h-48 md:h-56 bg-slate-100 overflow-hidden">
                  {/* Replace with your image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{card.title}</h2>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    {card.excerpt}
                  </p>
                  <a href={card.url} className="text-primary-700 underline font-medium text-sm md:text-base">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;