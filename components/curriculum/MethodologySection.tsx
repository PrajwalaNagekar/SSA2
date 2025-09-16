"use client";
import React from "react";
import { motion } from "framer-motion";

const MethodologySection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-8 text-justify">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column - Methodology Cards */}
          <div className="flex-1 w-full">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#312b8b] mb-4">
                Methodology
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#d9439f] to-[#d9439f]/50 mb-6"></div>
              <div className="text-gray-800 leading-relaxed mb-8">
                <p className="mb-4 font-medium">
                  All the activities in our school are based on the "8 Aspects of Education", 
                  in accordance with the 5 elements in nature. This has been introduced by 
                  Gurudev Sri Sri Ravishankar, these are:
                </p>
                <p className="font-medium">
                  <strong className="text-[#312b8b]">CONCEPT</strong> as solid as the <strong className="text-[#312b8b]">Earth</strong>,{" "}
                  <strong className="text-[#312b8b]">ATTITUDE</strong> like that of <strong className="text-[#312b8b]">Water</strong> that takes the
                  shape of the container, <strong className="text-[#312b8b]">INFORMATION</strong> which is a readiness to receive from all
                  sources like <strong className="text-[#312b8b]">Air</strong> all around us, <strong className="text-[#312b8b]">IMAGINATION</strong> which is enthused by
                  the <strong className="text-[#312b8b]">Fire</strong> and <strong className="text-[#312b8b]">FREEDOM</strong> in the mind like the <strong className="text-[#312b8b]">Space</strong> that is all pervading.
                </p>
              </div>
            </div>

            {/* Methodology Cards Stack */}
            <div className="space-y-0 rounded-lg overflow-hidden shadow-xl">
              {/* CONCEPTS Card */}
              <motion.div 
                className="bg-gradient-to-r from-yellow-700 to-amber-800 text-white px-6 py-5 flex items-center justify-center relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-center">CONCEPTS</h3>
                <p className="absolute bottom-2 left-6 text-xs opacity-85">that shapes solid as the Earth</p>
              </motion.div>
              
              {/* INFORMATION Card */}
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-5 flex items-center justify-center relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-center">INFORMATION</h3>
                <p className="absolute bottom-2 left-6 text-xs opacity-85">from everywhere like the Air around us</p>
              </motion.div>
              
              {/* ATTITUDE Card */}
              <motion.div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-5 flex items-center justify-center relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-center">ATTITUDE</h3>
                <p className="absolute bottom-2 left-6 text-xs opacity-85">like Water that fills the container it's poured in</p>
              </motion.div>
              
              {/* IMAGINATION Card */}
              <motion.div 
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-5 flex items-center justify-center relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-center">IMAGINATION</h3>
                <p className="absolute bottom-2 left-6 text-xs opacity-85">like the spark of Fire that ignites</p>
              </motion.div>
              
              {/* FREEDOM Card */}
              <motion.div 
                className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white px-6 py-5 flex items-center justify-center relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-center">FREEDOM</h3>
                <p className="absolute bottom-2 left-6 text-xs opacity-85">in the mind like the Space in the universe</p>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Our Belief */}
          <div className="flex-1 w-full">
            {/* Our Belief Section */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#312b8b] mb-4">
                Our Belief – Holistic Education
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#d9439f] to-[#d9439f]/50 mb-6"></div>
              <div className="text-gray-800 leading-relaxed space-y-6">
                <p className="font-medium">
                  We believe in 'Vidya Dadati Poornatvam' which means Education
                  Brings Completeness.
                </p>
                <p className="font-medium">
                  Reckoned amongst the Best CBSE schools in Siliguri, we ensure
                  to offer a conducive environment and we focus and emphasize
                  on the academic development of the child along with physical,
                  moral, and social development, so that each child blossoms
                  complete with Academic Excellence coupled with Human Values.
                </p>
                <p className="font-medium">
                  We ensure that our students learn the latest aspects of modern
                  education and also inculcate the strength of our culture. We
                  nurture talent and encourage students to develop new skills and
                  strive for excellence at every opportunity.
                </p>
              </div>
            </div>

            {/* Video Section */}
            <div className="bg-gradient-to-br from-[#312b8b] to-[#4f46ba] rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">5 ASPECTS OF EDUCATION</h3>
              
              {/* YouTube Video Embed */}
              <div className="bg-black rounded-lg aspect-video mb-4 overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/PBJ0WlphRFI?si=TqEgz1o8FXiGTwyj" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologySection;