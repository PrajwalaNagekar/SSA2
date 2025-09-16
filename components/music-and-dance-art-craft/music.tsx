import Image from "next/image";

export function Music() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* First section: image left + text right */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="/DSC_2653-2048x1363.webp"
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
              Music,Dance
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
Visual and Performing Arts are significant in helping children to develop their creative skills. At Sri Sri Academy we expose the children to various art forms to foster their imagination, creative passion and confidence so they become happy and well rounded individuals.
</p>   
         <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
Our Music, Dance and Art rooms are designed aesthetically which is ideal for artistic expression The well-equipped Music room contains a variety of classical and western musical instruments. The children learn not only vocal music but also learn how to play a variety of instruments. They are guided in their musical journey by a well-qualified music teacher who imparts appropriate music lessons in classical, folk and western genres. There is a separate, spacious and well equipped dance studio where the children are trained in various forms of classical, contemporary and modern dance.</p>
          </div>
        </div>

        {/* Second section: image right + text left (reversed) */}
        <div className="flex flex-col md:flex-row-reverse md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Right image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="/dance2-582x333-1-582x332-1-500x333-1.webp" // Replace with your actual image path
              alt="Math Laboratory at Sri Sri Academy"
              width={450}
              height={320}
              className="rounded-lg w-full h-auto object-cover"
              priority
            />
          </div>
          {/* Left text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4a42a7] mb-1">
              Art and Craft
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
The bright and spacious Art room provides a perfect environment for the children to bring out their creative excellence. Students are given the freedom to explore with colors, textures, media, and new ideas and encouraged to explore their creativity and nurture their imagination.            </p>
         <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
            The Art room witnesses the creative talents of the children in the form of craft,sketches and paintings. The shelf of the Art room stands tall proudly displaying the works of the children.
            </p>
         
          </div>
        </div>
      </div>
    </section>
  );
}