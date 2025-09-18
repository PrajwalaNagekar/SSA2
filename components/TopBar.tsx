"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
export function TopBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-[#2f2e8c] text-white py-2 px-3">
        <div className="container mx-auto flex justify-center items-center text-center">
          <p className="font-bold text-xs sm:text-sm md:text-base leading-snug">
            Play School to Grade 12 | PG Labs |{" "}
            <span
              className="underline cursor-pointer hover:text-pink-300 transition"
              onClick={() => setShowModal(true)}
            >
              Click Here To Apply Now
            </span>
          </p>
        </div>
      </div>

      {showModal && (
        <ApplicationFormModal closeModal={() => setShowModal(false)} />
      )}
    </>
  );
}

function ApplicationFormModal({ closeModal }) {
  const [form, setForm] = useState({
    firstName: "",
    phone: "",
    email: "",
    city: "",
    studentType: "",
    grade: "",
  });
  const formRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
          closeModal();
        },
        () => {
          alert("Error sending application.");
        }
      );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div className="bg-[#392c86] rounded-lg p-8 w-full max-w-md shadow-lg relative">
        <button
          className="absolute top-3 right-3 text-white text-xl hover:text-pink-300"
          onClick={closeModal}
        >
          &times;
        </button>
        <h3 className="text-white text-lg font-semibold mb-1">Admission Open Now</h3>
        <h2 className="text-2xl font-bold mb-4 text-white">Apply for Session 2026-27</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-3">
            <input
              required
              name="firstName"
              className="w-1/2 p-3 rounded bg-[#151e33] text-white placeholder-gray-400"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
            />
            <input
              required
              name="phone"
              className="w-1/2 p-3 rounded bg-[#151e33] text-white placeholder-gray-400"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-3">
            <input
              required
              name="email"
              type="email"
              className="w-1/2 p-3 rounded bg-[#151e33] text-white placeholder-gray-400"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              required
              name="city"
              className="w-1/2 p-3 rounded bg-[#151e33] text-white placeholder-gray-400"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
            />
          </div>
              <div className="space-y-3 md:space-y-4">
  <select
    name="studentType"
    value={form.studentType}
    onChange={handleChange}
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
    onChange={handleChange}
    className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-[#192056] text-white 
                focus:ring-2 focus:ring-pink-400 border-none outline-none text-sm font-serif"
    required
  >
    <option value="">Select Grade Applying For</option>
    <option value="playgroup">Play Group</option>
    <option value="nursery">Nursery</option>
    <option value="kg">KG</option>
    <option value="Grade 1">Grade 1</option>
    <option value="Grade 2">Grade 2</option>
    <option value="Grade 3">Grade 3</option>
    <option value="Grade 4">Grade 4</option>
    <option value="Grade 5">Grade 5</option>
    <option value="Grade 6">Grade 6</option>
    <option value="Grade 7">Grade 7</option>
    <option value="Grade 8">Grade 8</option>
    <option value="Grade 9">Grade 9</option>
    <option value="Grade 10">Grade 10</option>
    <option value="Grade 11">Grade 11</option>
    <option value="Grade 12">Grade 12</option>
  </select>
</div>
          <button
            type="submit"
            className="w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 rounded-full text-lg transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
