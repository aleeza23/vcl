import React from 'react'
import heroBg from '../assets/images/hero-bg.png'
import logo from '../assets/images/logo.png';


const Login = () => {
    return (
        <section className="min-h-screen w-full flex justify-center items-center z-0 relative bg-center " style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>

            <div className="container mx-auto px-4 flex justify-center items-center">
                <div>
                    <a href='/'>
                        <img src={logo} alt="logo" className=' w-32 lg:w-[169px] mx-auto mb-12' />
                    </a>

                    {/* FORM */}
                    <div className='md:w-[372px] bg-white border border-[#E4E4E7] rounded-lg p-8'>
                        <h1 className='font-readex font-semibold text-center text-[#09090B] text-xl'>Welcome back</h1>
                        <p className='text-center text-[#71717A] font-readex font-normal mt-1 text-md'>Login to your Viral Clone Lab  account</p>

                        <form action="" className='mt-5'>
                            <div className='mb-5 flex flex-col gap-2'>
                                <label className='font-readex font-medium text-[#09090B] text-md'>Email</label>
                                <input type="text" placeholder='m@example.com' className='border border-[#E4E4E7] rounded-lg py-1.5 px-3' />
                            </div>
                            <div className='mb-5 flex flex-col gap-2'>
                                <div className="flex justify-between items-center font-readex  text-[#09090B] ">
                                    <label className='font-medium text-md'>Password</label>
                                    <a href="" className='underline text-sm'>Forgot your password?</a>
                                </div>
                                <input type="text" placeholder='' className='border border-[#E4E4E7] rounded-lg py-1.5 px-3' />
                            </div>

                            <button className='bg-[#18181B] w-full text-white font-readex text-center font-light rounded-lg py-2'>Login</button>

                            <div className="flex items-center justify-center w-full border-t-[1px] border-t-slate-300 mt-8 relative">
                                <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login