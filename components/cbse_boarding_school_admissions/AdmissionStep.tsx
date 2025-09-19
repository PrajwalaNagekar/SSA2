
interface AdmissionStepProps {
    number: string;
    title: string;
    description: string;
}

const AdmissionStep: React.FC<AdmissionStepProps> = ({ number, title, description }) => (
    <div className="text-center">
        <div className="relative z-10 mx-auto bg-[#FF4D94] text-white w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold mb-4 border-4 border-white shadow-lg">{number}</div>
        <h3 className="text-xl font-semibold text-[#003D73] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);
export default AdmissionStep