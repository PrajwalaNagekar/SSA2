import AdmissionStep from "./AdmissionStep";

const AdmissionProcessSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#003D73]">Your Journey to Our School in 3 Simple Steps</h2>
            </div>
            <div className="relative">
                <div className="hidden md:block absolute top-12 left-0 w-full border-t-2 border-dashed border-gray-300"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <AdmissionStep number="1" title="Submit Enquiry" description="Fill the form and our admissions team will connect with you." />
                    <AdmissionStep number="2" title="Counselling & Tour" description="Visit us for a personalized campus tour and interaction session." />
                    <AdmissionStep number="3" title="Confirm Admission" description="Complete the formalities and join the Sri Sri Academy family." />
                </div>
            </div>
        </div>
    </section>
);
export default AdmissionProcessSection