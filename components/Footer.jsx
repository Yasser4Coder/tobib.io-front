import React from 'react'
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoArrowForwardSharp } from "react-icons/io5";


const Footer = () => {
  return (
    <>
      <div className='footer mt-[70px] container flex flex-col text-center h-[690px]  md:flex md:flex-row md:justify-between md:items-center md:h-[444px]'>
        <div className="first-part w-full md:w-0 flex flex-col gap-[20px]">
          <div className="logo flex items-center mx-auto mt-[20px] md:mx-0 gap-[15px]">
            <div className="cir w-[40px] h-[40px] bg-teal-600"></div>
            <h1 className='text-2xl font-bold'>Tobib.ai</h1>
          </div>
          <p>
            21001 Azzaba, Skikda <br />
            Freres Souici, 1345
          </p>
          <div className="phone mx-auto flex gap-[5px] items-center">
            <MdOutlinePhoneEnabled />
            <p>
              +213 540930111
            </p>
          </div>
          <div className="email mx-auto mb-[20px] flex gap-[5px] items-center">
            <MdOutlineMailOutline />
            <p>
              support@Tobib.ai
            </p>
          </div>
        </div>
        <div className="second-part flex flex-col gap-[20px]">
          <h1 className='text-2xl font-bold'>Quick Links</h1>
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="">Who it works</a>
          <a href="">Services</a>
        </div>
        <div className="third-part flex flex-col gap-[20px]">
          <h1 className='text-2xl font-bold'>Subscribe to our Newsletter!</h1>
          <form action="">
            <div className="cursor-pointer cir w-[40px] h-[40px] bg-teal-600 relative left-[303px] top-[50px]"><IoArrowForwardSharp className='absolute top-[7px] left-[7px] text-2xl text-white' /></div>
            <input placeholder='Email Address' className='rounded-2xl w-[350px] h-[60px] pl-[30px]' type="text" />
          </form>
          <h1>Follow Us on</h1>
          <div className="icons flex mx-auto items-center gap-[20px]">
            <FaLinkedinIn className='text-2xl text-teal-600' />
            <FaFacebookF className='text-2xl text-teal-600'/>
            <FaInstagram className='text-2xl text-teal-600' />
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Footer