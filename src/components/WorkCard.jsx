import React from 'react'

const WorkCard = ({ children, heading, cardBorder = 'border-2 border-[#FF000080]', textBorder = 'border-b-2 border-[#FF000080]' }) => {
    return (
        <div className={` ${cardBorder}  rounded-md h-full`}>
            <div className={`py-6  ${textBorder}  mb-5 flex justify-center items-center`}>
                <h1 className='text-white text-2xl font-readex font-medium'>{heading}</h1>
            </div>

            {children}
        </div>
    )
}

export default WorkCard