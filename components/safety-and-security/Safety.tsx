import Image from "next/image";

export function Saftey() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* First section: image left + text right */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC03845-2048x1365.webp"
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
              A safe and secure environment
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
A safe and secure environment is a prerequisite for effective teaching and learning . Safety of the children is the priority of the school .We take every possible measure to ensure that our students have access to a learning environment that is safe, secure and enjoyable.</p>   
         <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
CCTV cameras have been deployed across the campus , at all entry – exit points and the classrooms which is closely monitored round the clock , by the Chief Administrative Officer and our dedicated security team.
</p>
          </div>
        </div>

        {/* Second section: image right + text left (reversed) */}
        <div className="flex flex-col md:flex-row-reverse md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Right image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC03846-2048x1365.webp" // Replace with your actual image path
              alt="Math Laboratory at Sri Sri Academy"
              width={450}
              height={320}
              className="rounded-lg w-full h-auto object-cover"
              priority
            />
          </div>
          {/* Left text */}
          <div className="flex-1">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-[#4a42a7] mb-1">
              Art and Craft
            </h2> */}
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
There are male and female Security guards at the main gate and all the entry / exit points in the school building and hostel . Entry of parents and visitors in school premises are registered and visitors are provided with Visitors Card for entry            </p>
         <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
Fire sprinklers, alarms and smoke detectors have been placed at regular intervals and are routinely checked. Drills and trainings are conducted regularly .            </p>
         
          </div>
        </div>
      </div>
    </section>
  );
}