export function SportBanner() {
  const bgImageUrl = "DSC08210-scaled.jpg"; // Replace with your image

  return (
    <section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden text-justify"> {/* Reduced height */}
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

      {/* Content - Increased width and reduced padding */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex flex-col items-center text-center"> {/* Increased max-width, reduced padding */}
        {/* Pink quote mark */}
        <span className="absolute top-2 right-4 sm:top-4 sm:right-6 text-pink-400 text-2xl sm:text-3xl font-bold select-none"> {/* Reduced size */}
          &quot;
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white leading-snug"> {/* Reduced margin and text size */}
          Sports are an integrated part of education.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-white mb-4 max-w-5xl mx-auto"> {/* Increased max-width, reduced margin */}
        Sports activities are designed in such a way which can help a child to become physically fit, mentally tough, emotionally stable and socially well adjusted. It gives them the strength and Confidence to survive in any situation.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-white mb-4 max-w-5xl mx-auto"> {/* Increased max-width, reduced margin */}
Through Sports activities we build character and develop the leadership qualities among the children.Students get Maximum opportunity to participate in games and sports in our campus. Inter-house Tournaments, Inter school Tournaments and CBSE cluster and Nationals are the different platforms for SSA children to showcase their Athletic skills.        </p>

        <p className="text-base sm:text-lg md:text-xl text-white mb-6 max-w-5xl mx-auto"> {/* Increased max-width, reduced margin */}
We make sure there is 100% participation in sports and activities by the students.</p>

        {/* Pink divider */}
        <div className="w-3/4 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full mx-auto mt-4" /> {/* Reduced margin */}
      </div>
    </section>
  );
}