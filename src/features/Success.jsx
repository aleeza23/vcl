import React from 'react'
import bgImg from '../assets/images/success-bg.png'
import stopIcon from '../assets/icons/stop-emoji.svg'
import arrowCurve from '../assets/icons/arrow-curve.svg'
import arrowLine from '../assets/icons/arrow-line.svg'
import Button from '../components/Button'
import arrowRight from '../assets/icons/right-arrow-text.svg'
import rightArrowCurve from '../assets/icons/right-arrow-curve.svg'

const Success = () => {
    return (
        <section className='py-28  relative bg-center lg:bg-left-top  overflow-x-clip z-20' style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <div className='container mx-auto px-4 '>
                <h1 className='font-readex text-4xl lg:text-6xl leading-9 text-white text-center font-normal'>
                    The truth <br />
                    <span className='text-3xl font-normal'>about <span className='text-[#21F6EE]'>success</span> in <span className='text-[#21F6EE]'>2025</span></span>
                </h1>
                <p className='font-readex mt-3 text-center max-w-sm mx-auto md:text-lg text-white font-extralight tracking-normal'>
                    “You <span className='font-bold'>can’t focus only</span> on your product, you need to <span className='font-bold'>get</span> your <span className='font-bold'>audience’s attention</span>”
                </p>

                {/* PROCESS */}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-0 mt-28">
                    {/* Left Column */}
                    <div className="lg:mt-8 relative h-32 ">
                        <div className="relative sm:right-[20%] lg:right-0">
                            <img src={stopIcon} alt="" className="absolute top-1/2 -translate-y-1/2 right-0" />
                            <img src={arrowLine} alt="" className="absolute right-5 -top-[3.5px]" />

                            {/* Wrapper for arrowCurve & Boxes */}
                            <div className="top-1/2 -translate-y-1/2 right-[10.6rem] absolute">
                                <img src={arrowCurve} alt="" />

                                {/* Green Box (Above Arrow) */}
                                <div className="absolute right-[60%]  sm:right-[80%] -top-5 bg-black border-3 border-[#00F200] rounded-md w-max px-4 py-1.5">
                                    <p className="font-readex font-light text-xs sm:text-base text-[#00F200]">A good product</p>
                                </div>

                                {/* Red Box (Below Arrow) */}
                                <div className="absolute right-[60%] sm:right-[80%] -bottom-5 bg-black border-3 border-[#FF0000] rounded-md w-max px-4 py-1.5">
                                    <p className="font-readex font-light text-xs sm:text-base text-[#FF0000]">Low reach videos</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Middle Column */}
                    <div className='lg:-mt-12 relative h-32'>
                        <div className='border border-[#21F6EE] bg-black rounded-md w-full lg:w-[316px] mx-auto flex justify-center items-center h-[164px]'>
                            <h2 className='font-readex text-[#21F6EE] font-normal text-5xl'>Success</h2>
                        </div>
                    </div>

                    {/* Right Column - Fixed */}
                    <div className="relative mt-8 lg:mt-4 xl:-ms-12 h-48">
                        <div className="relative top-1/2 lg:top-5 sm:left-[20%] lg:left-0">

                            {/* Wrapper for Arrow Right & Arrow Curve */}
                            <div className="relative flex items-center">

                                {/* Right Arrow */}
                                <img src={arrowRight} alt="" className="absolute left-0 top-1/2 -translate-y-1/2" />
                                <svg className='absolute left-26' width="25" height="90" viewBox="0 0 25 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.68438 0.501356C1.40905 0.480178 1.16869 0.686207 1.14751 0.961534L0.802374 5.44828C0.781197 5.72361 0.987225 5.96398 1.26255 5.98516C1.53788 6.00633 1.77825 5.80031 1.79943 5.52498L2.10621 1.53676L6.09443 1.84354C6.36976 1.86473 6.61013 1.6587 6.63131 1.38336C6.65249 1.10804 6.44646 0.867671 6.17113 0.84649L1.68438 0.501356ZM8.54924 89.2958C19.5763 74.259 25.5281 60.8949 24.8955 46.8525C24.2632 32.8148 17.0559 18.2097 2.02566 0.674489L1.26641 1.32528C16.2362 18.7901 23.2789 33.1852 23.8966 46.8975C24.514 60.6053 18.7158 73.7414 7.74283 88.7045L8.54924 89.2958Z" fill="#21F6EE" />
                                </svg>

                                {/* Right Arrow Curve */}
                                <div className="relative left-32 sm:left-[22%] md:left-[18%] -translate-y-[53%] lg:left-32">
                                    <img src={rightArrowCurve} alt="" className="relative " />

                                    {/* Green Box Above */}
                                    <div className="absolute left-[100%] -top-5 bg-black border-3 border-[#00F200] rounded-md w-max px-4 py-1.5">
                                        <p className="font-readex font-light text-xs sm:text-base text-[#00F200]">A good product</p>
                                    </div>

                                    {/* Green Box Below */}
                                    <div className="absolute left-[100%] -bottom-4 bg-black border-3 border-[#00F200] rounded-md w-max px-8 py-1.5">
                                        <p className="font-readex font-light text-xs sm:text-base text-[#21F6EE]">Viral videos</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>

                {/* BUTTON */}
                <div className='flex justify-center items-center mt-28 lg:mt-4'>
                    <Button classes={'inline-flex'}>I want views</Button>
                </div>
            </div>
        </section>
    )
}

export default Success
