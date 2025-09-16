import Image from "next/image";

export function SriSriAcademySection() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top row: image + text */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="/DJI_20250829165910_0062_D_DL-2048x1536.webp"
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
              Sri Sri Academy, Siliguri
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-[16deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[16deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
              Nested in the foothills of the Himalayas, amidst lush green tea gardens.
            </p>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
              Sri Sri Academy provides a serene and stress-free environment for children to engage in learning and developmental activities.
            </p>
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
              <span className="font-bold">Sri Sri Academy,</span> is regarded as one of the top boarding schools in West Bengal, it is an English-medium, Co-educational School, geared to nurture and educate students from Pre-Primary to Senior Secondary. We provide both day boarding and residential facilities. Our state of art infrastructure, activities and exposure enables every child’s physical, cognitive, emotional, social, and spiritual development. Physical Education, specialized games such as Basketball, Football, Badminton, Lawn Tennis Karate, Yoga and Meditation, Visual and Performing Arts as part of the curriculum, emphasize the importance of a healthy mind in a healthy body for holistic development.
            </p>
          </div>
        </div>
        {/* Bottom row: Centered Sri Sri Edge graphic */}
        <div className="w-full flex justify-center items-center">
          <Image
            src="/edge.webp"
            alt="Sri Sri Edge Circular Graphic"
            width={500}
            height={220}
            className="rounded-lg max-w-[95vw] h-auto object-contain shadow"
            priority
          />
        </div>
      </div>
    </section>
  );
}
