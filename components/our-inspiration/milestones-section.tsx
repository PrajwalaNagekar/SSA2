import Image from "next/image";

export function MilestonesSection() {
  return (
    <section className="py-8 bg-white text-justify">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">
            Milestones of his life
          </span>
          <div className="flex justify-center mt-2">
            <div className="w-24 h-1 bg-indigo-600"></div>
          </div>
        </div>

        {/* Timeline Image */}
        <div className="max-w-100 mx-auto">
          <Image
  src="/srisri3.jpg.webp"
  alt="Sri Sri Ravi Shankar Key Milestones Timeline"
  width={5}      // decreased width
  height={5}     // decreased height
  className="w-full h-auto rounded-lg shadow-lg"
  priority
/>

        </div>
      </div>
    </section>
  );
}
