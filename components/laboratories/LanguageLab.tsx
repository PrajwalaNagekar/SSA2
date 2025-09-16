import Image from "next/image";

export function LanguageLab() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top row: image + text */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="/DSC05568-2048x1365.webp"
              alt="Sri Sri Academy Siliguri campus"
              width={450}
              height={320}
              className="rounded-lg w-full h-auto object-cover"
              priority
            />
          </div>
          {/* Right text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4a42a7] mb-1">
             Language Lab
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
Sri Sri Academy has partnered with the Wordsworth English Language Lab . The English learning programme prepares the students to communicate in English with clarity and confidence. The methodology is a blend of Instructor Led Training in which concepts are introduced and reinforced with practice with a Computer Based Training , practice and evaluation. This enables the children to upgrade their vocabulary and improve their pronunciation through extensive listening and speaking practice.</p>
            
        
        </div>
      </div>

      </div>
    </section>
  );
}
