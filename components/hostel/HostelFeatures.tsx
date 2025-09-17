import Image from "next/image";

export function HostelFeatures() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* First section: image left + text right */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Hostel-Wardens.webp"
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
              Hostel Wardens
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
The comfort, safety, health, hygiene, and emotional well-being of the students are taken care of by well-trained wardens and staff. The male and female wardens of the respective hostels are strict yet compassionate . They help the students, take care of their needs as well as maintain discipline. They inspect the dormitories, study units and common-rooms, to ensure that the children maintain neatness and personal hygiene. They also keep in touch with parents via email or telephonically, providing regular updates about their children’s welfare.</p>   
         <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
Along with the wardens there are residential teachers who give personalized attention to each student. They work closely with the children , supervise study hours and provide extra support for academic excellence. The school also has proper mentoring and counselling sessions for the students.
</p>
          </div>
        </div>

        {/* Second section: image right + text left (reversed) */}
        <div className="flex flex-col md:flex-row-reverse md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Right image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/IMG_2727-scaled.webp" // Replace with your actual image path
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
              Games
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
The hostel students enjoy a wide range of Sports, P.T , Yoga , Karate etc under the guidance of well qualified coaches /teachers. Students are coached in a sport of their choice for a dedicated time each day.            </p>
         <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
Experiential learning is essential for the overall development of the student. The students participate in activities such as dance, music, art , celebrations , festivals and even cooking an occasional meal. We also organise trips, excursions and camps for the students to partake in an enjoyable learning experience.            </p>
         
          </div>
        </div>
      </div>
    </section>
  );
}