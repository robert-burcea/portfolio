import React from 'react'
import Head from 'next/head'
import Navbar from './components/Navbar'

const NAVBAR_OPTIONS = {
    main: [{
        name:"Actor/Writer",
        url:"/actor/"
      },
      {
        name:"Developer",
        url:"/developer/"
      }],
    developer: [
      {
        name:"Skills",
        url:"/developer/skills/"
      },
      {
        name:"Projects",
        url:"/developer/projects"
      }
    ],
    actor: [
  
    ]
  }

function index() {
  return (
    <div className="w-full h-full text-center">
        <Head>
            <title>Robert | Front-End Developer</title>
        </Head>
        <Navbar options={NAVBAR_OPTIONS.developer}/>

    </div>
  )
}

export default index