"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function AdmissionsHero() {
  const [form, setForm] = useState({
    firstName: "",
    phone: "",
    email: "",
    city: "",
    studentType: "",
    grade: "",
  });
  const formRef = useRef(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_za89i89",    // your EmailJS service ID
        "template_283vidc",   // your EmailJS template ID
        formRef.current,
        "LwhTHdR9obO22jG24"   // your EmailJS public key
      )
      .then(
        () => {
          alert("Application sent successfully!");
          setForm({
            firstName: "",
            phone: "",
            email: "",
            city: "",
            studentType: "",
            grade: "",
          });
        },
        () => {
          alert("Error sending application.");
        }
      );
  };

  return (
    <section className="min-h-screen w-full flex items-center bg-white py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 px-4 sm:px-6 md:px-8">
        {/* LEFT SIDE - CONTENT */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center w-full max-w-xl text-center lg:text-left">
          {/* Decorative Heading */}
          <div className="mb-4 md:mb-6">
            <span className="font-semibold text-sm sm:text-base md:text-lg text-[#4946b6] mb-1 md:mb-2 block">
              Admissions Open
            </span>
            <div className="flex gap-1 justify-center lg:justify-start">
              <div className="w-4 md:w-5 lg:w-6 h-1 rounded-full bg-indigo-500" />
              <div className="w-4 md:w-5 lg:w-6 h-1 rounded-full bg-indigo-500" />
              <div className="w-4 md:w-5 lg:w-6 h-1 rounded-full bg-pink-400" />
              <div className="w-4 md:w-5 lg:w-6 h-1 rounded-full bg-pink-400" />
              <div className="w-4 md:w-5 lg:w-6 h-1 rounded-full bg-indigo-500" />
              <div className="w-4 md:w-5 lg:w-6 h-1 rounded-full bg-indigo-500" />
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            Admissions Open for <br className="hidden sm:block" />
            AY 2026-2027
          </h2>

          {/* Video Card */}
          <div className="w-full max-w-md md:max-w-lg mx-auto lg:mx-0">
            <div
              className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 shadow-md md:shadow-lg aspect-video flex items-center justify-center group border border-gray-200"
              tabIndex={0}
            >
              {/* Video: initially hidden by opacity, shows on hover */}
              <video
                src="/SRI-SRI-ACADEMY_5.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                muted
                playsInline
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-70 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Play Button */}
              <button
                type="button"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-white shadow-md 
                   border border-gray-200 transition-all hover:scale-110 hover:shadow-xl group-hover:opacity-0"
                tabIndex={-1}
                aria-label="Play video"
              >
                <svg width={20} height={20} className="md:w-6 md:h-6" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" fill="white" stroke="#ece7fd" strokeWidth="2" />
                  <polygon points="18,16 32,24 18,32" fill="#8d3ed9" />
                </svg>
              </button>

              {/* Video Label */}
              <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-4 bg-white/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full transition-opacity duration-300 group-hover:opacity-0">
                <span className="text-xs md:text-sm font-medium text-gray-800">
                  Watch Campus Tour
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="flex-1 flex justify-center w-full max-w-md mt-6 md:mt-0">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-[#312b8b] text-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl px-5 sm:px-6 md:px-8 py-6 md:py-8 w-full"
          >
            <div className="mb-4 md:mb-6 text-center sm:text-left">
              <span className="block font-medium text-white/80 mb-1 text-xs md:text-sm">
                Admission Open Now
              </span>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
                Apply for Session 2026-27
              </h3>
            </div>

            {/* Form Fields */}
            <div className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-[#192056] placeholder:text-white/70 
                        border-none outline-none focus:ring-2 focus:ring-pink-400 transition-all text-sm"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-[#192056] placeholder:text-white/70 
                        border-none outline-none focus:ring-2 focus:ring-pink-400 transition-all text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-[#192056] placeholder:text-white/70 
                        border-none outline-none focus:ring-2 focus:ring-pink-400 transition-all text-sm"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-[#192056] placeholder:text-white/70 
                        border-none outline-none focus:ring-2 focus:ring-pink-400 transition-all text-sm"
                  required
                />
              </div>

              <div className="space-y-3 md:space-y-4">
                <select
                  name="studentType"
                  value={form.studentType}
                  onChange={handleChange}
                  className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-[#192056] text-white 
                        focus:ring-2 focus:ring-pink-400 border-none outline-none text-sm"
                  required
                >
                  <option value="">Select Student Type</option>
                  <option value="boarding">Boarding</option>
                  <option value="dayboarding">Day Boarding</option>
                </select>
                <select
                  name="grade"
                  value={form.grade}
                  onChange={handleChange}
                  className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-[#192056] text-white 
                        focus:ring-2 focus:ring-pink-400 border-none outline-none text-sm"
                  required
                >
                  <option value="">Select Grade Applying For</option>
                  <option value="playgroup">Play Group</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg">KG</option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                  <option value="grade3">Grade 3</option>
                  <option value="grade4">Grade 4</option>
                  <option value="grade5">Grade 5</option>
                  <option value="grade6">Grade 6</option>
                  <option value="grade7">Grade 7</option>
                  <option value="grade8">Grade 8</option>
                  <option value="grade9">Grade 9</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 md:py-3.5 rounded-full bg-pink-500 hover:bg-pink-600 transition-all 
                       font-semibold text-white mt-4 md:mt-6 shadow-md hover:shadow-lg text-sm md:text-base"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
