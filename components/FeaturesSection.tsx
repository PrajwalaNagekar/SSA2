"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Trophy } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function useInView(ref, rootMargin = "0px") {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inView;
}

export function FeaturesSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, "-100px");
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
    }),
  };

  const features = [
    { 
      icon: Users, 
      color: "#61A0F7", 
      title: "Green Campus",
      percentage: "95%"
    },
    { 
      icon: Lightbulb, 
      color: "#49D09F", 
      title: "Happy Minds",
      percentage: "96%"
    },
    { 
      icon: Trophy, 
      color: "#B678F2", 
      title: "Pure Dream",
      percentage: "99%"
    },
  ];

  return (
    <section className="mb-12" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              className="w-full"
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Card className="rounded-xl shadow-md hover:shadow-lg border-0 bg-white h-full transition-all duration-300">
                <CardContent className="p-4 sm:p-5 flex items-center">
                  {/* Icon Container */}
                  <div className="flex-shrink-0 mr-4 sm:mr-5">
                    <div 
                      className="p-2 sm:p-3 rounded-lg"
                      style={{ backgroundColor: `${feature.color}15` }}
                    >
                      <feature.icon
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                        style={{ color: feature.color }}
                        strokeWidth={2.2}
                      />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-2xl sm:text-3xl font-bold" style={{ color: feature.color }}>
                      {feature.percentage}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}