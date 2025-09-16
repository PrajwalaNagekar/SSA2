import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function InstitutionsSection() {
  const institutions = [
    "Sri Sri Ravishankar Junior College in Guwahati (Maharashtra)",
    "Sri Sri College of Ayurvedic Science and Research in Bangalore",
    "Sri Sri Institute of Agricultural Sciences & Technology Trust",
    "Sri Sri Institute of Management Studies",
    "Sri Sri Centre of Professional Excellence",
    "Sri Sri School of Architecture",
    "Sri Sri Institute of Computer Science at Dwarka (Maharashtra)",
    "Sri Sri University in Cuttack (Odisha)",
  ]

  return (
    <section className="py-16 bg-white text-justify">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left">
            Higher Education Institutions under SSRVM Trust are:
          </h3>

          {/* Institutions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {institutions.map((institution, index) => (
              <Card key={index} className="border-l-4 border-l-indigo-600">
                <CardContent className="p-4">
                  <p className="text-gray-700 text-sm sm:text-base">
                    {institution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Logos */}
          {/* <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
            <Image
              src="/09.png"
              alt="Art of Living"
              width={80}
              height={80}
              className="opacity-70 w-16 sm:w-20 h-auto"
            />
            <Image
              src="/08.webp"
              alt="SSRVM"
              width={80}
              height={80}
              className="opacity-70 w-16 sm:w-20 h-auto"
            />
            <Image
              src="/sri_siddhartha_centre_for_media_studies___india_logo.jpeg"
              alt="Sri Sri University"
              width={80}
              height={80}
              className="opacity-70 w-16 sm:w-20 h-auto"
            />
            <Image
              src="/images.png"
              alt="SSA"
              width={80}
              height={80}
              className="opacity-70 w-16 sm:w-20 h-auto"
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}
