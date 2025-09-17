import React from "react";

const images = [
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Developing-Effective-Restorative-Circles-in-Classrooms2.png", 
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Developing-Effective-Restorative-Circles-in-Classrooms3.png",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Developing-Effective-Restorative-Circles-in-Classrooms4.png",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Developing-Effective-Restorative-Circles-in-Classrooms5.png",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Developing-Effective-Restorative-Circles-in-Classrooms6.png",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Developing-Effective-Restorative-Circles-in-Classrooms7.png",
   "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Developing-Effective-Restorative-Circles-in-Classrooms8.png",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Developing-Effective-Restorative-Circles-in-Classrooms9.png",
  "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Developing-Effective-Restorative-Circles-in-Classrooms.png",
];



// Custom keyframes for infinite scroll (add to global CSS, or use Tailwind plugin)
const styles = `
@keyframes scroll-x {
  100% { transform: translateX(-50%); }
}
.auto-scroll-x {
  animation: scroll-x 40s linear infinite;
  will-change: transform;
}
`;

export function Restoractive() {
  // Combine each set with itself for seamless looping
  const scrollListOne = [...images, ...images];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 text-justify">
      <style>{styles}</style>
      {/* Heading */}
      <h2 className="text-[#2a2d96] text-base md:text-lg font-semibold mb-2 mt-2">
       Developing Effective Restorative Circles in Classrooms
      </h2>
      <div className="w-16 h-[4px] mb-6 bg-gradient-to-r from-pink-500 to-transparent rounded-full" />

      {/* First auto-scroller */}
      <div className="overflow-hidden relative">
        <div className="flex auto-scroll-x gap-4 w-max no-scrollbar">
          {scrollListOne.map((img, idx) => (
            <div
              key={idx}
              className="min-w-[250px] sm:min-w-[320px] max-w-[340px] bg-white shadow-md rounded-xl overflow-hidden flex-shrink-0"
              style={{ height: "350px" }}
            >
              <img
                src={img}
                alt={`Surprise Talk ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
