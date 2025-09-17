import Image from "next/image";

export function Classrooms() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top row: image + text */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_2508-2048x1363.webp"
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
              Classrooms
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
Students spend a lot of time in the classrooms. A welcoming and comfortable classroom at our best day boarding school in West Bengal facilitates the learning experience of the students. We have designed our classrooms as places students look forward to coming to each day, places that feel welcoming, safe, nurturing, and fun. Our classrooms foster a positive learning environment, they are bright, well-ventilated and colorful with modern, age-appropriate and child-friendly furniture which can be arranged for individual, group learning, and group activity for optimum interaction. All the classrooms are technology enabled with Led TV, to impart Apple Education Programme to the students to make the lessons interactive and interesting.
            </p>
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
The strength of each class is limited to 30 students per class so that the students receive individualized attention and they get to interact more with the teacher. The teachers also cater to students’ different learning styles and ensure that they stay engaged and understand what is being taught.            </p>
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
