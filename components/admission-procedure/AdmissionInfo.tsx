import React from "react";

const admissionPoints = [
  "Application Forms Duly filled and signed is to be submitted to the School office.",
  "The Admission procedure includes a Written Assessment (Class 3 and above) followed by an interaction with the Principal/Coordinators in the presence of the parents.",
  "At the time of submission of the Application form the documents along with Registration and Processing Fee is to be submitted to the School Office.",
  "Care must be taken to ensure that the date of birth filled in the Application Form tallies with that on the original birth certificate.",
  "The Admission of the student is secured by paying the Admission Fee (Non-Refundable)",
  "The boarding school admission of the Hostel student is secured by paying the Admission Fee (Non-Refundable) and Security Deposit (Refundable)",
  "The Academic year of our residential school starts in the month of April and the new students are expected to join the school on a specific date, mentioned in the letter sent by the school.",
  "The parents will be required to submit the documents, original and/or photocopies, before the date of joining the school. Until all the requisite documents have been submitted by the parents/guardians, the Admission will stand Provisional.",
  "Any admission done after the session has started (in case of transfer or relocation) the T.C. and Report Card of the student should be submitted within 15 days of the admission.",
  "Any error, mistake or misinformation detected in the Admission Form will be reason for refusal of admission or immediate withdrawal of the student from the school, if admitted, without refund of any fee paid.",
  "The decision of the Admission Committee (regarding admission of a child) shall always be final and binding. With the passage of time, if the situation demands, there may be some changes/modifications to the rules of the school regarding the Admission Procedure.",
  "You can also E-mail us at info@srisriacademy.in or call at +91 9733566684/9733566685 for further information on the admission process."
];

const admissionDocuments = [
  "A photocopy of the Birth Certificate of the child. The Original copy to be shown to the School’s Office for verification.",
  "Photocopy of the latest Progress Report/Mark Sheet of the child issued by the School attended last.",
  "Original Transfer Certificate issued by the School attended last.",
  "Photocopy of Identity Proof (Voter ID Card / Aadhaar Card / Passport) of the parents.",
  "Four copies of coloured passport sized, recent photographs of the child.",
  "Duly completed Health Certificate Form certified by a registered Medical Practitioner.",
  "Any other relevant documents like Certificate proof of SC/ST/OBC etc."
];

export default function AdmissionInfo() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 text-justify">
      <h2 className="font-semibold text-black text-center mb-6">
        Registration does not imply admission, it is subject to the availability of seats & in our fulfilling of admission criteria.
      </h2>
      <ul className="space-y-2 mb-10">
        {admissionPoints.map((point, idx) => (
          <li className="flex items-start" key={idx}>
            <span className="text-green-500 mr-2 text-lg mt-1">✔️</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div>
        <h3 className="text-xl font-bold mb-4">Documents to be submitted during Admission:</h3>
        <ul className="space-y-2">
          {admissionDocuments.map((doc, idx) => (
            <li className="flex items-start" key={idx}>
              <span className="text-green-500 mr-2 text-lg mt-1">✔️</span>
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
