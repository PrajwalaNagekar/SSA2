import TestimonialCard from "./TestimonialCard";

const TestimonialsSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#003D73]">What Our Parents Cherish</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <TestimonialCard
                    text="The emphasis on human values is what sets this school apart. My daughter is not only learning her subjects but is also becoming a kinder, more aware person. The teachers truly care."
                    name="Sunita Rao"
                    role="Parent of Ananya, Grade 4"
                    imgSrc="https://placehold.co/50x50/e2e8f0/334155?text=S"
                    imgPlaceholder="S"
                />
                <TestimonialCard
                    text="From the state-of-the-art labs to the excellent sports facilities, every aspect is top-class. The stress-free environment has done wonders for my son's confidence. A fantastic school!"
                    name="Vikram Singh"
                    role="Parent of Rohan, Grade 7"
                    imgSrc="https://placehold.co/50x50/e2e8f0/334155?text=V"
                    imgPlaceholder="V"
                />
            </div>
        </div>
    </section>
);

export default TestimonialsSection