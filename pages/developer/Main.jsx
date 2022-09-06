import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Main() {
  return (
    <div className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="ppercase text-sm tracking-widest text-gray-600">
                    Let&rsquo;s build something together
                    </p>
                <h1 className="py-4 text-gray-700">
                    Hi, I&rsquo;m <span className="text-[#5651e5]">Robert!</span>
                </h1>
                <h1 className="py-2 text-gray-700">
                    A Front-End Web Developer
                </h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    I&rsquo;m a noob Front-End Web developer, but I&rsquo;m super smart and I learn pretty fast!
                    As fast as I can type.
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill />
                </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Main