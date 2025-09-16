import Marquee from "react-fast-marquee";
const cards = [
  {
    image: "https://ssa.kods.in/wp-content/uploads/2025/08/Collaborative-participation.webp",
    title: "Collaborative participation",
    description: "We encourage boarders to participate in activities in unison to achieve greater results."
  },
  {
    image: "https://ssa.kods.in/wp-content/uploads/2025/08/Nature-oriented.webp",
    title: "Nature-oriented premises",
    description: "Your ward will receive education in the lap of nature and take part in outdoor activities."
  },
  {
    image: "https://ssa.kods.in/wp-content/uploads/2025/08/Rational-thinking.webp",
    title: "Rational thinking",
    description: "Children go on field trips, debates & pursue Robotics to develop critical thinking."
  },
  {
    image: "https://ssa.kods.in/wp-content/uploads/2025/08/Interactive-experiential-learning.webp",
    title: "Interactive & experiential learning",
    description: "Student-led classroom activities and practical learning help in grasping subjects fully."
  },
  {
    image: "https://ssa.kods.in/wp-content/uploads/2025/08/Mental-health.webp",
    title: "Mental health",
    description: "Wardens and the staff look after the mental health of the boarders and help them grow."
  },
  {
    image: "https://ssa.kods.in/wp-content/uploads/2025/08/High-end-lodging.webp",
    title: "High-end lodging",
    description: "The residential infrastructure matches our reputation and ensures every child is comfortable."
  }
];
export default function ImpeccableFacilities() {
  return (
    <section className="w-full bg-white py-20 text-justify">
      {/* Heading */}
      <div className="flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-indigo-800">
          Impeccable{" "}
          <span className="relative inline-block">
            <span
              className="overflow-hidden whitespace-nowrap border-r-2 border-indigo-500 pr-1
                font-mono text-purple-500
                animate-typewriter"
              style={{ width: "8ch", display: "inline-block" }}
            >
              Boarding
            </span>
            <span className="animate-blink absolute right-0 top-0 h-full w-0 border-r-2 border-indigo-500"></span>
          </span>{" "}
          Facilities
        </h2>
        <div className="w-20 border-b-4 border-indigo-500 mt-6 mb-10" />
      </div>
      
      {/* Marquee Features Section */}
      <div className="mt-6">
        <Marquee
          gradient={false}
          speed={30}
          pauseOnHover={true}
          className="w-full"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center mx-8 min-w-[300px] max-w-[320px] md:min-w-[340px] md:max-w-[360px] bg-white p-6 rounded-lg shadow-md"
            >
              <div className="rounded-full bg-indigo-100 p-4 mb-4">
                <img 
                  src={card.image} 
                  alt={card.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
