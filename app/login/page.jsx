import React from 'react'
import Image from 'next/image'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Nav from '@components/Nav';
import Footer from '@components/Footer';

const page = () => {
  return (
    <>
    <Nav />
    <div className='container'>
    <div className='mt-[20px] register-page rounded-2xl h-[620px] lg:h-[700px] shadow-2xl justify-center lg:justify-between flex w-100 lg:w-[860px] pr-[40px] mx-auto'>
        <div className="img lg:block hidden">
            <Image 
                src="/assets/images/loginImg.png" 
                width={437}
                height={500}
            />
        </div>
        <div className="content text-center flex flex-col gap-[20px] mt-[40px]">
            <div className="titel mb-[30px]">
                <h1 className='text-xl font-semibold'>Log in</h1>
                <p  className='text-xs font-normal'>We are here to help you!</p>
            </div>
            <div className="inputs">
                <form className='flex flex-col gap-[20px]' action="">
                    <div className="email relative">
                        <MdOutlineMail className='absolute text-2xl top-[10px] left-[5px]' />
                        <input className='border pl-[40px] w-[332px] h-[45px]' type="text" placeholder='Your Email' />
                    </div>

                    <div className="password relative">
                        <RiLockPasswordLine className='absolute text-2xl top-[10px] left-[5px]' />
                        <input className='border pl-[40px] w-[332px] h-[45px]' type="password" placeholder='Password' />
                    </div>

                    <button className='btn text-base font-medium w-[332px] py-[12px] px-[28px] bg-slate-800 text-white' >Log in</button>
                </form>
            </div>
            <div className="buttons flex flex-col gap-[20px]">
                <div className="or flex items-center justify-between">
                    <div className='line1 bg-slate-600 h-[1px] w-[139px]'></div>
                    <h1>or</h1>
                    <div className="line2 bg-slate-600 h-[1px] w-[139px]"></div>
                </div>
                <div className="google">
                    
                    <button className='pl-[60px] flex items-center gap-[10px] btn2 text-base font-medium mx-auto w-[332px] py-[12px] px-[28px]'>
                        <Image 
                            src="/assets/images/_Facebook.svg"
                            width={20}
                            height={20}
                        />
                        Continue with Google
                    </button>
                </div>
                <div className="facebook">
                    
                    <button className='pl-[60px] flex items-center gap-[10px] btn2 text-base font-medium mx-auto w-[332px] py-[12px] px-[28px]'>
                        <Image 
                            src="/assets/images/Google - Original.png"
                            width={20}
                            height={20}
                        />
                        Continue with Facebook
                    </button>
                </div>
        
            </div>
            <h1>you don't have an account ? <a className='underline text-sky-500' href="register">Sign Up</a></h1>
        </div>
    </div>
    </div>
    
    <Footer />
    </>
  )
}

export default page