import React from 'react'
import Button from './Button'

const Plan = ({children}) => {
    return (
        <div className="flex justify-center">
            <div className='w-[345px] border border-[#21F6EE33] bg-black px-8 pt-8 pb-4 rounded-md'>
                <h4 className='font-readex text-white text-2xl text-center font-semibold'>Premium </h4>
                {children}
               
                {/* LIST */}
                <ul className='flex flex-col max-w-[80%] mx-auto gap-2 mt-5 font-readex text-white font-light  list-disc list-outside  tracking-normal text-lg'>
                    <li>Find the best products with <span className='text-[#21F6EE]'>Promote</span></li>
                    <li>Create your <span className='text-[#21F6EE]'>own</span> tailored <span className='text-[#21F6EE]'>analysis</span></li>
                    <li>Analyze <span className='text-[#21F6EE]'>any video</span> you find on TikTok</li>
                </ul>
                <div className="flex justify-center">
                    <Button isIcon={false} classes={'mt-6 inline-flex'}>Go premium</Button>
                </div>
            </div>
        </div>
    )
}

export default Plan