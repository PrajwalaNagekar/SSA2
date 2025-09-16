export function MissionVisionSection() {
  return (
    <section className="relative w-full min-h-[480px] flex items-center justify-center py-20 text-justify">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/DSC06043-scaled.jpg')", // Replace with your actual image path
        }}
      >
        <div className="absolute inset-0  backdrop-blur-[2px]" style={{ background: "linear-gradient(180deg, #0A0118 0%, #F2295B00 100%)" }} />
      </div>
      {/* Cards Grid */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
        {/* Mission Card */}
        <div className="flex-1 max-w-xl bg-[#0F1E39C9] backdrop-blur-md rounded-lg shadow-lg px-8 py-10 flex flex-col items-center text-center relative">
          <span className="absolute top-6 right-7 text-pink-400 text-3xl font-bold select-none">“</span>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4 mt-1">Mission</h2>
          <div className="w-2/3 h-1 bg-pink-400 rounded-full mx-auto mb-6" />
          <p className="text-white/95 text-lg leading-normal">
            To encourage members of the school community to grow and develop in an atmosphere of openness, cooperation, friendship and collaboration. To enable children to broaden their vision and deepen their roots. To stimulate innovative thinking, critical reasoning and entrepreneurship. To develop children into confident, compassionate and responsible leaders who pursue their goals to become competent global citizens.
          </p>
        </div>
        {/* Vision Card */}
        <div className="flex-1 max-w-xl bg-[#0F1E39C9] backdrop-blur-md rounded-lg shadow-lg px-8 py-10 flex flex-col items-center text-center relative">
          <span className="absolute top-6 right-7 text-pink-400 text-3xl font-bold select-none">“</span>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4 mt-1">Vision</h2>
          <div className="w-2/3 h-1 bg-pink-400 rounded-full mx-auto mb-6" />
          <p className="text-white/95 text-lg leading-normal">
            To create a joyful, safe and tranquil environment where every member of the school is encouraged to develop professionally towards achieving self-actualization. To focus on every child’s social, spiritual, emotional, physical and cognitive development. To offer students a learning experience rooted in Indian traditions while exposing them to world culture.
          </p>
        </div>
      </div>
    </section>
  );
}
