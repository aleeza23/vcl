import React from 'react'
import Button from './Button'

const Premium = () => {
    return (
        <div>
            <h1 className='font-readex text-3xl lg:text-[2.8rem] leading-6 lg:leading-9 mt-5 lg:mt-0 text-white  font-normal'>The best <span className='text-[#21F6EE]'>to grow</span>
                <br />
                <span className=' text-xl lg:text-[1.7rem] font-normal leading-4 '> <span className='text-[#21F6EE]'>Unlock</span> your full <span className='text-[#21F6EE]'>potential</span>
                    <br />
                    with our <span className='text-[#21F6EE]'>premium</span> features</span>
            </h1>

            {/* LIST */}
            <ul className='flex flex-col gap-2 mt-5 font-readex text-white font-normal  list-disc list-outside sm:list-inside  tracking-normal text-sm'>
                <li>Find the best viral products</li>
                <li>Create your own tailored analysis </li>
                <li>Analyze any video you find on TikTok</li>
            </ul>

            <Button isIcon={false} classes={'mt-6'}>Check our plans</Button>
        </div>
    )
}

export default Premium