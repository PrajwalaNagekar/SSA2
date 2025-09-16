import Image from "next/image";

export function Transport() {
  return (
    <section className="w-full bg-white py-12 text-justify text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* First section: image left + text right */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="/DSC07916-1024x683.webp"
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
              Sri Sri Academy Siliguri , provides comfortable and efficient bus
              service to pick and drop the students at notified timings and
              scheduled stops.
            </p>{" "}
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
              Our transport facility is equipped to ensure maximum coverage and
              protection. Each bus is equipped with First-Aid Box, CCTV Camera,
              speed governor and other facilities. The buses are fully air
              conditioned and GPS enabled so that the parents and school can
              track the location of the buses.
            </p>
          </div>
        </div>

        {/* Second section: image right + text left (reversed) */}
        <div className="flex flex-col md:flex-row-reverse md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Right image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="/DSC_2458-1024x681.webp" // Replace with your actual image path
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
              Our transportation team, who ensures the buses arrive on time,
              have experienced drivers, helpers and designated lady attendant in
              each bus. The attendants are present in the bus when the first
              child is picked in the morning till the last child is dropped home
              in the evening. They are provided mobile phones to ensure easy
              monitoring of each route. Each bus also has a list of Emergency
              contact numbers, as well as Points of Contact within the school.{" "}
            </p>
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
              The administration team works closely with the team in charge of
              transportation to plan bus-routes and allot children a place on a
              bus. The team not only supervises the departure and arrival of
              buses on time each day but also conducts routine checks and
              transport safety drills for the staff and students.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
