import React from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'
import Main from '/pages/developer/Main'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

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
        <About />
        <Skills />
        <Projects />
        <Contact />

    </div>
  )
}

export default index