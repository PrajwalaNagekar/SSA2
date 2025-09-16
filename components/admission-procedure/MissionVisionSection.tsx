export function MissionVisionSection() {
  return (
    <section className="relative w-full min-h-[480px] flex items-center justify-center py-20 text-justify">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/Copy-of-IMG_0256-scaled.jpg')", // Replace with your actual image path
        }}
      >
        <div className="absolute inset-0  backdrop-blur-[2px]" style={{ background: "linear-gradient(180deg, #0A0118 0%, #F2295B00 100%)" }} />
      </div>
      {/* Cards Grid */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
        {/* Mission Card */}
        <div className="flex-1 max-w-xl bg-[#0F1E39C9] backdrop-blur-md rounded-lg shadow-lg px-8 py-10 flex flex-col items-center text-center relative">
          <span className="absolute top-6 right-7 text-pink-400 text-3xl font-bold select-none">“</span>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4 mt-1">Registration By Email</h2>
          <div className="w-2/3 h-1 bg-pink-400 rounded-full mx-auto mb-6" />
          <p className="text-white/95 text-lg leading-normal">
Fill the Online Inquiry Form, and take a printout of the Application Form sent to your E-mail ID. Fill the necessary details, scan the form and send it to admissions@srisriacademy.in The Registration Fee can be paid online and the transaction details are also sent via Email.          </p>
        </div>
        {/* Vision Card */}
        <div className="flex-1 max-w-xl bg-[#0F1E39C9] backdrop-blur-md rounded-lg shadow-lg px-8 py-10 flex flex-col items-center text-center relative">
          <span className="absolute top-6 right-7 text-pink-400 text-3xl font-bold select-none">“</span>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4 mt-1">Offline Registration:</h2>
          <div className="w-2/3 h-1 bg-pink-400 rounded-full mx-auto mb-6" />
          <p className="text-white/95 text-lg leading-normal">
Collect the Application Form from the Admissions Office, carefully fill in all the required details, and return the completed form to the Admissions Office by post, courier, or in person, ensuring that it is accompanied by the necessary Bank Draft or At Par Cheque, so that your registration can be processed without delay.          </p>
        </div>
      </div>
    </section>
  );
}
