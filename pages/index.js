import Head from 'next/head'
import Navbar from './developer/components/Navbar'
import Header from '/pages/landing/Header'
import Hero from '/pages/landing/Hero'

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
