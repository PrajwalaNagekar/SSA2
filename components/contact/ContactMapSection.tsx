"use client";
import { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBuilding } from 'react-icons/fa';
import { AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { InstagramIcon, X } from 'lucide-react';
import emailjs from "@emailjs/browser";

export default function ContactMapSection() {
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
        },
        () => {
          alert("Error sending application.");
        }
      );
  };

  return (
    <section className="w-full bg-white text-justify">
      {/* Map Container */}
      <div className="relative w-full h-64 sm:h-80 md:h-[340px] lg:h-[430px]">
        <iframe
          title="Sri Sri Academy Map"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29438.327557070924!2d88.34521021922034!3d26.675949589348664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4471756410091:0x4331ce0b0ffd2488!2sSri%20Sri%20Academy%20(SSA)%2C%20Siliguri!5e0!3m2!1sen!2sin!4v1694775260193!5m2!1sen!2sin"
          className="w-full h-full border-0 rounded-none"
        />
      </div>

      {/* Responsive Flex: Form & Contact Info */}
      <div className="relative flex flex-col lg:flex-row items-stretch lg:items-start justify-center px-3 xs:px-4 sm:px-6 md:px-8 py-6 sm:py-10 mx-auto max-w-6xl -mt-24 sm:-mt-28 md:-mt-32 lg:-mt-40 z-10 gap-5 lg:gap-8">
        {/* Contact Form Card */}
        <div className="bg-white shadow-lg rounded-xl px-5 sm:px-8 py-6 sm:py-8 w-full max-w-lg mb-6 lg:mb-0 lg:mr-0 border border-gray-100">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-5 text-center">Get In Touch</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="bg-[#11213B] text-white font-medium px-4 py-2 rounded-md focus:outline-none w-full"
                required
              />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="bg-[#11213B] text-white font-medium px-4 py-2 rounded-md focus:outline-none w-full"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-[#11213B] text-white font-medium px-4 py-2 rounded-md focus:outline-none w-full"
                required
              />
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="bg-[#11213B] text-white font-medium px-4 py-2 rounded-md focus:outline-none w-full"
                required
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
              className="w-full py-2 rounded-full font-semibold bg-pink-500 hover:bg-pink-600 text-white mt-2"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info with Icons */}
        <div className="bg-white rounded-xl shadow-lg px-5 sm:px-6 py-6 sm:py-7 w-full max-w-lg flex flex-col justify-center border border-gray-100">
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-pink-500 mt-1 sm:mt-2" size={20} />
              <div className="text-gray-800 text-xs sm:text-sm md:text-base">
                Dhukuria, P.O. New Chumta, Dagapur, Siliguri-734009, West Bengal.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaBuilding className="text-indigo-500 mt-1 sm:mt-2" size={20} />
              <div className="text-gray-800 text-xs sm:text-sm md:text-base">
                Ram Niwash Group, Bhagat Singh Building, 2nd mile, Sevoke Road, Opposite Louis Philippe, Siliguri.
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-pink-500" size={20}/>
              <div className="text-gray-800 text-xs sm:text-sm md:text-base">
                +91 9733566684, +91 9733566685
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-500" size={20}/>
              <div className="text-gray-800 text-xs sm:text-sm md:text-base">
                <a href="mailto:admission@srisriacademy.in">admission@srisriacademy.in</a>
              </div>
            </div>
          </div>
          {/* Social Media Row */}
          <div className="flex items-center gap-3 sm:gap-5 mt-3">
            <a href="https://www.facebook.com/srisriacademysilliguri/" target='_blank' className="text-black hover:text-pink-500"><AiOutlineFacebook size={28}/></a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FSSA_Siliguri"  target='_blank' className="text-black hover:text-pink-500"><X size={28}/></a>
            <a href="https://www.instagram.com/srisriacademysiliguri/" target='_blank' className="text-black hover:text-pink-500"><InstagramIcon size={28}/></a>
            <a href="https://www.linkedin.com/in/srisriacademysiliguri/" target='_blank' className="text-black hover:text-pink-500"><AiOutlineLinkedin size={28}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}
