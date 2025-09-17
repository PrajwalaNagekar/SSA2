import Image from "next/image";

export function ArtOfLivingSection() {
  return (
    <section className="bg-white pt-0 pb-8 md:pb-16 text-justify">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
        {/* IMAGE SIDE */}
        <div className="relative flex-1 flex justify-center items-start lg:items-center py-6 md:py-8">
          <div className="w-full flex justify-center">
            <div className="bg-white shadow-lg md:shadow-2xl rounded-lg overflow-hidden max-w-full md:max-w-[400px] lg:max-w-[500px] w-full">
              <Image
                src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/srisri4.jpg.webp"
                alt="Gurudev Sri Sri Ravi Shankar"
                width={500}
                height={630}
                className="object-cover w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px]"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* TEXT SIDE */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:pl-10 lg:pr-8 xl:pl-12 xl:pr-16 py-6 md:py-8">
          {/* Decorative Accent */}
          <div className="flex items-center gap-1 mb-4 md:mb-5 mt-2 md:mt-3 justify-center lg:justify-start">
            <div className="w-4 h-1 md:w-6 md:h-1 rounded-full bg-indigo-500" />
            <div className="w-4 h-1 md:w-6 md:h-1 rounded-full bg-indigo-500" />
            <div className="w-4 h-1 md:w-6 md:h-1 rounded-full bg-pink-400" />
            <div className="w-4 h-1 md:w-6 md:h-1 rounded-full bg-pink-400" />
            <div className="w-4 h-1 md:w-6 md:h-1 rounded-full bg-indigo-500" />
            <div className="w-4 h-1 md:w-6 md:h-1 rounded-full bg-indigo-500" />
          </div>
          
          {/* Main content */}
          <div className="space-y-4 md:space-y-5 text-base sm:text-[17px] md:text-[18px] leading-relaxed text-black text-justify md:text-left">
            <p>
              Founded in 1981 by Gurudev Sri Sri Ravishankar, The Art of Living Foundation is an educational and humanitarian movement engaged in stress-management and service initiatives. The Art of Living is a multi-faceted organisation that propagates love, peace, and compassion, and is one of the largest volunteer bases in the world. The international headquarters is located in Bangalore, India. The organisation operates globally in 155 countries and has touched the lives of over 370 million people.
            </p>
            <p className="italic border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
              "Unless we have a stress-free mind and a violence-free society, we cannot achieve world peace." – Gurudev Sri Sri Ravishankar.
            </p>
            <p>
              The Art of Living Foundation runs several programs that are guided by Gurudev's philosophy of peace. To help individuals get rid of stress and experience inner peace, The Art of Living Foundation offers stress-elimination programmes which include breathing techniques, meditation, and yoga. These programmes have helped millions around the world to overcome stress, depression and violent tendencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}