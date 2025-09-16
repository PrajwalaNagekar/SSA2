import Image from "next/image";

export function Yoga() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4">

        {/* Second section: image right + text left (reversed) */}
        <div className="flex flex-col md:flex-row-reverse md:items-start md:gap-8 lg:gap-16 mb-12">
          {/* Right image */}
          <div className="flex-shrink-0 w-full max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
            <Image
              src="/DSC08165-scaled.webp" // Replace with your actual image path
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
              Yoga & Art of Living
            </h2>
            {/* Decorative divider */}
            <div className="flex gap-1 mb-6 mt-1">
              <div className="w-8 h-1 bg-pink-400 rotate-180deg] rounded"></div>
              <div className="w-8 h-1 bg-pink-400 rotate-[180deg] rounded"></div>
            </div>
            <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
Regular practice of yoga and mindfulness improves students’ physical well-being and mental health.Yoga can improve focus, memory, self-esteem and can even reduce anxiety and stress in children.
</p>
<p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
    At Sri Sri Academy, children are encouraged to practice Yoga , Pranayam and meditation regularly The yoga teacher helps the students to perform the various yoga poses and also advise students on ways to improve or refine their practice
</p>
<p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
    Through pranayama and other breathing exercises in yoga, students learn at a young age how to master the technique of breathing correctly and improve the quality of their life.
    </p>
    <p className="text-gray-900 text-base md:text-[17px]  leading-relaxed mb-3">
        The students also attend programs like Utkarsha Yoga , Medha Yoga which are designed for the holistic development of the children from 5 to 18 years to enhance mental , emotional and physical well being . These programs are conducted at regular intervals in the school by the Art Of Living teachers
        </p>
          </div>
        </div>
      </div>
    </section>
  );
}