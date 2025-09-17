export function AcademyBadgeUI() {
  const bgImageUrl = "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC06548-scaled.jpg"; // Replace with your image
  const contentImageUrl = "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/House-System-1024x429.webp"; // Add your content image path

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden min-h-[350px] text-justify">
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
      <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-5 md:py-7 flex flex-col items-center text-center">
        {/* Image replacement for text content */}
        <div className="w-full max-w-3xl mx-auto mb-4 rounded-lg overflow-hidden shadow-2xl">
          <img 
            src={contentImageUrl} 
            alt="Educational content illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
