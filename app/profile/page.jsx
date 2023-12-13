import React from 'react'
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";
import { LiaUserEditSolid } from "react-icons/lia";
import { MdNavigateNext } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { MdOutlineContactSupport } from "react-icons/md";
import { GoShieldLock } from "react-icons/go";
import { SlLogout } from "react-icons/sl";
import { BsCalendar4Week } from "react-icons/bs";
import Nav from '@components/Nav';
import Footer from '@components/Footer';

const page = () => {
  return (
    <div>
    <Nav />
        <div className='w-full conatiner flex justify-center items-center'>
        <div className='w-[970px] h-[953px] flex border'>
            <div className='w-[411px] h-[953px] border-r-2'>
                <Image 
                    src="/assets/images/profile-pic.png"
                    width={114}
                    height={114}
                    className='mx-auto mt-[14px] mb-[11px]'
                />
                <p className='text-center font-bold mb-[54px]'>Mountaha Boukallel</p>
                <div className='h-[333px] flex items-center flex-col gap-[20px]'>
                    <a href="#" className='flex w-[342px] h-[26px] border-b-2 justify-between'><span className='text-slate-400 flex items-center mr-3'><LiaUserEditSolid className='mr-1 '/> Edit Profile</span><MdNavigateNext /></a>
                    <a href="#" className='flex w-[342px] border-b-2 justify-between'><span className='text-slate-400 flex items-center mr-3'><CiHeart className='mr-1'/> My Archives</span><MdNavigateNext /></a>
                    <a href="#" className='flex w-[342px] border-b-2 justify-between'><span className='text-slate-400 flex items-center mr-3'><CiBellOn className='mr-1'/> Notifications</span><MdNavigateNext /></a>
                    <a href="#" className='flex w-[342px] border-b-2 justify-between'><span className='text-slate-400 flex items-center mr-3'><CiSettings className='mr-1'/> Settings</span><MdNavigateNext /></a>
                    <a href="#" className='flex w-[342px] border-b-2 justify-between'><span className='text-slate-400 flex items-center mr-3'><MdOutlineContactSupport className='mr-1'/> Help and Support</span><MdNavigateNext /></a>
                    <a href="#" className='flex w-[342px] border-b-2 justify-between'><span className='text-slate-400 flex items-center mr-3'><GoShieldLock className='mr-1'/> Terms and Conditions</span><MdNavigateNext /></a>
                    <a href="#" className='flex w-[342px] border-b-2 justify-between'><span className='text-slate-400 flex items-center mr-3'><SlLogout className='mr-1'/> Log Out</span><MdNavigateNext /></a>
                </div>
            </div>

            <div className='w-[559px] h-[953px]'>
                <div className='h-[100px] flex flex-col justify-center items-center border-b-2 mb-[51px]'>
                    <p className='font-bold'>Public Profile</p>
                    <p>Manage your information</p>
                </div>
                <form className='px-[90px]'>
                    <p className='font-bold'>Basic</p>
                    <div className="email relative mb-[24px]">
                        <input className='border pl-[16px] w-[332px] h-[45px] rounded-lg' type="text" placeholder='Mountaha Boukallel' />
                    </div>
                    <div className="email relative mb-[24px]">
                        <input className='border pl-[16px] w-[332px] h-[45px] rounded-lg' type="text" placeholder='Mountaha_bkl' />
                    </div>
                    <div className="email relative mb-[24px]">
                        <input className='border pl-[16px] w-[332px] h-[45px] rounded-lg' type="text" placeholder='mountaha.boukallel@uni_constantine2.dz' />
                    </div>
                    <div className="email relative mb-[24px]">
                        <BsCalendar4Week className='absolute text-slate-400 text-2xl top-[10px] left-[5px]' />
                        <input className='border text-slate-400 pl-[40px] w-[332px] h-[45px] rounded-lg' type="date" value="2000-04-02" />
                    </div>
                    <div className="email relative mb-[24px]">
                        <select name="" id="" className='bg-white border pl-[16px] w-[332px] h-[45px] rounded-lg text-slate-400'>
                            <option value="" >Female</option>
                        </select>
                    </div>
                    <p className='font-bold'>Extra Information</p>
                    <div className="email relative mb-[24px]">
                        <input className='border w-[332px] pl-[16px] h-[45px] rounded-lg' type="text" placeholder='Mountaha Boukallel' />
                    </div>
                    <div className="email relative mb-[24px]">
                        <BsCalendar4Week className='absolute text-slate-400 text-2xl top-[10px] left-[5px]' />
                        <input className='border pl-[40px] w-[332px] h-[45px] rounded-lg' type="text" placeholder='Mountaha Boukallel' />
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default page