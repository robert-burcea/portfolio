import Head from 'next/head'
import Navbar from './developer/components/Navbar'
import Header from '/pages/landing/Header'
import Hero from '/pages/landing/Hero'

const NAVBAR__OPTIONS = {
  main: [{
      name:"Actor",
      url:"/pages/actor/"
    },
    {
      name:"Developer",
      url:"/pages/developer/"
    }],
  developer: [
    {
      name:"Skills",
      url:"/pages/developer/skills/"
    },
    {
      name:"Projects",
      url:"/pages/developer/projects"
    }
  ],
  actor: [

  ]
}

export default function Home() {
  return (
    <div className="mx-auto flex flex-col max-w-[1240px] items-center">
      <Head>
            <title>Robert Burcea</title>
      </Head>
      <Navbar options={NAVBAR__OPTIONS.main}/>
      <Hero />
    </div>
  )
}
