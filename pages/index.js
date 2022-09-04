import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import rb from '/pages/rb.jpg'

export default function Home() {
  return (
    <div className="mx-auto flex flex-col max-w-[1240px]">
      <h1 className="mx-auto text-center bg-gray-200">Here will be the portfolio of Robert Burcea website</h1>
      <div>
        <h1 className="mx-auto text-3xl text-center py-4 my-3">Actor/Writer</h1>
      </div>
      <div>
        <h1 className="mx-auto text-3xl text-center py-4 my-3">Front End Developer</h1>
      </div>
      <div>
        <h1 className="mx-auto text-3xl text-center py-4 my-3">Genius</h1>
      </div>
    </div>
  )
}
