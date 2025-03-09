import React from 'react';

const ViralityCard = ({ step, children, description, extraText }) => {
    return (
        <div className='bg-[#7D7D7D33] pe-4 py-7 ps-11 rounded-md relative overflow-hidden'>
            {/* Step Number */}
            <div className='bg-[#000000] rounded-full flex justify-center items-center size-10 -top-1 -left-1 absolute'>
                <span className='font-readex text-xl text-[#21F6EE]'>{step}</span>
            </div>

            {/* Dynamic Content */}
            <div className='flex flex-col'>
                {children}
                {description && <p className='font-readex font-normal text-white text-sm mt-0.5'>{description}</p>}
                {extraText && <p className='font-readex text-white font-normal text-sm mt-4'>{extraText}</p>}
            </div>
        </div>
    );
};

export default ViralityCard;
