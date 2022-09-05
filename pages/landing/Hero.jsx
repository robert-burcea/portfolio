import React from 'react'
import Image from 'next/image'
import rb from '/public/assets/rb.jpg'
import Link from 'next/link'

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row w-[90%] justify-around items-center h-screen">

      <div className="w-[200px] sd:w-[250px] md:w-[300px] my-2 rounded shadow-lg hover:scale-[1.1] hover:shadow-2xl">
        <Image className="rounded-lg shadow-lg items-center" src={rb} alt="Robert's Photo"/>
      </div>

      <div className="flex flex-col">
        <Link href="/actor/"><h1 className="mx-auto text-3xl text-center py-4 my-3 border rounded-lg shadow-lg p-2 hover:scale-[1.1] hover:bg-slate-100 hover:cursor-pointer">
            Actor/Writer</h1>
        </Link>
        <Link href="/developer/"><h1 className="mx-auto text-3xl text-center py-4 my-3 border rounded-lg shadow-lg p-2 hover:scale-[1.1] hover:bg-slate-100 hover:cursor-pointer">
            Front End Developer</h1>
        </Link>
      </div>

    </div>

  )
}

export default Hero