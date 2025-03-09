import React, { useState } from 'react'
import Button from '../components/Button'
import heroImg from '../assets/images/best-work-img.png'
import Free from '../components/Free';
import Premium from '../components/Premium';

const BestWay = () => {
    const [activeTab, setActiveTab] = useState("free");

    return (
        <section className='py-28 overflow-x-clip'>
            <div className="container mx-auto px-4">
                <h1 className='font-readex text-4xl lg:text-4xl leading-9 mt-12 lg:mt-0 text-white text-center font-normal'> The <span className='text-[#21F6EE]'>best</span> way
                    <br />
                    <span className='text-5xl font-normal'> to go  <span className='text-[#21F6EE]'>Viral</span></span>
                </h1>

                {/* CONTENT */}
                <div className="max-w-4xl py-8 mt-14 mx-auto relative">


                    <div className='grid lg:grid-cols-2 border border-[#21F6EE33] relative rounded-md '>

                        {/* GRADIENT BACKGROUND */}
                        <svg className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 hidden md:block' width="1395" height="750" viewBox="0 0 1395 995" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_546_1001)">
                                <path d="M782.415 270.11C1027.72 269.518 1206.35 119.329 1206.77 295.979C1207.2 472.63 564.871 758.145 319.569 758.737C74.2675 759.329 318.884 474.774 318.458 298.123C318.032 121.472 537.113 270.702 782.415 270.11Z" fill="url(#paint0_linear_546_1001)" />
                            </g>
                            <defs>
                                <filter id="filter0_f_546_1001" x="0.352417" y="-0.00256348" width="1416.42" height="968.741" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="105" result="effect1_foregroundBlur_546_1001" />
                                </filter>
                                <linearGradient id="paint0_linear_546_1001" x1="210.546" y1="759" x2="258.402" y2="136.895" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#21F6EE" />
                                    <stop offset="1" stop-color="#45009F" />
                                </linearGradient>
                            </defs>
                        </svg>



                        {/* TABS */}
                        <div className='bg-[#21F6EE] p-1 absolute -top-8 rounded-2xl w-64 left-1/2 -translate-x-1/2 z-10 flex'>
                            {/* Sliding Background */}
                            <div
                                className={`absolute top-1 bottom-1 right-1 w-[49%] bg-black rounded-2xl transition-all duration-300 ${activeTab === "free" ? "left-1" : "left-1/2"
                                    }`}
                            ></div>

                            {/* Free Tab */}
                            <button
                                onClick={() => setActiveTab("free")}
                                className={`relative w-1/2 py-3 font-readex transition-colors duration-300 ${activeTab === "free" ? "text-[#21F6EE]" : "text-black"
                                    }`}
                            >
                                Free
                            </button>

                            {/* Premium Tab */}
                            <button
                                onClick={() => setActiveTab("premium")}
                                className={`relative w-1/2 py-3  font-readex transition-colors duration-300 ${activeTab === "premium" ? "text-[#21F6EE]" : "text-black"
                                    }`}
                            >
                                Premium
                            </button>
                        </div>
                        <div>
                            <div className='lg:h-[400px] bg-black border-b rounded-b-none  rounded-br-none lg:rounded-l-md rounded-t-md lg:border-r border-[#21F6EE33] p-8 flex lg:items-end'>
                                {activeTab === 'free' ? <Free /> : <Premium />}
                            </div>
                        </div>
                        <div>
                            <div className='h-full '>
                                {activeTab === 'free' ? <img src={heroImg} alt="" className='object-cover h-full rounded-t-none rounded-tr-none lg:rounded-tr-md rounded-bl-md lg:rounded-bl-none   rounded-r-md lg:rounded-l-none ' /> : <video
                                    className="w-full h-full object-cover rounded-lg"
                                    src="/video.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestWay