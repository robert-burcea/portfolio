import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Navbar({options}) {
    const [nav, setNav] = useState(false);
    console.log(options)

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <h1>Robert</h1>
            <div>
            <ul className="hidden md:flex">
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">NAME</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">NAME</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">NAME</li>
                        </Link>
            </ul>
            <div className="md:hidden">
                <AiOutlineMenu size={25} onClick={() => {setNav(!nav)}}/>
            </div>
            <div className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : "hidden"}>
                <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100]"}>
                <div>
                    <div className="flex w-full items-center justify-between">
                        <h1>Robert</h1>
                        <div className="rounded-full shadow-3xl shadow-black p-3 cursor-pointer">
                            <AiOutlineClose size={25} onClick={() => {setNav(!nav)}} />
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4 text-left">
                        <p className="w-[85%] md:w-[90%] py-4">Hi guys, hire me!</p>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <ul className="uppercase">
                        <Link href="/">
                            <li className="py-4 text-sm">Home</li>
                        </Link>
                        <Link href="/">
                            <li className="py-4 text-sm">Skills</li>
                        </Link>
                        <Link href="/">
                            <li className="py-4 text-sm">Projects</li>
                        </Link>
                    </ul>
                    <div className="pt-40">
                        <p className="uppercase tracking-widest text-[#5651e5]">Let&rsquo;s Connect</p>  
                        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaLinkedinIn />
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaGithub />
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail />
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <BsFillPersonLinesFill />
                            </div>
                        </div>                      
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar