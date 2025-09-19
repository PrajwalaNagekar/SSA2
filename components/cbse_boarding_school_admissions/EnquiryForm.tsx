"use client"
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
    parentName: string;
    email: string;
    phone: string;
    grade: string;
}

const EnquiryForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        parentName: '',
        email: '',
        phone: '',
        grade: '',
    });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            // Enquiry Form fields
            parentName: formData.parentName,
            parentemail: formData.email,
            parentphone: formData.phone,
            enquirygrade: formData.grade,



            // Dynamic subject
            subject: `Admission Form Enquiry - ${formData.parentName}`
        };

        emailjs.send(
            "service_4ka4gnl",      // Replace with your EmailJS service ID
            "template_furdhya",     // Replace with your EmailJS template ID
            templateParams,
            "dnzJzlC0-8YrVVEqV"       // Replace with your EmailJS public key
        ).then(
            (result) => {
                console.log("Email sent successfully!", result.text);
                setIsSubmitted(true);
            },
            (error) => {
                console.error("Email sending error:", error.text);
            }
        );
    };

    if (isSubmitted) {
        return (
            <div className="w-full bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-center flex flex-col justify-center items-center h-full">
                <div className="text-green-500 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#003D73] mb-2">Thank You!</h2>
                <p className="text-gray-700">Your enquiry has been sent. We will get back to you shortly.</p>
            </div>
        );
    }

    return (
        <div
            id="enquiry-form"
            className="w-full bg-[#312b8b] text-white rounded-2xl shadow-lg px-6 sm:px-8 py-8"
        >
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
                Take the First Step
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Parent's Name"
                    className="w-full py-2.5 px-4 rounded-lg bg-[#192056] placeholder:text-white/70 
            border-none outline-none focus:ring-2 focus:ring-pink-400 transition-all text-sm"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full py-2.5 px-4 rounded-lg bg-[#192056] placeholder:text-white/70 
            border-none outline-none focus:ring-2 focus:ring-pink-400 transition-all text-sm"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full py-2.5 px-4 rounded-lg bg-[#192056] placeholder:text-white/70 
            border-none outline-none focus:ring-2 focus:ring-pink-400 transition-all text-sm"
                    required
                />
                <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#192056] text-white 
            border-none outline-none focus:ring-2 focus:ring-pink-400 transition-all text-sm"
                    required
                >
                    <option value="">Select Grade...</option>
                    <option value="Playgroup">Playgroup</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="Class I - V">Class I - V</option>
                    <option value="Class VI - VIII">Class VI - VIII</option>
                    <option value="Class IX - X">Class IX - X</option>
                    <option value="Class XI - XII">Class XI - XII</option>
                </select>
                <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition-all 
            font-semibold text-white mt-2 shadow-md hover:shadow-lg text-sm md:text-base"
                >
                    Request a Call Back
                </button>
            </form>
        </div>
    );
};

export default EnquiryForm;
