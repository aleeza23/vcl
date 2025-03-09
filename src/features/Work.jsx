import React from 'react'
import bgImg from '../assets/images/work-bg.png'
import crossIcon from '../assets/icons/cross.svg'
import checkIcon from '../assets/icons/check.svg'
import WorkCard from '../components/WorkCard'
import Button from '../components/Button'

const Work = () => {
    return (
        <section className='relative py-28 lg:mt-28  z-10 bg-center lg:bg-right-top overflow-x-clip' style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <div className='container relative mx-auto px-4  lg:mt-0'>
                <h1 className='font-readex text-3xl lg:text-6xl leading-9 text-white text-center font-normal'>
                    Work <span className='text-[#21F6EE]'>smarter</span>, not <span className='text-[#21F6EE]'>harder</span>
                </h1>

                <div className="max-w-4xl py-7 mt-12 mx-auto lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <WorkCard heading={'By yourself'}>
                            {/* LIST */}
                            <ul className='px-6 pb-6 flex flex-col gap-5'>
                                <li className='inline-flex gap-3 items-start'><img src={crossIcon} alt="" className='size-7 mt-2' /><p className='font-readex max-w-[80%] text-[#A9A9A9] font-extralight text-[22px]'>Struggling to find ideas for your videos </p></li>
                                <li className='inline-flex gap-3 items-start'><img src={crossIcon} alt="" className='size-7 mt-2' /><p className='font-readex max-w-[80%] text-[#A9A9A9] font-extralight text-[22px]'>Spending days to set up videos the viral way </p></li>
                                <li className='inline-flex gap-3 items-start'><img src={crossIcon} alt="" className='size-7 mt-2' /><p className='font-readex max-w-[70%] text-[#A9A9A9] font-extralight text-[22px]'>Getting no views and start making paid ads </p></li>
                                <li className='inline-flex gap-3 items-start'><img src={crossIcon} alt="" className='size-7 mt-1' /><p className='font-readex max-w-[80%] text-[#A9A9A9] font-extralight text-[22px]'>Loosing time and money </p></li>
                            </ul>
                        </WorkCard>

                        <WorkCard cardBorder='border-2 border-[#00F200]' textBorder='border-b-2 border-[#00F200]' heading={'Using Viral Clone Lab'}>
                            {/* LIST */}
                            <ul className='px-6 pb-6 flex flex-col gap-5'>
                                <li className='inline-flex gap-3 items-start'><img src={checkIcon} alt="" className='size-7 mt-2' /><p className='font-readex max-w-[70%] text-[#A9A9A9] font-extralight text-[20px]'>Easily <b className='text-white'>find ideas</b> of videos <b className='text-white'>to go viral</b> </p></li>
                                <li className='inline-flex gap-3 items-start'><img src={checkIcon} alt="" className='size-7 mt-2' /><p className='font-readex max-w-[80%] text-[#A9A9A9] font-extralight text-[20px]'>Learn <b className='text-white'>how to create viral videos</b>  for your niche </p></li>
                                <li className='inline-flex gap-3 items-start'><img src={checkIcon} alt="" className='size-7 mt-2' /><p className='font-readex max-w-[80%] text-[#A9A9A9] font-extralight text-[20px]'>Make <b className='text-white'>views by millions</b>  like a pro </p></li>
                                <li className='inline-flex gap-3 items-start'><img src={checkIcon} alt="" className='size-7 mt-1' /><p className='font-readex max-w-[80%] text-[#A9A9A9] font-extralight text-[20px]'><b className='text-white'>Grow your business</b>  like never before </p></li>
                            </ul>
                        </WorkCard>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-12 lg:mt-8'>
                    <Button classes={'inline-flex'}>Let’s go viral</Button>
                </div>
            </div>
        </section>
    )
}

export default Work
