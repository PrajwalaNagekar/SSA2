"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const BG_IMAGES = [
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Copy-of-IMG_0150-scaled-raarvqhkam480d245ljzf4xgheov35uwou9fxxn0qw.jpg",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Copy-of-IMG_0256-scaled-raarvu8x1y9daswnjn6hp3zauy6bxy9u1cvdv1hg20.jpg",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC00003-scaled-raarvpjq3s2xor3hb35cun5zw0thvgr6cplygnoex4.jpg",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_1913-scaled-raarvpjq3s2xor3hb35cun5zw0thvgr6cplygnoex4.jpg",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_2101-scaled-raarvrfehg5ibz0r03ylzmox2sk8auyn0ywxf7lmko.jpg",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_2255-1-scaled-raarvqhkam480d245ljzf4xgheov35uwou9fxxn0qw.jpg",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_2349-scaled-raarvpjq3s2xor3hb35cun5zw0thvgr6cplygnoex4.jpg",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_5577-scaled-raarvpjq3s2xor3hb35cun5zw0thvgr6cplygnoex4.jpg",
];

const STATS = [
  { label: "Students", end: 5000, display: "5k+" },
  { label: "Award Winning", end: 89, display: "89" },
  { label: "Staff Members", end: 248, display: "248" },
  { label: "Security", end: 99, display: "99%", isPercent: true },
];

// AnimatedCounter
function AnimatedCounter({ end, display, isPercent, animate }) {
  const [count, setCount] = useState(isPercent ? 0 : 0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!animate || done) return;
    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 20);
    let raf;
    function tick() {
      start += increment;
      if ((isPercent && start >= end) || (!isPercent && start >= end)) {
        setCount(end);
        setDone(true);
      } else {
        setCount(Math.floor(start));
        raf = setTimeout(tick, 20);
      }
    }
    tick();
    return () => raf && clearTimeout(raf);
  }, [end, animate, done, isPercent]);
  return (
    <span>
      {animate
        ? isPercent
          ? `${Math.min(count, end)}%`
          : count >= end
          ? display
          : count
        : isPercent
        ? display
        : display}
    </span>
  );
}

// StatsBar
function StatsBar() {
  const [inView, setInView] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="bg-[#312b8b] py-6 md:py-8 w-full flex justify-center items-center">
      <div className="w-full max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 justify-between items-center">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.13, duration: 0.6, type: "spring" }}
            className="flex flex-col text-center"
          >
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white mb-1">
              <AnimatedCounter
                end={stat.end}
                display={stat.display}
                isPercent={!!stat.isPercent}
                animate={inView}
              />
            </div>
            <div className="text-xs sm:text-sm md:text-lg text-white/80">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const newsByCategory = {
  All: [
    {
      img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/difference-between-day-school-and-residential-school-396x360.webp",
      text: "7 Differences Between Day Schools and Residential Schools You Should Know",
      category: "Campus Life"
    },
    {
      img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/top-5-boarding-school-in-west-bengal-1.webp",
      text: "Top 5 Boarding School In West Bengal",
      category: "Academic"
    },
    {
      img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/advantage-of-boarding-school-for-international-students-1024x555-1.webp",
      text: "The Advantages of Boarding School for International Students",
      category: "Academic"
    },
    {
      img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/WhatsApp-Image-2025-07-03-at-13.56.12_f0545b22-1-396x360.webp",
      text: "Tips for Preparing Your Child for Boarding School Life",
      category: "Events"
    }
  ],
  Events: [
    {
      img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/WhatsApp-Image-2025-07-03-at-13.56.12_f0545b22-1-396x360.webp",
      text: "Tips for Preparing Your Child for Boarding School Life",
      category: "Events"
    }
  ],
  "Campus Life": [
    {
      img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/difference-between-day-school-and-residential-school-396x360.webp",
      text: "7 Differences Between Day Schools and Residential Schools You Should Know",
      category: "Campus Life"
    }
  ],
  Athletics: [
    {
      img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/top-5-boarding-school-in-west-bengal-1.webp",
      text: "Top 5 Boarding School In West Bengal",
      category: "Athletics"
    }
  ],
  Academic: [
    {
      img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/advantage-of-boarding-school-for-international-students-1024x555-1.webp",
      text: "The Advantages of Boarding School for International Students",
      category: "Academic"
    }
  ]
};

const tabs = [
  "All",
  "Events",
  "Campus Life",
  "Athletics",
  "Academic"
];

export function LatestNews() {
  const [activeTab, setActiveTab] = useState("All");
  const [isMobile, setIsMobile] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Auto-change background image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % BG_IMAGES.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  const currentNews = newsByCategory[activeTab] || [];
  const backgroundImage = BG_IMAGES[bgIndex];

  return (
    <>
      <section
        className="relative min-h-screen w-full py-6 md:py-8 lg:py-12 flex items-center justify-center"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* Zoom-out animated background */}
        <motion.div
          key={backgroundImage}
          initial={{ scale: 1.18, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat"
          }}
        />
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-0"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-2 flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Left: Heading + News Grid */}
            <div className="flex-1 min-w-0">
              {/* Heading and divider */}
              <div className="mb-4 md:mb-6 mt-3">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#262B84] mb-0">Latest News</h2>
                <div className="flex flex-row gap-1 mt-2">
                  <div className="w-4 h-1 md:w-6 md:h-1 rounded-full bg-indigo-500" />
                  <div className="w-4 h-1 md:w-6 md:h-1 rounded-full bg-indigo-500" />
                  <div className="w-4 h-1 md:w-6 md:h-1 rounded-full bg-pink-400" />
                  <div className="w-4 h-1 md:w-6 md:h-1 rounded-full bg-pink-400" />
                  <div className="w-4 h-1 md:w-6 md:h-1 rounded-full bg-indigo-500" />
                  <div className="w-4 h-1 md:w-6 md:h-1 rounded-full bg-indigo-500" />
                </div>
              </div>
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {currentNews.slice(0, 4).map((item, idx) => (
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col min-w-0 hover:shadow-xl transition-shadow duration-300" key={idx}>
                    <div className="relative h-32 sm:h-28 md:h-32 w-full">
                      <img
                        src={item.img}
                        alt="news"
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                    <div className="p-3 md:p-4 flex-1 flex items-end">
                      <p className="font-semibold text-sm sm:text-base md:text-[17px] leading-snug text-gray-900 line-clamp-3">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Tabs and List */}
            <div className="flex-1 min-w-0 mt-6 lg:mt-0">
              {/* Tabs */}
              <div className="flex gap-2 md:gap-4 mb-2 border-b border-[#e2e2e7] overflow-x-auto pb-1 hide-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 md:px-4 md:pt-2 md:pb-3 text-xs sm:text-sm md:text-base font-semibold transition-colors duration-150 whitespace-nowrap
                      ${activeTab === tab ? "text-[#262B84] border-b-2 md:border-b-4 border-[#842d83] bg-transparent" : "text-[#676788]"}`}
                    style={{
                      borderColor: activeTab === tab ? '#842d83' : 'transparent',
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {/* News List */}
              <div className="flex flex-col gap-3 md:gap-4 mt-4">
                {currentNews.map((item, idx) => (
                  <div className="bg-white flex items-center gap-3 p-2 md:p-3 rounded-md shadow hover:shadow-lg min-h-[65px] transition-shadow duration-300" key={idx}>
                    <div className="flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded overflow-hidden bg-gray-100">
                      <img
                        src={item.img}
                        alt="thumb"
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                    <p className="text-gray-900 font-semibold text-xs sm:text-sm md:text-base leading-tight line-clamp-2">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* StatsBar above news */}
      <StatsBar />

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
