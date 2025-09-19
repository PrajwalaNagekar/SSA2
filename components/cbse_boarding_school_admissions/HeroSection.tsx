import EnquiryForm from "./EnquiryForm";

export const HeroSection: React.FC = () => (
    <section
        className="relative text-white bg-cover bg-center"
        style={{
            backgroundImage: "url('https://srisriacademy1.s3.ap-south-1.amazonaws.com/public/DSC_2255-1-scaled-raarvqhj2rb7xrk3em0cry9328115io07k6frkmto8.jpg')",
        }}
    >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        <div className="relative container mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-5 gap-12 items-center">
                {/* LEFT SIDE */}
                <div className="md:col-span-3 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                        Admissions Open 2026-27
                    </h1>
                    <p className="text-xl md:text-2xl font-light mb-6">
                        India's Premier CBSE Boarding School for Holistic Education
                    </p>
                    <p className="text-gray-100 mb-8 text-lg">
                        We blend academic excellence with spiritual, moral, and ethical
                        values to nurture well-rounded, responsible global citizens.
                    </p>
                    <div className="flex items-center justify-center md:justify-start space-x-4 bg-white/20 backdrop-blur-sm rounded-full p-3 max-w-md mx-auto md:mx-0">
                        <p className="font-semibold">
                            CBSE Boarding School | Playgroup to Class XII
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE - FORM */}
                <div className="md:col-span-2">
                    <EnquiryForm />
                </div>
            </div>
        </div>
    </section>
);
