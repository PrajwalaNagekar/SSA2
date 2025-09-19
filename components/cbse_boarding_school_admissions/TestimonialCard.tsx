interface TestimonialCardProps {
    text: string;
    name: string;
    role: string;
    imgSrc: string;
    imgPlaceholder: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, name, role, imgSrc, imgPlaceholder }) => (
    <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-[#FF4D94]">
        <p className="text-gray-700 italic text-lg mb-6">"{text}"</p>
        <div className="flex items-center">
            <img
                src={imgSrc}
                // onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                //     const target = e.target as HTMLImageElement;
                //     target.onerror = null;
                //     target.src = https://placehold.co/50x50/e2e8f0/334155?text=${imgPlaceholder};
                // }}
                className="w-12 h-12 rounded-full mr-4"
            // alt={${name}'s Photo} 
            />
            <div>
                <p className="font-bold text-[#003D73]">{name}</p>
                <p className="text-sm text-gray-600">{role}</p>
            </div>
        </div>
    </div>
);
export default TestimonialCard