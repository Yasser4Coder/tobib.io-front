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
import { IoMdTime } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { IoPlayCircleOutline } from "react-icons/io5";
const Archives = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[970px] h-[953px] flex border'>
            <div className='w-[411px] h-[953px] border-r-2'>
                <Image 
                    src="/assets/images/profile-pic.png"
                    width={114}
                    height={114}
                    className='mx-auto mt-[14px] mb-[11px]'
                />
                <p className='text-center font-bold mb-[54px]'>Mountaha Boukallel</p>
                <div className='h-[333px] flex items-center flex-col'>
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
                    <p className='font-bold'>Archive</p>
                    <p>Manage archives</p>
                </div>
                <div className='px-[90px] grid grid-rows-1 md:grid-rows-3'>
                    <div className='py-[22px] px-[17px] rounded-lg border-2 mb-3'>
                        <div className='relative '>
                            <p className='font-bold mb-[9px]'>Dr. Benjemaa M.</p>
                            <div className='flex justify-between pr-[79px] mb-[10px]'>
                                <p className='flex items-center'><IoMdTime className='mr-2'/>15:30</p>
                                <p className='flex items-center'><IoMdTime className='mr-2' />2000 Dzd</p>
                                <IoPlayCircleOutline className='text-slate-400 w-[50px] h-[50px] absolute top-[18px] right-[7px] '/>
                            </div>
                            
                        </div>
                        <div>
                            <p className='flex items-center mb-[10px]'><CiCalendar className='mr-2'/>01/01/2023</p>
                            <p className='w-[64px] h-[24px] bg-cyan-800 rounded text-center font-bold text-white'>well</p>
                        </div>
                    </div>
                    <div className='py-[22px] px-[17px] rounded-lg border-2 mb-3'>
                        <div className='relative '>
                            <p className='font-bold mb-[9px]'>Dr. Benjemaa M.</p>
                            <div className='flex justify-between pr-[79px] mb-[10px]'>
                                <p className='flex items-center'><IoMdTime className='mr-2'/>15:30</p>
                                <p className='flex items-center'><IoMdTime className='mr-2' />2000 Dzd</p>
                                <IoPlayCircleOutline className='text-slate-400 w-[50px] h-[50px] absolute top-[18px] right-[7px] '/>
                            </div>
                            
                        </div>
                        <div>
                            <p className='flex items-center mb-[10px]'><CiCalendar className='mr-2'/>01/01/2023</p>
                            <p className='w-[64px] h-[24px] bg-cyan-800 rounded text-center font-bold text-white'>well</p>
                        </div>
                    </div>
                    <div className='py-[22px] px-[17px] rounded-lg border-2 mb-3'>
                        <div className='relative '>
                            <p className='font-bold mb-[9px]'>Dr. Benjemaa M.</p>
                            <div className='flex justify-between pr-[79px] mb-[10px]'>
                                <p className='flex items-center'><IoMdTime className='mr-2'/>15:30</p>
                                <p className='flex items-center'><IoMdTime className='mr-2' />2000 Dzd</p>
                                <IoPlayCircleOutline className='text-slate-400 w-[50px] h-[50px] absolute top-[18px] right-[7px] '/>
                            </div>
                            
                        </div>
                        <div>
                            <p className='flex items-center mb-[10px]'><CiCalendar className='mr-2'/>01/01/2023</p>
                            <p className='w-[64px] h-[24px] bg-orange-600 rounded text-center font-bold text-white'>Average</p>
                        </div>
                    </div>
                    <div className='py-[22px] px-[17px] rounded-lg border-2 mb-3'>
                        <div className='relative '>
                            <p className='font-bold mb-[9px]'>Dr. Benjemaa M.</p>
                            <div className='flex justify-between pr-[79px] mb-[10px]'>
                                <p className='flex items-center'><IoMdTime className='mr-2'/>15:30</p>
                                <p className='flex items-center'><IoMdTime className='mr-2' />2000 Dzd</p>
                                <IoPlayCircleOutline className='text-slate-400 w-[50px] h-[50px] absolute top-[18px] right-[7px] '/>
                            </div>
                            
                        </div>
                        <div>
                            <p className='flex items-center mb-[10px]'><CiCalendar className='mr-2'/>01/01/2023</p>
                            <p className='w-[64px] h-[24px] bg-red-700 rounded text-center font-bold text-white'>Bad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Archives
