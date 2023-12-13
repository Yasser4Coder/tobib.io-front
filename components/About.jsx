import React from 'react'

const About = () => {
  return (
    <div className='container mt-[60px]'>
        <p className='sm:text-4xl text-3xl font-medium title-font text-gray-900 text-center mb-[44px]'>About Us</p>
        <div className='flex justify-center gap-5'>
            <div className='w-[423px] h-[200px] py-[31px] px-[16px] border rounded-3xl back'>
                <p className='text-center font-bold text-lg mb-2 text-white'>Chatbot based consultation</p>
                <p className='text-white'>
                    Get AI-driven pre-diagnostic service that allows users to input their symptoms and based on that get redirected to the best Doctor 
                </p>
            </div>
            <div className='coler w-[423px] h-[200px] py-[31px] px-[16px] border rounded-3xl'>
                <p className='text-center font-bold text-lg mb-2'>Affordablility</p>
                <p className=''>
                    Get premium experience with the best prices out there!
                </p>
            </div>
            <div className='w-[423px] h-[200px] py-[31px] px-[16px] border rounded-3xl back'>
                <p className='text-center font-bold text-lg mb-2 text-white'>Availability</p>
                <p className='text-white'>
                    Our service is available 24/7
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
