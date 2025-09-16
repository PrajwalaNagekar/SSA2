import React from "react";

const images = [
  "/A-Retro-Streets-Initiative-Honoring-the-Past2.jpg", 
  "/A-Retro-Streets-Initiative-Honoring-the-Past3.jpg",
  "/A-Retro-Streets-Initiative-Honoring-the-Past4.jpg",
  "/A-Retro-Streets-Initiative-Honoring-the-Past5.jpg",
  "/A-Retro-Streets-Initiative-Honoring-the-Past.jpg",
];




 const images3 = [
    "/Sri-Sri-Academy-Students-Roll-into-Fun-with-an-Exciting-Tyre-Race2-rah2uthv3bpq8o3qrlekn6xf0ogjx8hs3y6abeaiyw.jpg",
    "/Sri-Sri-Academy-Students-Roll-into-Fun-with-an-Exciting-Tyre-Race3-rah2uwbdnttl7hznb4mgco7ssu2nkbsz4c4qr86cg8.jpg",
    "/Sri-Sri-Academy-Students-Roll-into-Fun-with-an-Exciting-Tyre-Race4-rah2uy721hw5upwx05fphnqpzltdzq0fslfpps3k3s.jpg",
    "/Sri-Sri-Academy-Students-Roll-into-Fun-with-an-Exciting-Tyre-Race5-rah2v10km000tjstjonl7513rrfhmtbmsze65lzdl4.jpg",
    "/Sri-Sri-Academy-Students-Roll-into-Fun-with-an-Exciting-Tyre-Race6-rah2v2w8zo2lgrq38pguc4k0yj6827j3h8p545wl8o.jpg",
    "/Sri-Sri-Academy-Students-Roll-into-Fun-with-an-Exciting-Tyre-Race7-rah2v5prk66gfllzs8oq1lueqosbpauahmnljzseq0.jpg",    
    "/Sri-Sri-Academy-Students-Roll-into-Fun-with-an-Exciting-Tyre-Race8-rah2v8ja4oabefhwbrwlr34siuefce5hi0m1zto87c.jpg",
    "/Sri-Sri-Academy-Students-Roll-into-Fun-with-an-Exciting-Tyre-Race-rah2urm6pnn5lg6h2klbi7ehtwpthuabfovbcudbbc.jpg",
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

export function Retro() {
  // Combine each set with itself for seamless looping
  const scrollListOne = [...images, ...images];


  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 text-justify">
      <style>{styles}</style>
      {/* Heading */}
      <h2 className="text-[#2a2d96] text-base md:text-lg font-semibold mb-2 mt-2">
        Learning Under Lanterns
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


 <h2 className="text-[#2a2d96] text-base md:text-lg font-semibold mb-2 mt-8">
        Sri Sri Academy Students Roll into Fun with an Exciting Tyre Race
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
