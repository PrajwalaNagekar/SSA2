import React from "react";

const PrincipalProfile = () => (
  <div className="flex flex-col items-center bg-white text-justify">
    {/* Top Principal Profile Section */}
    <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-16 p-4 md:p-12 max-w-6xl w-full mx-auto">
      <div className="flex-1 flex justify-center items-center">
        <img
          src="Principal0.webp"
          alt="Principal delivering a speech"
          className="w-[340px] max-w-[80vw] rounded-lg object-cover shadow-lg"
        />
      </div>
      <div className="flex-1 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3b378a] mb-2 font-sans">
          Narendra Thota, Principal
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-[#4d4d79] mb-6 leading-snug font-sans">
          MBA (HR), B.Sc, B.Ed, MA Psychology (Purs.)
          <br />
          Principal, Cadet Pilot, Financial Analyst
        </h2>
        <div
          className="w-10 h-[6px] rounded mb-4"
          style={{
            background:
              "repeating-linear-gradient(135deg,#d9439f_0px,#d9439f_8px,#fff_8px,#fff_16px)",
          }}
        />
        <p className="text-base md:text-lg text-[#252544] leading-relaxed font-sans font-normal">
          The organizational ethos at SSA can be encapsulated in a succinct phrase: ‘World-class education with a human touch.’ This serves as the guiding principle that permeates every facet of our institution. We firmly believe that true excellence stems from a holistic well-being—where happiness, freedom from fear, and the liberty to express ourselves coalesce seamlessly. Accordingly, our institutional culture is meticulously crafted and consistently applied to champion this philosophy.
          <br /><br />
          Central to our approach is the understanding that a child nurtured by love today will radiate love tomorrow. Hence, we are deeply committed to curating a comprehensive educational environment for our students. Our unwavering commitment to 100 percent inclusive education is exemplified by maintaining classroom capacities of 35 or fewer students and a student-teacher ratio of 1:10. In this environment, each child is not only attended to but heard, fostering an atmosphere where every voice and idea is valued—an ethos aligned with Howard Gardner’s multiple intelligences framework.
        </p>
      </div>
    </div>
    {/* Divider */}
    <div className="w-full flex justify-center pt-2 pb-1">
      <div
        className="w-10 h-[6px] rounded"
        style={{
          background:
            "repeating-linear-gradient(135deg,#d9439f_0px,#d9439f_8px,#fff_8px,#fff_16px)",
        }}
      />
    </div>
    {/* Message Section */}
    <div className="max-w-3xl mx-auto p-4 mb-8 md:p-0">
      <p className="text-base md:text-lg text-[#252544] leading-relaxed font-sans font-normal mt-2">
        We adopt a trans-disciplinary approach to education, dismantling the confines of textbooks to cultivate a broader worldview. Academic excellence, grounded in a profound conceptual understanding intertwined with real-world scenarios, forms the cornerstone of our pedagogical philosophy. At SSA, we instill in our students the qualities of great communicators, innovative thinkers, risk-takers, and principled individuals, underpinned by core Indian values—embracing tradition while appreciating modernity, and cultivating tolerance and peace-loving global citizenship.
        <br /><br />
        SSA is a perpetual learner, dedicated to staying abreast of global educational best practices. This commitment is mirrored in substantial investments in infrastructure that seamlessly integrate technological advancements with human resources. Continuous professional development, guided by the principles of Benjamin Bloom’s taxonomy, ensures that our faculty is equipped to tailor teaching methods to the diverse competencies of our students. Recognizing the ever-evolving landscape of education, our teachers explore content beyond textbooks, constructing lessons with conceptual clarity that aligns seamlessly with the unique pedagogy at SSA.
        <br /><br />
        Understanding that the millennials are educating gen alpha who will shape the future, we prioritize robust and forward-looking career counseling starting as early as grade six. The crossroads program brings esteemed individuals from diverse professions to inspire and guide students on their future pathways. Children at SSA undergo comprehensive training in public speaking, leadership, and essential life skills, contributing to their development as eloquent orators, future leaders, and self-reliant individuals.
        <br /><br />
        Our house system and school championships serve as crucibles for fostering oneness and team spirit. Through these initiatives, students learn the value of shared responsibility, recognize their individual competencies, and coordinate their efforts towards common goals. As an educator at SSA, my endeavor is to provide a well-rounded educational experience, nurturing various intelligences – intellectual, social, emotional, physical, creative, and the ability to overcome adversity. Our aspiration is to empower children as progressive global citizens who contribute value, harmony, and beauty to the world, leaving an indelible impact on future generations.
        <br /><br />
        Jaihind,<br />
        <span className="font-bold">Narendra Thota</span>
      </p>
    </div>
  </div>
);

export default PrincipalProfile;
