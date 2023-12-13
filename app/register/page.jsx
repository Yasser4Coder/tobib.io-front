"use client"

import React from 'react'
import Image from 'next/image'
import axios from 'axios';
import {useState} from 'react';
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Nav from '@components/Nav';
import Footer from '@components/Footer';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});


const page = () => {
    const [currentUser, setCurrentUser] = useState();
    const [registrationToggle, setRegistrationToggle] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function submitRegistration(e) {
        e.preventDefault();
        client.post(
          "/register",
          {
            email: email,
            username: username,
            password: password
          }
        ).then(function(res) {
          client.post(
            "/login",
            {
              email: email,
              password: password
            }
          ).then(function(res) {
            setCurrentUser(true);
          });
        });
    }
    
  return (
    <>
    <Nav/>
    <div className='container'>
    <div className='mt-[20px] register-page rounded-2xl h-[620px] lg:h-[700px] shadow-2xl justify-center lg:justify-between flex w-100 lg:w-[860px] pr-[40px] mx-auto'>
        <div className="img lg:block hidden">
            <Image 
                src="/assets/images/Image.png" 
                width={437}
                height={500}
            />
        </div>
        <div className="content text-center flex flex-col gap-[20px] mt-[40px]">
            <div className="titel mb-[30px]">
                <h1 className='text-xl font-semibold'>Create Account</h1>
                <p  className='text-xs font-normal'>We are here to help you!</p>
            </div>
            <div className="inputs">
                <form 
                    onSubmit={e => submitRegistration(e)}
                    className='flex flex-col gap-[20px]' 
                    action="submit"
                >
                    <div className="username relative">
                        <LuUser2 className='absolute text-2xl top-[10px] left-[5px]'/>
                        <input 
                            className='border pl-[40px] w-[332px] h-[45px]' 
                            type="text" 
                            placeholder='Your Name' 
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="email relative">
                        <MdOutlineMail className='absolute text-2xl top-[10px] left-[5px]' />
                        <input 
                            className='border pl-[40px] w-[332px] h-[45px]' 
                            type="text" 
                            placeholder='Your Email' 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="password relative">
                        <RiLockPasswordLine className='absolute text-2xl top-[10px] left-[5px]' />
                        <input 
                            className='border pl-[40px] w-[332px] h-[45px]' 
                            type="password" 
                            placeholder='Password' 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <button className='btn text-base font-medium w-[332px] py-[12px] px-[28px] bg-slate-800 text-white' >Create Account</button>
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
            <h1>Do you have an account ? <a className='underline text-sky-500' href="login">Sign In</a></h1>
        </div>
    </div>
    </div>
    <Footer />
    </>
    
  )
}

export default page