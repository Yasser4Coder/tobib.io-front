"use client"

import Footer from '@components/Footer'
import Nav from '@components/Nav'
import React from 'react'
import Image from 'next/image'
import { IoIosArrowRoundForward } from "react-icons/io";
import Chatbot from '@components/Chatbot';
import {useState} from 'react';
import About from '@components/About'
import Pricing from '@components/Pricing'


const page = () => {
    
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);

  };
    
  return (
    <>
    <Nav />
    <div className='main container'>
        <div className="first xl:flex xl:justify-between">
        <div className="content text-center flex flex-col gap-[60px] xl:text-start">
            <h1 className='leading-[80px] text-6xl font-extrabold'>
            Affordable <br />
            Health Care <br />
            Solutions 
            </h1>
            <p className='text-xl font-normal'>
                Enabling remote access to medical diagnosis  in order to <br />
                close the healthcare gap in Algeria and Africa <br />
                with easy access to diagnosis.
            </p>
            <div className="buttons flex mx-auto xl:mx-0 gap-[30px]">
                <button className='home-btn w-[245px] h-[60px]'><a className='text-xl font-bold text-white' href="login">Login</a></button>
                <button className='home-btn1 pl-[60px] w-[245px] h-[60px] flex items-center gap-[5px]'><a className='text-lg font-normal' href="">Learn More</a> <IoIosArrowRoundForward className='text-2xl' /></button>
            </div>
        </div>
        <div className="image w-full xl:relative">
            <Image 
                src="/assets/images/alexandr-podvalny-tE7_jvK-_YU-unsplash 2.png"
                width={444}
                height={563}
                className='xl:absolute mx-auto my-[40px] xl:mx-0 xl:my-0 xl:right-0'
            />
            <Image
                src="/assets/images/Vector (4).png"
                width={673}
                height={701}
                className='hidden xl:block'
            />
            <div className="card mx-auto xl:mx-0 xl:absolute xl:top-[270px] xl:right-[90px] w-[500px] h-[358px] rounded-2xl bg-gray-300 px-[50px] pt-[40px] flex flex-col gap-[15px]">
                <Image
                    src="/assets/images/“.png" 
                    width={60}
                    height={37.263}
                />
                <p className='text-xl font-medium'>
                    I highly recommend Jodi J. Appleby. <br />
                    She was attentive to our needs and <br />
                    worked tirelessly to find us the perfect <br />
                    home. We couldn't be happier with our <br />
                    new place!
                </p>
                <div className="line h-[1px] bg-gray-400"></div>
                <div className="prof w-[350px] flex justify-between items-center">
                    <Image
                        src="/assets/images/Ellipse 15.png" 
                        width={60}
                        height={37.263}
                    />
                    <h1>Mountaha Boukallel</h1>
                    <Image
                        src="/assets/images/Group 62.png" 
                        width={60}
                        height={37.263}
                    />

                </div>
            </div>
        </div>
        </div>
        <div className="second mt-[40px] w-[600px] mx-auto flex gap-[60px]">
            <div className="cost px-6 py-3 b-r shadow-2xl flex gap-[15px] items-center">
                <div className="photos">
                <Image
                        src="/assets/images/Group 20.png" 
                        width={155}
                        height={36}
                />
                </div>
                <div className="text">
                    <h1 className='font-medium'>
                        72k+ Happy 
                        Customers
                    </h1>
                </div>
            </div>
            <div className="doc px-4 b-r shadow-2xl flex gap-[15px] items-center">
                <div className="photos">
                <Image
                        src="/assets/images/Ellipse 3.png" 
                        width={60}
                        height={60}
                />
                </div>
                <div className="text w-[110px]">
                    <h1 className='font-medium'>
                        200+   Doctor
                    </h1>
                </div>
            </div>
        </div>
        <About />
        <Pricing />
        <div className="third flex flex-col w-full items-end h-[300px] relative">
            <button
                onClick={handleClick}
                className='home-btn text-white text-xl font-bold mt-[150px] w-[245px] h-[80px]'>Chat with us!
            </button>
            {isShown && <Chatbot />}
        </div>
        
    </div>
    <Footer />
    </>
    
  )
}

export default page