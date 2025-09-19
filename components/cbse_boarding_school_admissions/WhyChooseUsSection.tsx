import FeatureCard from "./FeatureCard";

const WhyChooseUsSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#003D73]">The Sri Sri Academy Advantage</h2>
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">Our philosophy is to empower students with a comprehensive education that nurtures their mind, body, and spirit.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard iconClass="fa-solid fa-lightbulb" title="Innovative Pedagogy" description="Engaging, activity-based learning that makes education a joyful discovery." />
                <FeatureCard iconClass="fa-solid fa-spa" title="Yoga & Meditation" description="Building resilience, focus, and inner peace through ancient techniques." />
                <FeatureCard iconClass="fa-solid fa-palette" title="Arts & Sports" description="A wide range of co-curricular activities for all-round personality development." />
                <FeatureCard iconClass="fa-solid fa-shield-heart" title="Secure & Caring Campus" description="A safe, nurturing environment where every child feels valued and supported." />
            </div>
        </div>
    </section>
);
export default WhyChooseUsSection