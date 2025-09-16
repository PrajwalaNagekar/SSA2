"use client";
import React from "react";

// Update the images to your actual paths
const sections = [
  {
    img: "1-2048x1365.webp",
    title: "Our Teachers",
    desc: (
      <>
        <span className="block mt-4">
          Our qualified, well trained and experienced academicians are committed to deliver the best to our students. We believe children feel strongly connected to teachers who nurture and care for them, the teacher-student bonding forms an integral part of our school culture. The friendly learning environment of our school encourages spontaneity and intellectual curiosity in the students.
        </span>
        <span className="block mt-4">
          The school provides a series of training and induction program to the teachers to equip them with the necessary skills and understand and deliver our concept of education. Teachers are specially trained to be compassionate, patient and child friendly – qualities essential in an education system where basic human values are nurtured.
        </span>
      </>
    ),
  },
  {
    img: "DSC03975-2048x1365.webp",
    title: "Administration Team",
    desc: (
      <span className="block mt-4">
        The administrative Department headed by the Chief Administrative Officer is the backbone of the school. The team work effortlessly and effectively in tandem with each other for the smooth functioning of the school. They also manage facilities and support staff and play a critical role in helping students acquire the resources they need to achieve academically.
      </span>
    ),
  },
];

// Modern Card Section, all content right, image left, for both blocks
const SectionBlock = ({ img, title, desc }) => (
  <section className="w-full flex flex-col md:flex-row items-center md:items-start justify-center my-14">
    <div className="flex-1 flex justify-end items-start mb-6 md:mb-0 md:mr-8">
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

const AboutTeams = () => (
  <div className="flex flex-col items-center w-full bg-gray-50 py-12 px-2 text-justify">
    <div className="w-full max-w-6xl">
      {sections.map((sec, i) => (
        <SectionBlock {...sec} key={i} />
      ))}
    </div>
  </div>
);

export default AboutTeams;
