import Image from "next/image";

export function ClassroomsLibray() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top row: text + image (reversed order) */}
        <div className="flex flex-col md:flex-row-reverse md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Right image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="/Library.webp"
              alt="Sri Sri Academy Siliguri campus"
              width={450}
              height={320}
              className="rounded-lg w-full h-auto object-cover"
              priority
            />
          </div>
          {/* Left text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4a42a7] mb-1">
              Library
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-2">
Reading and sharing stories can help children develop literacy skills, spark imagination, stimulate curiosity and develop communication skills. Children who read develop broad vocabulary, increased general knowledge and a better understanding of other cultures. At Sri Sri Academy, the best day boarding school in West Bengal, we encourage students to read whether it’s for information or for fun.          
  </p>
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
Our school library is a special place for learning, thinking , reading and a favorite spot for many students. It is a space where students feel welcome and are encouraged to grow and learn , it is also ideal for story telling , group discussions and interaction. Each student is assigned a library card and books are issued to the students through the library management system. The library is managed by a qualified librarian who assists students in the selection of books appropriate for their age and standard.The librarian also organises book fairs ,literary festivals and activities The students and staff have access to a wide range of fiction ,reference books, encyclopedia, journals,magazines and newspapers to enrich the students classroom activities and knowledge.
</p>
</div>
    </div>

      </div>
    </section>
  );
}