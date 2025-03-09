import React, { useState } from 'react';
import bgImg from '../assets/images/pricing-bg.png';
import Plan from '../components/Plan';

const PricingHero = () => {
    const [activePlan, setActivePlan] = useState('monthly');

    return (
        <section
            className="relative bg-center lg:bg-top overflow-x-clip z-20 pb-28 lg:mb-28"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="container mx-auto px-4">
                <h1 className="font-readex text-3xl lg:text-5xl leading-14 text-white text-center font-normal">
                    Unlock your <span className="text-[#21F6EE]">potential</span> <br />
                    <span className="lg:text-6xl">
                        with our <span className="text-[#21F6EE]">premium</span> plan
                    </span>
                </h1>

                {/* PLANS SWITCH */}
                <div className="flex gap-6 justify-center items-center my-10">
                    <button
                        className={`px-3 py-1.5 rounded-xl text-xl transition-all ${activePlan === 'monthly'
                            ? 'bg-[#F5F5F5] text-black'
                            : 'text-[#FFFFFF] font-light'
                            }`}
                        onClick={() => setActivePlan('monthly')}
                    >
                        Monthly
                    </button>
                    <button
                        className={`px-3 py-1.5 rounded-xl text-xl transition-all ${activePlan === 'yearly'
                            ? 'bg-[#F5F5F5] text-black'
                            : 'text-[#FFFFFF] font-light'
                            }`}
                        onClick={() => setActivePlan('yearly')}
                    >
                        Yearly
                    </button>
                </div>

                {/* PLANS */}
                {activePlan === 'monthly' ? (
                    <Plan>
                        <p className="mt-4 flex items-baseline justify-center">
                            <span className="text-[#21F6EE] text-2xl flex items-start mb-auto me-1 -mt-2 font-semibold">
                                €
                            </span>
                            <span className="text-5xl font-bold font-readex tracking-tight text-white">50</span>
                            <span className="ml-1 text-xl font-light font-readex text-white">/ mo</span>
                        </p>
                    </Plan>
                ) : (
                    <Plan>
                        <p className="mt-4 flex items-baseline justify-center relative">
                            <span className="text-[#21F6EE] text-2xl flex items-start mb-auto me-1 -mt-2 font-semibold">
                                €
                            </span>
                            <span className="text-5xl font-bold font-readex tracking-tight text-white">500</span>
                            <span className="ml-1 text-xl font-light font-readex text-white">/ year</span>
                            <p className="font-readex font-bold text-[#21F6EE] absolute right-0 -top-4 text-sm">
                                Pay only <br />
                                10 months
                            </p>
                        </p>
                    </Plan>
                )}
            </div>
        </section>
    );
};

export default PricingHero;
