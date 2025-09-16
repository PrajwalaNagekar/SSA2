import React from "react";

const images = [
  "/1-1-1.webp", 
  "/2-1-1.webp",
  "/4-1.webp",
  "/6-1.webp"
];

const images1 = [
  "/little-officer4.jpeg",
  "/little-officer5.jpeg",
  "/little-officer6.jpeg",
  "/little-officer7.jpeg",
  "/little-officer8.jpeg",
  "/little-officer9.jpeg"
];

 const images2 = [
    "/20250204_150754_0001-rah1d7r7cgc257ysrx9hy7w3gmnzymouemug2brrt4.png",
    "/20250204_150754_0002-rah1dec2oal2ehp8pi3vxo8bmbrkgieyrjeuf9i0lk.png",
    "/20250204_150755_0003-rah1djz3tassc5h1skjncmt36mzrqp1csbbrax9nk8.png",
    "/20250204_150755_0004-rah1dqjz551slf7hq5e1c35bcc3c8krh57w5nuzwco.png",
    "/20250204_150755_0005-rah1dw70a59ij2zat7tsr1q2wnbjirdv5zt2jirjbc.png",
    ];
 const images3 = [
    "/20250204_145651_0000-rah1j2b1vccadvgymg9xgqrcixu7utwpvkz7kb3l3c.png",
    "/20250204_145651_0001-rah1j8vx76lan57ek14bg73komxscpmu8hjlx8ttvs.png",
    "/20250204_145651_0002-rah1jfgsj0uawexuhlypfnfsuc1culcyle40a6k2o8.png",
    "/20250204_145651_0003-rah1jl3to120u2pnkoegum0ken9k4rzcm60x5ubpmw.png",
    "/20250204_145651_0004-rah1jqqut19qrqhgnqu89klbyyhreylqmxxu1i3clk.png",
    "/20250204_145651_0005-rah1jxbq4vir107wlbom90xk4nlbwubuzui8eftle0.png",    
    "/20250204_145651_0006-rah1k2yr9vqgynzpoe4dnziboytj70y90mf5a3l8co.png",
    "/20250204_145651_0005-rah1jxbq4vir107wlbom90xk4nlbwubuzui8eftle01.png",
    "/20250204_145651_0004-rah1jqqut19qrqhgnqu89klbyyhreylqmxxu1i3clk.png",
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

export function SurpriseTalkGallery() {
  // Combine each set with itself for seamless looping
  const scrollListOne = [...images, ...images];
  const scrollListTwo = [...images1, ...images1];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <style>{styles}</style>
      {/* Heading */}
      <h2 className="text-[#2a2d96] text-base md:text-lg font-semibold mb-2 mt-2">
        SURPRISE TALK – A Glimpse into Nuclear Energy
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

      {/* Second section heading */}
      <h2 className="text-[#2a2d96] text-base md:text-lg font-semibold mb-2 mt-8">
        Surprise Talk on the Emergency Management Cycle
      </h2>
      <div className="w-16 h-[4px] mb-6 bg-gradient-to-r from-pink-500 to-transparent rounded-full" />

      {/* Second auto-scroller */}
      <div className="overflow-hidden relative">
        <div className="flex auto-scroll-x gap-4 w-max no-scrollbar">
          {scrollListTwo.map((img, idx) => (
            <div
              key={idx}
              className="min-w-[250px] sm:min-w-[320px] max-w-[340px] bg-white shadow-md rounded-xl overflow-hidden flex-shrink-0"
              style={{ height: "350px" }}
            >
              <img
                src={img}
                alt={`Surprise Talk Cycle ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

 <h2 className="text-[#2a2d96] text-base md:text-lg font-semibold mb-2 mt-8">
        Surprise Talk on CPR(Cardiopulmonary Resuscitation)
      </h2>
      <div className="w-16 h-[4px] mb-6 bg-gradient-to-r from-pink-500 to-transparent rounded-full" />

       <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          {images2.map((src, i) => (
            <div 
  key={i} 
  className={`
    h-60 sm:h-72 md:h-80 overflow-hidden rounded-lg bg-gray-100 shadow-sm
    ${i >= 6 ? 'hidden sm:block' : ''}
    ${i >= 4 ? 'hidden xs:block' : ''}
    hover:shadow-md transition-all duration-300
  `}
>
  <img
    src={src}
    alt={`Gallery image ${i + 1}`}
    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 cursor-pointer"
    draggable={false}
    loading="lazy"
  />
</div>
          ))}
        </div>

 <h2 className="text-[#2a2d96] text-base md:text-lg font-semibold mb-2 mt-8">
        Understanding of the Andaman and Nicobar Islands
      </h2>
      <div className="w-16 h-[4px] mb-6 bg-gradient-to-r from-pink-500 to-transparent rounded-full" />

       <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          {images3.map((src, i) => (
            <div 
  key={i} 
  className={`
    h-60 sm:h-72 md:h-80 overflow-hidden rounded-lg bg-gray-100 shadow-sm
    ${i >= 6 ? 'hidden sm:block' : ''}
    ${i >= 4 ? 'hidden xs:block' : ''}
    hover:shadow-md transition-all duration-300
  `}
>
  <img
    src={src}
    alt={`Gallery image ${i + 1}`}
    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 cursor-pointer"
    draggable={false}
    loading="lazy"
  />
</div>
          ))}
        </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
