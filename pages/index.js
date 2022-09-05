import Head from 'next/head'
import Header from '/pages/landing/Header'
import Hero from '/pages/landing/Hero'
import Navbar from './Navbar'

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

export default function Home() {
  return (
    <div className="mx-auto flex flex-col max-w-[1240px] items-center">
      <Head>
            <title>Robert Burcea</title>
      </Head>
      <Navbar options={NAVBAR_OPTIONS.main}/> 
      <Hero />
    </div>
  )
}
