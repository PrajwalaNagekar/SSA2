import Image from "next/image";

export function Boardingschool() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top row: image + text */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC05056-2048x1365.webp"
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
              Best CBSE Boarding School in West Bengal
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
                Sri Sri Academy is a highly-revered CBSE boarding school in West Bengal. It is a co-educational residential school located on an enormous lush green campus nestling at the foothills of the mighty Himalayas. The picturesque location of the school is ideal for nurturing young minds, bodies, and souls.            </p>
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
As a top English medium school in West Bengal, Sri Sri Academy has been providing a world-class combination of academics and extracurricular activities cater to the individualized needs of every student.            </p>
          </div>
        </div>
        {/* Bottom row: Centered Sri Sri Edge graphic
        <div className="w-full flex justify-center items-center">
          <Image
            src="/edge.webp"
            alt="Sri Sri Edge Circular Graphic"
            width={500}
            height={220}
            className="rounded-lg max-w-[95vw] h-auto object-contain shadow"
            priority
          />
        </div> */}
      </div>
    </section>
  );
}
