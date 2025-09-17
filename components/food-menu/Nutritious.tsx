import Image from "next/image";

export function Nutrious() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* First section: image left + text right */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_2304-2048x1363.webp"
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
             Nutritious Vegetarian Cuisine

            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
The students are served a wide range of vegetarian cuisine, which is wholesome, balanced,nutritious and specially curated by a Nutritionist. The School Menu is changed on a monthly basis, with inputs from staff and students via the School Food Committee.</p>   
         <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
We do not permit junk food and aerated soft drinks on the campus.
</p>         
 </div>
        </div>

       
      </div>
    </section>
  );
}