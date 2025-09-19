interface FeatureCardProps {
    iconClass: string;
    title: string;
    description: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ iconClass, title, description }) => (
    <div className="text-center p-6 bg-gray-50 rounded-xl border-t-4 border-[#FF4D94] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
        <div className="text-5xl text-[#F47920] mb-4">
            {/* <Icon className={iconClass} /> */}
            </div>
        <h3 className="text-xl font-semibold text-[#003D73] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);
export default FeatureCard