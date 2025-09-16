import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-gradient-to-r from-orange-200 to-orange-300 overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/Sri-Sri-Ravi-Shankar_MV_Podcast_Wordpress.png" 
          alt="Gurudev Sri Sri Ravi Shankar" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-center md:text-left w-full md:ml-8 lg:ml-16 xl:ml-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-3 md:mb-4 leading-tight">
            THE ART OF LIVING
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">FOUNDATION</span>
          </h1>
        </div>
      </div>
    </section>
  )
}