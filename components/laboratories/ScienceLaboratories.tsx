import Image from "next/image";

export function ScienceLaboratories() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top row: image + text */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="/science-laboraties.webp"
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
              Science Laboratories
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
Laboratory teaching and experiments help encourage deep understanding in children. School Laboratories helps students enhance their learning by understanding the theoretical concepts which are taught in the classroom.            </p>
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
Our School has spacious , well maintained Laboratories ranging from Chemistry, Physics, Biology, Social Studies and Mathematics. These laboratories have advanced equipment , models and apparatus and it has been designed keeping in mind the safety of the students  </p>
         <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
The Math Lab offers an interactive platform to the students where they are given a practical demonstration of mathematical concepts through various hands-on activities. This makes Math learning fun , easy and helps in removing the fear of Math . We have also partnered with “JODO GYAN” to teach mathematical concepts through a variety of tools and kits.
            </p>
        
        </div>
      </div>

      </div>
    </section>
  );
}
