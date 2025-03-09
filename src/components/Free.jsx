import React from 'react'
import Button from './Button'

const Free = () => {
    return (
        <div>
            <h1 className='font-readex text-4xl  leading-6  lg:text-5xl lg:leading-9 mt-5 lg:mt-0 text-white  font-normal'> <span className='text-[#21F6EE]'>Free</span>  & <span className='text-[#21F6EE]'>instant</span>
                <br />
                <span className=' text-xl lg:text-3xl leading-4 font-normal'> access to <span className='text-[#21F6EE]'> thousands <br />
                    of viral</span> videos insights </span>
            </h1>

            {/* LIST */}
            <ul className='flex flex-col gap-2 mt-5 font-readex text-white font-normal  list-disc list-outside sm:list-inside  tracking-normal text-sm'>
                <li>Find relevant viral videos for your niche</li>
                <li>Understand why they are viral</li>
                <li>Do the same and grow fast</li>
            </ul>

            <Button isIcon={false} classes={'mt-6'}>Try for free</Button>
        </div>
    )
}

export default Free