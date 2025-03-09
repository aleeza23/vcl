import React from 'react'
import arrow from '../assets/icons/arrow.svg'
import heroBg from '../assets/images/hero-bg.png'

const Hero = () => {
    return (
        <section className="h-[500px] w-full z-0 md:h-[600px] relative -mt-12 bg-center " style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>

            {/* Content */}
            <div className="absolute container left-1/2 -translate-x-1/2 z-20 flex items-center justify-center h-full  text-white  mx-auto">
                <div className='lg:w-full'>
                    <h1 className="text-4xl w-full md:text-7xl font-readex font-normal text-center">
                        Go <span className='text-[#21F6EE]'>viral</span> on <span className='text-[#21F6EE]'>TikTok</span>
                    </h1>

                    <div className='flex md:flex-row flex-col justify-center items-center gap-3 mt-5 mx-auto'>
                        <div className='inline-flex items-center gap-2 flex-shrink-0 '>
                            <h4 className='flex-shrink-0'>Find relevant <span className='text-[#21F6EE]'>viral</span> video </h4>
                            <img src={arrow} alt="" className='size-4' />
                        </div>
                        <div className='inline-flex items-center gap-2 flex-shrink-0 '>
                            <h4 className=''> Get their <span className='text-[#21F6EE]'> secrets</span></h4>
                            <img src={arrow} alt="" className='size-4' />
                        </div>
                        <div className='inline-flex items-center gap-2 flex-shrink-0'>
                            <h4 className='flex-shrink-0'> Create your own to go <span className='text-[#21F6EE]'>viral</span></h4>
                        </div>
                    </div>

                    {/* INPUT */}
                    <div className="relative mt-5 max-w-3xl mx-auto">
                        <input type="text" className='bg-[#D9D9D940] ps-5 backdrop-blur rounded-full outline-none w-full py-3 placeholder:font-readex placeholder:text-[#ECECEC40] placeholder:text-start lg:placeholder:text-center placeholder:text-xs lg:placeholder:text-lg' placeholder='Input keywords about your video...' />

                        <svg className='absolute right-0 top-1/2 -translate-y-1/2' width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2001 35C11.2001 21.84 21.84 11.2 35 11.2C48.16 11.2 58.8 21.84 58.8 35C58.8 48.16 48.16 58.7999 35 58.7999C21.84 58.7999 11.2001 48.16 11.2001 35ZM56 35C56 23.38 46.62 14 35 14C23.3801 14 14 23.38 14 35C14 46.6199 23.3801 56 35 56C46.62 56 56 46.6199 56 35Z" fill="#21F6EE" fill-opacity="0.5" />
                            <path d="M32.62 46.6199L44.24 34.9999L32.62 23.3799L34.58 21.4199L48.16 34.9999L34.58 48.5799L32.62 46.6199Z" fill="#21F6EE" />
                            <path d="M46.2 33.6001V36.4001H22.4V33.6001H46.2Z" fill="#21F6EE" />
                        </svg>
                    </div>

                    {/* Count */}
                    <div className='flex items-center justify-center mt-3 gap-3'>
                        <div className='bg-[#21F6EE] rounded-full text-black w-7 h-7 text-sm font-readex flex justify-center items-center'><span>1</span></div>
                        <div className='border-[#21F6EE80] w-32 border-1'></div>
                        <div className='bg-[#21F6EE40] rounded-full text-black text-sm font-readex backdrop-blur w-6 h-6 flex justify-center items-center'><span>2</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero