import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import HeroImage from "../assets/my-passport-photo-removebg-preview.png";
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'> 
       <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className=' text-4xl sm:text-7xl font-bold sm:mt-48 md:mt-0'>I'm a Full Stack Developer</h2>
            <p className=' py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aperiam molestias sed fugiat obcaecati? Corporis optio error nostrum et nisi atque dolorum consequuntur recusandae nesciunt ut excepturi vero doloremque quibusdam, in blanditiis maiores iste quia? Quisquam necessitatibus blanditiis suscipit, veniam, a nisi adipisci earum doloremque minus, ea nam beatae? Exercitationem autem voluptate rerum numquam sed, et quas distinctio impedit, recusandae quod minus soluta architecto?</p>
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
            className=" rounded-2xl mx-auto w-2/3 md:w-full"
            // width={350}
            // height={350}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
