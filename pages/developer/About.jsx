import React from 'react'

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-6">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
                <h2 className="py-4">Who I am</h2>
                <p className="py-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut non vitae, deserunt reiciendis eligendi iusto ducimus voluptate ipsum dolore porro ad 
                perspiciatis nostrum saepe maiores libero nam, eum alias adipisci! 
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe pariatur quibusdam ad. Corporis pariatur dignissimos adipisci sint dolorum, architecto 
                minus perferendis aspernatur reprehenderit sapiente amet modi at facere, officia ullam.   
                </p>
                <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <img className="rounded-xl" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""></img>
            </div>
        </div>
    </div>
  )
}

export default About