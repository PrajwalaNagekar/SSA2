"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";

export function AdmissionsOpen() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    phone: "",
    email: "",
    city: "",
    studentType: "",
    grade: "",
  });
  const formRef = useRef(null);

  // Your image array
  const images = [
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/student-studying-with-lamp-at-night.jpg",
    "/DSC_9768-1-scaled.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/Sri-Sri-Ravi-Shankar.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC06561-scaled.jpg",
    "/IMG_20240904_085057-scaled.jpg",
    "https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/WhatsApp-Image-2024-05-11-at-12.37.37-PM-1.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4ka4gnl",    // your EmailJS service ID
        "template_furdhya",   // your EmailJS template ID
        formRef.current,
        "dnzJzlC0-8YrVVEqV"   // your EmailJS public key
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
          setShowPopup(false);
        },
        () => {
          alert("Error sending application.");
        }
      );
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white text-justify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ...Left content, age critera... */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <span className="text-indigo-800 font-medium text-base sm:text-lg">
                Admissions Open
              </span>
            </div>
            <div className="hidden sm:flex gap-1">
              <div className="w-4 h-1 bg-indigo-500 rounded-full" />
              <div className="w-4 h-1 bg-indigo-500 rounded-full" />
              <div className="w-4 h-1 bg-pink-400 rounded-full" />
              <div className="w-4 h-1 bg-pink-400 rounded-full" />
              <div className="w-4 h-1 bg-indigo-500 rounded-full" />
              <div className="w-4 h-1 bg-indigo-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-5 sm:mb-7 leading-tight">
              Admissions Open for AY <br className="hidden sm:block" /> 2026-2027
            </h2>
            <Button
              className="bg-[#e44bb6] hover:bg-[#d12e9f] text-white mb-6 sm:mb-8 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg flex items-center justify-center gap-2 w-[130px] sm:w-[140px] md:w-[150px] h-[40px] sm:h-[45px] md:h-[50px] shadow-none transition-all duration-200 hover:scale-105"
              onClick={() => setShowPopup(true)}
            >
              APPLY NOW
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="hidden sm:block">
                <path
                  d="M21 17.25C20.4545 17.0909 18.2545 16.5 16 16.5C14.0791 16.5 12.4174 16.8335 11.5 17.0176V6.75C12.1277 7.17934 13.1707 7.6501 14.5 7.6501C16.9552 7.6501 19.25 6.68639 19.25 6.68639V16.2439M3 17.25C3.54545 17.0909 5.74545 16.5 8 16.5C9.92093 16.5 11.5826 16.8335 12.5 17.0176V6.75C11.8723 7.17934 10.8293 7.6501 9.5 7.6501C7.04477 7.6501 4.75 6.68639 4.75 6.68639V16.2439M12 10.5C12.8284 10.5 13.5 9.82843 13.5 9C13.5 8.17157 12.8284 7.5 12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5Z"
                  fill="white"
                />
              </svg>
            </Button>
            {/* ...age criteria... */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <span className="text-indigo-800 font-medium text-base sm:text-lg">
                Age Criteria for Admission for the Session 2026-2027:
              </span>
            </div>
            <div className="hidden sm:flex gap-1 mb-2">
              <div className="w-4 h-1 bg-indigo-500 rounded-full" />
              <div className="w-4 h-1 bg-indigo-500 rounded-full" />
              <div className="w-4 h-1 bg-pink-400 rounded-full" />
              <div className="w-4 h-1 bg-pink-400 rounded-full" />
              <div className="w-4 h-1 bg-indigo-500 rounded-full" />
              <div className="w-4 h-1 bg-indigo-500 rounded-full" />
            </div>
            <div className="relative flex flex-col gap-2 sm:gap-3">
              <div className="absolute left-2 sm:left-3 top-2 bottom-2 w-0.5 bg-indigo-600 z-0" />
              {[
                { title: "Nursery", desc: "3 yrs and above." },
                { title: "LKG", desc: "4 yrs and above." },
                { title: "UKG", desc: "5 yrs and above." },
                { title: "All Other Classes", desc: "Based upon the previous records." },
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-2 sm:gap-3">
                  <span className="relative z-10 mt-0.5 sm:mt-1">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-indigo-600">
                      <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white flex items-center justify-center bg-indigo-600">
                        <span className="text-xs font-bold text-white sm:hidden">{idx + 1}</span>
                        <svg width="12" height="12" viewBox="0 0 18 18" fill="none" className="hidden sm:block">
                          <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                  </span>
                  <div>
                    <span className="font-bold text-sm sm:text-base">{item.title}</span>
                    <div className="text-gray-600 text-xs sm:text-sm md:text-base ml-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="flex items-center justify-center mt-6 lg:mt-0 order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentImageIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Admission ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 md:w-20 md:h-20 bg-indigo-600 rounded-lg -z-10"></div>
              <div className="absolute -top-3 -left-3 w-12 h-12 md:w-16 md:h-16 bg-pink-400 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal for Form */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-[#3C318F] rounded-2xl p-6 w-[95vw] max-w-xl mx-auto shadow-xl text-white">
            {/* Close button */}
            <button
              className="absolute top-3 right-4 text-white hover:text-pink-300 text-2xl font-semibold"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              &times;
            </button>
            {/* Header */}
            <div className="mb-2">
              <div className="text-sm font-medium mb-1">Admission Open Now</div>
              <div className="text-2xl font-semibold mb-4">Apply for Session 2026-2027</div>
            </div>
            <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="First Name"
                  className="flex-1 bg-[#19213B] rounded-xl px-4 py-3 text-white outline-none"
                />
                <input
                  name="phone"
                  type="text"
                  value={form.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Phone"
                  className="flex-1 bg-[#19213B] rounded-xl px-4 py-3 text-white outline-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email"
                  className="flex-1 bg-[#19213B] rounded-xl px-4 py-3 text-white outline-none"
                />
                <input
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={handleInputChange}
                  required
                  placeholder="City"
                  className="flex-1 bg-[#19213B] rounded-xl px-4 py-3 text-white outline-none"
                />
              </div>
              <div className="space-y-3 md:space-y-4">
                <select
                  name="studentType"
                  value={form.studentType}
                  onChange={handleInputChange}
                  className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-[#192056] text-white 
                                focus:ring-2 focus:ring-pink-400 border-none outline-none text-sm font-serif"
                  required
                >
                  <option value="">Select Student Type</option>
                  <option value="boarding">Boarding</option>
                  <option value="dayboarding">Day Boarding</option>
                </select>
                <select
                  name="grade"
                  value={form.grade}
                  onChange={handleInputChange}
                  className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-[#192056] text-white 
                                focus:ring-2 focus:ring-pink-400 border-none outline-none text-sm font-serif"
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
                  <option value="grade10">Grade 10</option>
                  <option value="grade11">Grade 11</option>
                  <option value="grade12">Grade 12</option>
                </select>
              </div>

              <button
                type="submit"
                className="text-lg mt-2 bg-[#f96bb2] hover:bg-pink-500 text-white font-semibold px-4 py-3 rounded-full transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
