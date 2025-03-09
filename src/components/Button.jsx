import React from 'react'

const Button = ({ classes, children, isIcon = true }) => {
    return (
        <button className={`btn ${classes} border border-[#7777772a] hidden lg:inline-flex`}><span className='font-readex text-[#21F6EE] text-lg'>{children}</span>
            {isIcon && <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.93452 15.714L9.89937 8.88877C10.0277 8.77876 10.1307 8.64229 10.2013 8.48872C10.2719 8.33516 10.3085 8.16814 10.3085 7.99912C10.3085 7.8301 10.2719 7.66308 10.2013 7.50952C10.1307 7.35596 10.0277 7.21949 9.89937 7.10947L1.93452 0.284277C1.17427 -0.36709 -4.76837e-05 0.172949 -4.76837e-05 1.17393V14.8263C-4.76837e-05 15.8272 1.17427 16.3673 1.93452 15.714Z" fill="#21F6EE" />
            </svg>}
        </button>
    )
}

export default Button