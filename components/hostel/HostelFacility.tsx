import Image from "next/image";

export function HostelFacility() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* First section: image left + text right */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/computer-scaled-500x400-1.webp"
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
              Hostel Facility
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
A school with hostel facility in Siliguri exposes children to academics, art, and athletics, as well as a sense of responsibility. It is a place where students create memories and make lifelong friends.</p>   
         <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
The <b>Sri Sri Academy in Siliguri</b> provides a well-appointed and state-of-the-art residential facility which makes it the ideal school with hostel facility in Siliguri. There are separate hostels for boys and girls, away from the noise and pollution of the city, with wide open lush green spaces and multiple playing fields. The dormitories/rooms are spacious, bright , well-furnished and fully air-conditioned. We lay emphasis on creating a warm, welcoming, safe and invigorating atmosphere for the students.
</p>         
 </div>
        </div>

       
      </div>
    </section>
  );
}