export function PrincipalMessage() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center"
      style={{
        background:
          "url('https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Copy-of-IMG_0256-scaled.jpg') center center/cover no-repeat",
      }}
    >
      {/* Purple overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(180deg, #0A0118 0%, #F2295B00 100%)",
        }}
      ></div>

      {/* Main glass card */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col md:flex-row items-stretch gap-6 text-justify">
        {/* LEFT: Message */}
        <div
          className="flex-1  p-6 sm:p-8 md:p-10 flex flex-col justify-between rounded-2xl md:rounded-l-2xl md:rounded-r-none min-h-[400px]"
          style={{
            // background: "linear-gradient(180deg, #0A0118 0%, #F2295B00 100%)",
            background:"#0F1E39C9",
          }}
        >
          {/* Pink quote in top-right */}
          <span className="absolute top-2 right-5 text-pink-400 text-4xl sm:text-5xl font-bold select-none">
            &quot;
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl text-white mb-4 sm:mb-6 text-left">
            Broaden the Vision <br className="hidden sm:block" /> and Deepen the
            Roots
          </h2>

          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            The organizational ethos at SS... can be encapsulated in a succinct
            phrase: 'World-class education with a human touch.' This serves as
            the guiding principle that permeates every facet of our institution.
            We firmly believe that true excellence stems from a holistic
            well-being—where happiness, freedom from fear, and the liberty to
            express ourselves coalesce seamlessly. Accordingly, our institutional
            culture is meticulously crafted and consistently applied to champion
            this philosophy.
          </p>

          {/* Pink underline */}
          <div className="w-2/3 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full my-4" />

          {/* Qualifications */}
          <div className="text-white/90 text-sm sm:text-base md:text-lg font-medium">
            MBA (HR), B.Sc, B.Ed, MA Psychology (Purs.) <br />
            Principal, Cadet Pilot, Financial Analyst
          </div>
        </div>

        {/* RIGHT: Portrait and name */}
        <div
          className="flex-1   flex flex-col items-center justify-between rounded-2xl md:rounded-r-2xl md:rounded-l-none p-6 sm:p-8 md:pt-10 md:px-10 md:pb-5 min-h-[400px]"
          style={{
            // background: "linear-gradient(180deg, #0A0118 0%, #F2295B00 100%)",
            background:"#0F1E39C9",
          }}
        >
          {/* Principal image */}
          <div className="flex-1 flex items-center justify-center w-full">
            <img
              src="/Principal0.webp"
              alt="Principal"
              className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md object-cover object-top shadow-lg"
              style={{ minHeight: 280, background: "#dadaed" }}
            />
          </div>

          {/* Pink underline and name */}
          <div className="w-full mt-6 sm:mt-7">
            <div className="h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full w-[60%] mb-1" />
            <p className="text-white text-base sm:text-lg md:text-xl font-bold text-left mt-2 pl-1">
              Narendra Thota, Principal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
