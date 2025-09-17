"use client";
import React from "react";

// Update the images to your actual paths
const sections = [
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC05087-2048x1365.webp",
    title: "With Diverse Facilities",
    desc: (
      <>
        <span className="block mt-4">
Children indulge in academic and social challenges at our boarding school in West Bengal. They are taught how to handle obstacles and overcome them by our experienced faculty.        </span>
        <span className="block mt-4">
Here at our co-ed boarding school in West Bengal, our faculty focuses on strengthening the academic base of each student, along with emphasizing co-curricular activities, daily meditation and yoga, well-planned trips, arts & crafts, dance & music, and the consumption of well-balanced, delicious meals.        </span>
      </>
    ),
    imagePosition: "left", // Added property to control image position
  },
  {
    img: "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Transport-3-500x300-1.webp",
    title: "A Boarding School in West Bengal that Feels Like Home Away from Home",
    desc: (
        <>
      <span className="block mt-4">
Sri Sri Academy, a CBSE boarding school in West Bengal India provides supreme residential facilities to make your ward feel at home. We have separate hostels for girls and boys, under the watchful eyes of our trained Wardens. So you don’t have to worry about your child’s hygiene, safety, and health.      </span>
<span className="block mt-4">
    At our school with hostel facility in Siliguri West Bengal, we carry out regular maintenance and checks to ensure the cleanliness and hygiene of the hostels. Furthermore, children are served nutritious meals, follow a scheduled timetable for games and academics, and readily make friends with the other boarders.
    </span>
    <span className="block mt-4">
You can count on our regular counseling sessions to help your ward readily settle down in a new environment.    </span>
</>
    ),
    imagePosition: "right", // Added property to control image position
  },
];

// Modern Card Section with alternating layout
const SectionBlock = ({ img, title, desc, imagePosition }) => (
  <section className={`w-full flex flex-col md:flex-row items-center md:items-start justify-center my-14 ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
    <div className={`flex-1 flex ${imagePosition === 'right' ? 'md:justify-start md:ml-8' : 'md:justify-end md:mr-8'} justify-center mb-6 md:mb-0`}>
      <img
        src={img}
        alt={title}
        className="rounded-2xl w-[350px] max-w-[92vw] h-[265px] object-cover shadow-xl border border-gray-200"
      />
    </div>
    <div className="flex-1 max-w-xl bg-white rounded-2xl px-7 py-9 shadow-md border border-gray-100">
      <h2 className="text-[#3b378a] text-3xl md:text-4xl font-bold mb-3 font-sans">{title}</h2>
      <div
        className="w-11 h-[6px] rounded mb-6"
        style={{
          background:
            "repeating-linear-gradient(135deg,#d9439f_0px,#d9439f_8px,#fff_8px,#fff_16px)",
        }}
      />
      <div className="text-base md:text-lg text-[#252544] font-sans leading-relaxed">{desc}</div>
    </div>
  </section>
);

const Facilities = () => (
  <div className="flex flex-col items-center w-full bg-gray-50 py-12 px-2 text-justify">
    <div className="w-full max-w-6xl">
      {sections.map((sec, i) => (
        <SectionBlock {...sec} key={i} />
      ))}
    </div>
  </div>
);

export default Facilities;