import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import data from '/public/assets/projects/data-react-landing.png'
import pixabay from '/public/assets/projects/pixabay-react-search.png'
import whatsapp from '/public/assets/projects/whats-app-clone.png'


const Projects = () => {
  return (
    <div className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-xl tracking-widest uppercase text-[#5651e5]">Demo Projects</p>
            <h2 className="py-4">What I&rsquo;ve built</h2>
            <div className="grid md:grid-cols-2 gap-8">

                <ProjectItem 
                image={data} 
                name="Data Co. Landing Site" 
                tools="React JS Tailwind" 
                link="" />
                <ProjectItem 
                image={pixabay} 
                name="Pixabay React Tailwind Search" 
                tools="React JS Tailwind" 
                link="" />
                <ProjectItem 
                image={whatsapp} 
                name="Whatsapp Clone WebApp" 
                tools="React JS Firebase" 
                link="" />

            </div>
        </div>

    </div>
  )
}

export default Projects