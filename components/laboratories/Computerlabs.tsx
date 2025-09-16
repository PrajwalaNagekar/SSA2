export function ComputerLabs() {
  const bgImageUrl = "WhatsApp-Image-2024-11-13-at-1.40.34-PM.jpeg"; // Replace with your image

  return (
    <section className="relative min-h-[50vh] w-full flex items-center justify-center overflow-hidden text-justify">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0A0118 0%, #0A011863 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 md:py-12 flex flex-col items-center text-center">
        {/* Pink quote mark */}
        <span className="absolute top-2 right-4 sm:top-4 sm:right-8 text-pink-400 text-2xl sm:text-3xl font-bold select-none">
          &quot;
        </span>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white leading-snug">
         Computer Labs and Robotics
        </h2>
        <p className="text-white text-base md:text-lg max-w-3xl mb-6">
Technology plays a major role in twenty-first century education. Our computer lab serves as the centre for teaching computers as well as providing a place for students to explore, create, connect and develop digital literacy skills . We have introduced Robotics to strengthen the practical learning abilities of students , as well as improve logical and analytical skills . The software is designed for students to make them understand the logical part of programming in a fun and intuitive approach.        </p>
        {/* Pink divider */}
        <div className="w-3/4 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full mx-auto mb-4 sm:mb-6" />

       
      </div>
    </section>
  );
}