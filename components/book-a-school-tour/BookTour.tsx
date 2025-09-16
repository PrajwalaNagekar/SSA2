"use client";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const BookTour = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Tour";
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  // Form state
  const [form, setForm] = useState({
    parentsName: "",
    phone: "",
    email: "",
    childName: "",
    visitDate: "",
    message: "",
  });

  const formRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setTypedText(fullText.substring(0, typedText.length - 1));
        setSpeed(50);
      } else {
        setTypedText(fullText.substring(0, typedText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, fullText, speed]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_za89i89", // your EmailJS service ID
        "template_cy0tthm", // your EmailJS template ID
        formRef.current,
        "LwhTHdR9obO22jG24" // your EmailJS public key
      )
      .then(
        () => {
          alert("Book Application sent successfully!");
          setForm({
            parentsName: "",
            phone: "",
            email: "",
            childName: "",
            visitDate: "",
            message: "",
          });
        },
        () => {
          alert("Error sending application.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8 text-justify">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Form & Info */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          {/* Title with typing animation */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#312b8b] h-12">
              Book A {typedText}
              <span className="inline-block w-1 h-8 bg-[#d9439f] ml-1 animate-pulse"></span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#d9439f] to-[#4f46ba] rounded-full mt-2"></div>
          </div>

          {/* Info Text */}
          <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
            We invite you to set an appointment with our admissions office to schedule a tour of our school by filling the form given below or by sending us an email to <a href="mailto:admissions@srisriacademy.in" className="underline">admissions@srisriacademy.in</a>. We look forward to meeting you.
          </p>

          {/* Address & Contact */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="text-xs md:text-sm text-gray-600 space-y-1">
              <p>Dhukuria, P.O. New Chumta, Dagapur, Siliguri-734009, West Bengal</p>
              <p>+91 9733566684 +91 9733566685 info@srisriacademy.in</p>
              <p>Affiliation Number : 2430273</p>
              <p>School Number : 15926</p>
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="parentsName"
                value={form.parentsName}
                onChange={handleChange}
                placeholder="Parents Name"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#312b8b]"
                required
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#312b8b]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#312b8b]"
                required
              />
              <input
                type="text"
                name="childName"
                value={form.childName}
                onChange={handleChange}
                placeholder="Name of Child"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#312b8b]"
                required
              />
            </div>

            <input
              type="text"
              name="visitDate"
              value={form.visitDate}
              onChange={handleChange}
              placeholder="I would like to visit the school on"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#312b8b]"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#312b8b]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#d9439f] to-[#312b8b] text-white py-3 rounded-lg font-semibold hover:from-[#c13a8d] hover:to-[#28246d] transition-all duration-300 shadow-md"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Map */}
        <div className="w-full md:w-1/2 bg-white p-6">
          <div className="bg-white rounded-lg shadow-md p-4 h-full">

            <iframe
              title="Sri Sri Academy Siliguri Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114853.58717388777!2d88.3486329!3d26.7228087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441364d503e0f%3A0xec613c8d5028e42c!2sSri%20Sri%20Academy%20(SSA)%2C%20Siliguri!5e0!3m2!1sen!2sin!4v1693401024720!5m2!1sen!2sin"
              width="100%"
              height="700"
              className="rounded-md border border-gray-300"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTour;
