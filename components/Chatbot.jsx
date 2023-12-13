import React from 'react'
import { IoMdSend } from "react-icons/io";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";


const Chatbot = () => {
  return (
    <div className='chat-bot absolute rounded-2xl top-[-560px] bg-white shadow-2xl	 w-[550px] h-[700px]'>
        <div className="tilte pl-[10px] rounded-2xl w-[550px] flex items-center h-[60px] back">
            <h1 className='text-white font-bold text-4xl'>Tobib.ai</h1>
        </div>
        <div className="content">

        </div>
        <div className="document relative">
            <div className="typing absolute right-0 top-[530px]">
                <form className='relative' action="">
                    <input placeholder='Compose your message ...' className='chat pl-[15px] text-lg w-[550px] h-[60px]' type="text" />
                    <button>
                        <IoMdSend className='absolute text-3xl right-[15px] top-[14px]'/>
                    </button>
                </form>
                <div className="icons flex pl-[15px] gap-[20px]">
                    <HiOutlineDocumentArrowUp className='text-3xl cursor-pointer' />
                    <HiOutlineDocumentArrowUp className='text-3xl cursor-pointer' />
                    <HiOutlineDocumentArrowUp className='text-3xl cursor-pointer' />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Chatbot