export function ClassroomCount() {
  return (
    <section className="relative w-full min-h-[480px] flex items-center justify-center py-20 text-justify">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/WhatsApp-Image-2024-11-13-at-1.40.34-PM.jpeg')", // Replace with your actual image path
        }}
      >
        <div className="absolute inset-0  backdrop-blur-[2px]" style={{ background: "linear-gradient(180deg, #0A0118 0%, #F2295B00 100%)" }} />
      </div>
      
      {/* Statistics Cards Grid */}
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {/* Security Card */}
        <div className="bg-[#0F1E39C9] backdrop-blur-md rounded-lg shadow-lg px-6 py-8 flex flex-col items-center text-center">
          <div className="text-pink-400 text-4xl md:text-5xl font-bold mb-2">99%</div>
          <div className="w-12 h-1 bg-pink-400 rounded-full mb-3" />
          <h3 className="text-white text-lg md:text-xl font-semibold">Security</h3>
        </div>
        
        {/* Students Card */}
        <div className="bg-[#0F1E39C9] backdrop-blur-md rounded-lg shadow-lg px-6 py-8 flex flex-col items-center text-center">
          <div className="text-pink-400 text-4xl md:text-5xl font-bold mb-2">5K+</div>
          <div className="w-12 h-1 bg-pink-400 rounded-full mb-3" />
          <h3 className="text-white text-lg md:text-xl font-semibold">Students</h3>
        </div>
        
        {/* Award Winning Card */}
        <div className="bg-[#0F1E39C9] backdrop-blur-md rounded-lg shadow-lg px-6 py-8 flex flex-col items-center text-center">
          <div className="text-pink-400 text-4xl md:text-5xl font-bold mb-2">89</div>
          <div className="w-12 h-1 bg-pink-400 rounded-full mb-3" />
          <h3 className="text-white text-lg md:text-xl font-semibold">Award Winning</h3>
        </div>
        
        {/* Staff Members Card */}
        <div className="bg-[#0F1E39C9] backdrop-blur-md rounded-lg shadow-lg px-6 py-8 flex flex-col items-center text-center">
          <div className="text-pink-400 text-4xl md:text-5xl font-bold mb-2">248</div>
          <div className="w-12 h-1 bg-pink-400 rounded-full mb-3" />
          <h3 className="text-white text-lg md:text-xl font-semibold">Staff Members</h3>
        </div>
      </div>
    </section>
  );
}