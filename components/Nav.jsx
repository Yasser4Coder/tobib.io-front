"use client"

import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import {useState} from 'react';
import Sidenav from './Sidenav';


const Nav = () => {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);

  };

  return (
    <>
    <div className='nav-bar flex justify-between container h-[140px] items-center'>
      <div className="logo">
        <h1 className='text-2xl font-extrabold'>
          Tobib.ai
        </h1>
      </div>
      <div className="links hidden lg:block lg:flex lg:gap-[30px]">
        <a className='text-lg text-teal-600 font-medium' href="home">Home</a>
        <a className='text-lg font-normal' href="">Services</a>
        <a className='text-lg font-normal' href="">How it works?</a>
        <a className='text-lg font-normal' href="">About</a>
      </div>
      <div className="relative registration flex items-center gap-[30px]">
        <a className='text-lg text-xl font-bold' href="login">
          Login
        </a>
        <button className='sign text-xl text-white font-bold w-[126px] h-[49px] bg-teal-600'><a href="register">Sign Up</a></button>
        <FaBarsStaggered onClick={handleClick} className='text-2xl block lg:hidden' />
        {isShown && <Sidenav />}
      </div>
    </div>
    </>
    
  )
}

export default Nav