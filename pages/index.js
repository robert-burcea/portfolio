import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import rb from '/pages/rb.jpg'

export default function Home() {
  return (
    <div className="mx-auto flex flex-col max-w-[1240px] items-center">
      <h1 className="mx-auto text-center text-xl md:text-3xl">Here will be the portfolio of Robert Burcea</h1>
      <div className="grid sm:grid-cols-2 my-10">

      <div className="w-[200px] grid items-center rounded shadow-lg hover:scale-[1.1] hover:shadow-2xl">
        <Image className="rounded-lg shadow-lg items-center" src={rb} alt=""/>
      </div>

      <div className="">
          <h1 className="mx-auto text-3xl text-center py-4 my-3 border rounded-lg shadow-lg p-2 hover:scale-[1.1] hover:bg-slate-100">Actor/Writer</h1>
          <h1 className="mx-auto text-3xl text-center py-4 my-3 border rounded-lg shadow-lg p-2 hover:scale-[1.1] hover:bg-slate-100">Front End Developer</h1>
          <h1 className="mx-auto text-3xl text-center py-4 my-3 border rounded-lg shadow-lg p-2 hover:scale-[1.1] hover:bg-slate-100">Genius</h1>
      </div>

      </div>
    </div>
  )
}
