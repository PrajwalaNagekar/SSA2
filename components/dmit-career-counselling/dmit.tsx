import Image from "next/image";

export function DMIT() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* First section: image left + text right */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="/DSC00003-1024x684.webp"
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
              Dermatoglyphics Multiple Intelligence Test (DMIT)
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2 text-justify">
              DMIT is a well-recognized scientific tool to study human fingerprints. It is a set of assessments developed by scientists and medical experts based on genetics, embryology, dermatoglyphics, neuroscience and pediatric psychology through methods of observation, record, comparison and summarization in combination with clinical experience.
            </p>{" "} 
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3 text-justify">
              Through the connection of fingerprints and brain, the test analyses the inborn strengths and potential of your child. DMIT is an exceptional tool for both parents and teachers to understand a child’s brain activity, innate characteristics and intelligence. Every child is special in his/her own way and DMIT enables us to understand a child’s unique learning style, multiple quotients, learning methods and personality traits.
            </p>
          </div>
        </div>

        {/* Second section: image right + text left (reversed) */}
        <div className="flex flex-col md:flex-row-reverse md:items-start md:gap-8 lg:gap-16 mb-12 text-justify">
          {/* Right image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="/DSC_2101-1024x681.webp" // Replace with your actual image path
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
              Career Counselling
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
              Career counseling plays a vital role in guiding and empowering students to make informed decisions about their future. It helps students explore their interests, strengths, and goals, and provides them with the necessary tools and resources to navigate their career paths successfully.{" "}
            </p>
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
              At our school, we understand the importance of providing comprehensive career guidance to our students. Our career counseling program aims to support students in their personal and professional development, helping them discover their passions and potential career opportunities.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
