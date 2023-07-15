import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import AnimatedHeading from './AnimatedHeading';
import HeroImage from "../assets/heroImage.png";
const Home = () => {
  const texts = [
    {text: "Full Stack Developer"}
  ]
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'> 
       <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full w-full'>
            <h2 className=' text-2xl sm:text-5xl font-bold sm:mt-48 md:mt-0'>Hey there, I'm</h2>
            <h2 className=' text-4xl sm:text-7xl font-bold sm:mt-48 md:mt-0'>Tejas Barge</h2>
            <div className='flex flex-row space-x-2 sm:space-x-4 mt-0 sm:mt-6'>
              <h2 className=' text-2xl sm:text-5xl font-bold sm:mt-48 md:mt-0'>A</h2>
              {texts.map(({text}) => (
                <AnimatedHeading text={text}/>
              ))}
            </div>
             
            <p className=' py-4 max-w-md'>As a curious and dedicated full-stack developer, I continually explore new technologies, embracing challenges and opportunities to create innovative web applications with a strong focus on user-centric design and efficient functionality.</p>
            <div>
              <button className=' group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Portfolio
              <span className=' group-hover:rotate-90 duration-300'><FaAngleRight size={20} className='ml-1 mt-1'/>
              </span>
              </button>
            </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-2xl mx-auto w-2/3 md:w-full bg-transparent"
            // width={350}
            // height={350}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
