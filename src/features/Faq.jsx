import React, { useState } from "react";
import bgImg from "../assets/images/faq-bg.png";
import AccordionItem from "../components/AccordionItem";

const faqData = [
    {
        question: "Is it free?",
        answer: [
            "Yes, you have access to the platform for FREE, so you can try it yourself.",
            "If you want to unlock your full potential, then you can go premium to access all the features.",
        ],
    },
    {
        question: "How do I upgrade to premium?",
        answer: ["You can upgrade anytime from your account settings and unlock premium features."],
    },
    {
        question: "Do you offer customer support?",
        answer: ["Yes! We offer 24/7 customer support via email and live chat."],
    },
    {
        question: "Do you offer customer support?",
        answer: ["Yes! We offer 24/7 customer support via email and live chat."],
    },
    {
        question: "Do you offer customer support?",
        answer: ["Yes! We offer 24/7 customer support via email and live chat."],
    },
    {
        question: "Do you offer customer support?",
        answer: ["Yes! We offer 24/7 customer support via email and live chat."],
    },
    {
        question: "Do you offer customer support?",
        answer: ["Yes! We offer 24/7 customer support via email and live chat."],
    },
];

const Faq = () => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (index) => {
        setOpenSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section
        id="faq"
            className="relative py-28 z-10 bg-center lg:bg-right-top overflow-x-clip"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container mx-auto px-4">
                <h1 className="font-readex text-3xl lg:text-6xl leading-9 text-white text-center font-normal">
                    <span className="text-[#21F6EE]">F</span>requently{" "}
                    <span className="text-[#21F6EE]">A</span>sked{" "}
                    <span className="text-[#21F6EE]">Q</span>uestions
                </h1>

                <div className="max-w-3xl lg:px-8 py-8 mt-14 mx-auto">
                    <div className="flex flex-col gap-5">
                        {faqData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openSections[index] || false}
                                toggle={() => toggleSection(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
