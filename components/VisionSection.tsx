export function VisionSection() {
  return (
    <section className="relative w-full min-h-[480px] flex items-center justify-center py-20">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Sri-Sri-Ravi-Shankar_MV_Podcast_Wordpress.png')", // Replace with your actual image path
        }}
      >
        <div
          className="absolute inset-0  backdrop-blur-[2px]"
          style={{
            background: "linear-gradient(180deg, #0A0118 0%, #F2295B00 100%)",
          }}
        />
      </div>
      {/* Cards Grid */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
        {/* Mission Card */}
        <div className="flex-2 max-w-5xl bg-[#2F2E8C42]  rounded-lg shadow-lg px-8 py-10 flex flex-col items-center text-center relative">
          <span className="absolute top-6 right-7 text-pink-400 text-3xl font-bold select-none">
            “
          </span>
          <h2 className="font-syne text-[45px] font-medium text-white mb-4 mt-1">
            Broaden the Vision and Deepen the Roots
          </h2>

          <p className="font-syne text-white/95 text-[17px] leading-normal  font-medium mb-2">
            A good system of education must instill self-esteem and creativity.
            The methodology of education needs to change to eliminate a lot of
            unwanted information.{" "}
          </p>
          <p className="font-syne text-white/95 text-[17px] leading-normal  font-medium mb-2">
            Creative methods of teaching will help children build their
            personalities. Creative sports and ancient techniques such as
            Avadhan, Meditations, Yoga, and Pranayama will go a long way. Dance
            and Music should also be introduced. Service is another good part of
            education. All facets of human life should be attended to and we can
            start that from a very young age. The key is to harness the ancient
            and being innovative with the modern.{" "}
          </p>
                    <div className="w-2/3 h-1 bg-pink-400 rounded-full mx-auto mt-3 mb-6" />
          <em className="font-syne text-white/95 text-[17px] leading-normal  font-medium mb-2">
            “Basic human values need to be encouraged in the classroom”
          </em>
          <p className="font-syne text-white/95 text-[17px] leading-normal font-medium">
          -Gurudev, Sri Sri Ravishankar
          </p>

        </div>
        {/* Vision Card */}
        {/* <div className="flex-1 max-w-xl bg-[#0F1E39C9] backdrop-blur-md rounded-lg shadow-lg px-8 py-10 flex flex-col items-center text-center relative">
          <span className="absolute top-6 right-7 text-pink-400 text-3xl font-bold select-none">“</span>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4 mt-1">Vision</h2>
          <div className="w-2/3 h-1 bg-pink-400 rounded-full mx-auto mb-6" />
          <p className="text-white/95 text-lg leading-normal">
            To create a joyful, safe and tranquil environment where every member of the school is encouraged to develop professionally towards achieving self-actualization. To focus on every child’s social, spiritual, emotional, physical and cognitive development. To offer students a learning experience rooted in Indian traditions while exposing them to world culture.
          </p>
        </div> */}
      </div>
    </section>
  );
}
