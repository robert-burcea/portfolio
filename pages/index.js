import Head from 'next/head'
import Header from '/pages/landing/Header'
import Hero from '/pages/landing/Hero'

const colors = {
  main: '#0019FF',
  secondary:"#4369C3"
}

export default function Home() {
  return (
    <div className="mx-auto flex flex-col max-w-[1240px] items-center">
      <Head>
            <title>Robert Burcea</title>
        </Head>
      <Header colors={colors}/>
      <Hero />
    </div>
  )
}
