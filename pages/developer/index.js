import React from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'
import Main from '/pages/developer/Main'

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
        name:"Home",
        url:"/"
      },
      {
        name:"Developer Skills",
        url:"/developer/skills/"
      },
      {
        name:"Developer Projects",
        url:"/developer/projects"
      }
    ],
    actor: [
        {
        name:"Home",
        url:"/"
      },
      {
        name:"Acting Skills",
        url:"/actor/skills/"
      },
      {
        name:"Acting Projects",
        url:"/actor/projects"
      }
    ]
  }

function index() {
  return (
    <div className="w-full h-full text-center">
        <Head>
            <title>Robert | Front-End Developer</title>
        </Head>
        <Navbar options={NAVBAR_OPTIONS.developer}/>
        <Main />

    </div>
  )
}

export default index