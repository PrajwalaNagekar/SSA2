import { Header } from '@/components/Header'
import { TopBar } from '@/components/TopBar'
import React from 'react'
import { Footer } from "@/components/Footer"
import { TestimonialSection } from '@/components/Testimonial'
import FinalCTASection from '@/components/cbse_boarding_school_admissions/FinalCTASection'
import { HeroSection } from '@/components/cbse_boarding_school_admissions/HeroSection'
import WhyChooseUsSection from '@/components/cbse_boarding_school_admissions/WhyChooseUsSection'
import AdmissionProcessSection from '@/components/cbse_boarding_school_admissions/AdmissionProcessSection'
import TestimonialsSection from '@/components/cbse_boarding_school_admissions/TestimonialsSection'

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <AdmissionProcessSection />
      <TestimonialsSection />
      <FinalCTASection />

      <Footer />
    </div>
  )
}

export default page