import Image from "next/image";

export function MottoSection() {
  return (
    <section className="w-full bg-white py-12 text-justify">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Left: Logo */}
        <div className="flex-shrink-0 w-full max-w-xs mx-auto md:mx-0 flex justify-center md:justify-start pt-2">
          <Image
            src="https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Untitled_design__2_-removebg-preview.webp"
            alt="Sri Sri Academy Logo"
            width={320}
            height={320}
            className="object-contain w-[250px] sm:w-[320px] h-auto"
            priority
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1 mt-8 md:mt-0 md:pl-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3736a7] mb-2 leading-tight uppercase tracking-wide">
            Motto : Deepen the Roots,<br />Broaden the Vision
          </h2>
          <div className="flex gap-1 mb-6 mt-1">
            <div className="w-8 h-1 bg-pink-400 rotate-[16deg] rounded"></div>
            <div className="w-8 h-1 bg-pink-400 rotate-[16deg] rounded"></div>
            <div className="w-8 h-1 bg-pink-400 rotate-[16deg] rounded"></div>
            <div className="w-8 h-1 bg-pink-400 rotate-[16deg] rounded"></div>
          </div>
          <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-4">
            Our strength is our motto ‘Broaden The Vision, Deepen The Roots’ which is a perfect blend of modern aspects of education and a deep rooted sense of our culture and values. Along with modern teaching concepts like technology enabled classes and Robotics, our students also practice Yoga, Pranayama, Meditation and Shloka chanting which helps in reducing stress and improves attention span and focus. Deemed as one of the top boarding schools in West Bengal, we aim is to promote values of compassion, trust, integrity, caring and sharing while offering an academically-rich curriculum. The ancient Indian spiritual values, inspired by the teachings of Gurudev Sri Sri Ravi Shankar, are interlaced into the life of students through weekly story sessions, Value Education, Life Skills classes and service activities. This helps in holistic development, students learn to become socially responsible and conscious global citizens.
          </p>
          <p className="text-gray-700 text-base md:text-[17px] leading-relaxed">
            We harness every child’s ability to make decisions, be conscious of themselves and their surroundings along with having a sense of individuality and independence. We provide a conducive, safe and warm environment to our students to learn and imbibe the best of character building.
          </p>
        </div>
      </div>
    </section>
  );
}
