import Image from "next/image";

export function TalentProgram() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* First section: image left + text right */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Left image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_7175-scaled.webp"
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
              Talent identification program
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
We have full time experienced sports coaches for all sports which is available in our campus.</p>   
         <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
We have talent identification program and take Physical Fitness test to check students’ fitness level, his or her potential and ability which further helps the child to choose his/ her sport.
</p>         
<p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
    Skilful and Scientific sports Training is the first priority of SSA sports department (Grass route to Advance level training).
    </p>
<p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
    We maintain the 1:2 ratio for equipment and students.
We follow the proper assignment system to understand the progress level of the students.
</p>
<p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
Join us at Sri Sri Academy, Siliguri and discover your true potential through our diverse range of sports activities!
</p>
 </div>
        </div>

       
      </div>
    </section>
  );
}