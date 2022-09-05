import React from 'react'
import Head from 'next/head'
import Navbar from './components/Navbar'

function index() {
  return (
    <div className="w-full h-full text-center">
        <Head>
            <title>Robert | Front-End Developer</title>
        </Head>
        <Navbar />

    </div>
  )
}

export default index