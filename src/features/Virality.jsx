import React from 'react';
import ViralityCard from '../components/ViralityCard';
import Button from '../components/Button';

const Virality = () => {
    return (
        <section className='py-28 overflow-x-clip'>
            <div className="container mx-auto px-4 lg:px-0">
                <h1 className='font-readex text-4xl lg:text-6xl text-white text-center'>
                    <span className='text-[#21F6EE]'>Virality</span> in <span className='text-[#21F6EE]'>3</span> steps
                </h1>

                {/* VIDEO & CONTENT SECTION */}
                <div className="max-w-4xl py-7 mt-14 mx-auto">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Steps Section */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
                            <ViralityCard
                                step={'1'}
                                description={'Benefit from the world’s biggest viral videos dataset.'}
                                extraText={'You’ll find the idea you are looking for to make views.'}
                            >
                                <h1 className='font-readex text-white text-[26px] '>
                                    <span className='text-[#21F6EE]'>Find </span> viral videos
                                </h1>
                            </ViralityCard>
                            <ViralityCard
                                step={'2'}
                                description={'Discover in detail top creators’ winning formulas.'}
                                extraText={"Get a proven method to boost your video's engagement."}
                            >
                                <h1 className='font-readex text-white text-[26px] '>
                                    Get their <span className='text-[#21F6EE]'>secrets </span>
                                </h1>
                            </ViralityCard>
                            <ViralityCard
                                step={'3'}
                                description={'Transform those inspirations into your unique video.'}
                                extraText={'Craft your content from the most viral videos on TikTok.'}
                            >
                                <h1 className='font-readex text-white text-[26px] '>
                                    <span className='text-[#21F6EE]'>Create </span> your own
                                </h1>
                            </ViralityCard>
                        </div>

                        {/* VIDEO SECTION */}
                        <div className='lg:col-span-2 border-2 bg-[#000000] border-[#000000] rounded-lg h-[300px]  sm:h-[500px] w-full lg:h-full relative'>
                            <video
                                className="w-full h-full object-cover rounded-lg"
                                src="/video.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                            <svg className='absolute hidden md:block -top-52 -z-20 -right-[14rem]' width="850" height="1000" viewBox="0 0 929 1041" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_532_1977)">
                                    <path d="M502.595 282.434C627.45 282.434 718.555 101.668 718.555 314.895C718.555 528.122 391.269 870.88 266.414 870.88C141.558 870.88 266.414 528.122 266.414 314.895C266.414 101.668 377.739 282.434 502.595 282.434Z" fill="url(#paint0_linear_532_1977)" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_532_1977" x="0.922363" y="0.912109" width="927.633" height="1079.97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="105" result="effect1_foregroundBlur_532_1977" />
                                    </filter>
                                    <linearGradient id="paint0_linear_532_1977" x1="210.922" y1="870.88" x2="348.233" y2="141.223" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#21F6EE" />
                                        <stop offset="1" stop-color="#45009F" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <div className='flex justify-center items-center mt-12'>
                        <Button classes={'inline-flex'}>Try for free</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Virality;
