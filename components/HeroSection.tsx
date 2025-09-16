"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const words = [
  "Roots",
  "Creativity",
  "Values",
  "Innovation",
  "Core",
  "Discovery",
  "Inspiration",
  "Traditions",
  "Foundations",
  "Growth"
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % words.length);
    }, 1800);
    return () => clearTimeout(timeout);
  }, [current]);

  // Try to play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);
  const router = useRouter();

  return (
    <section className="relative min-h-[640px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          // poster="/modern-school-students.png" // Fallback image
        >
          <source src="/VID-20241117-WA0121.mp4" type="video/mp4" />
          {/* <source src="/school-hero-video.webm" type="video/webm" /> */}
          {/* Fallback to image if video doesn't load */}
          {/* <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/modern-school-students.png')" }}
          /> */}
        </video>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
        {/* Badge */}
        <div className="mb-7 flex justify-center">
          <span className="flex items-center gap-2 px-6 py-1.5 rounded-full border border-[#312b8b] bg-white/10 text-white text-base font-medium shadow-sm backdrop-blur transition">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 22 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M11 2.5l1.25 3.76c.197.59.655 1.048 1.246 1.246L17.5 8.75l-3.76 1.25c-.59.197-1.048.655-1.246 1.246L11 15.5l-1.25-3.76a1.5 1.5 0 0 0-1.246-1.246L4.5 8.75l3.76-1.25a1.5 1.5 0 0 0 1.246-1.246L11 2.5z"
                  opacity="0.92"
                />
              </g>
            </svg>
            <span>Welcome to Sri Sri Academy, Siliguri</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 leading-tight">
          Broaden the Vision and Deepen the{" "}
          <br className="hidden md:block" />
          <span className="inline-block relative align-middle h-[1.1em] w-[10ch]">
            <span
              key={current}
              className="absolute left-0 top-0 w-full font-extrabold"
              style={{
                animation: "slide-in-out 1.8s both",
                willChange: "opacity, transform"
              }}
            >
              {words[current]}
            </span>
            <style jsx>{`
              @keyframes slide-in-out {
                0% { opacity: 0; transform: translateY(35%);}
                10% { opacity: 1; transform: translateY(0);}
                85% { opacity: 1; transform: translateY(0);}
                100% { opacity: 0; transform: translateY(-35%);}
              }
            `}</style>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          A good system of education must instill self-esteem and creativity. The methodology of education needs to change to eliminate a lot of unwanted information.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
      size="lg"
      className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md px-8 py-3 text-lg"
      onClick={() => router.push("/the-sri-sri-edge")}
    >
      Discover The SSA Advantage
    </Button>
          <Button
            size="lg"
            className="bg-[#322690] hover:bg-[#242360] text-white font-semibold rounded-md px-8 py-3 text-lg flex items-center"
          >
            Download Brochure
            <Download className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}