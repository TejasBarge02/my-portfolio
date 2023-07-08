import {React, useState} from 'react'
import '../index.css'
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id:1,
      link: 'home'
    },
    {
      id:2,
      link: 'about'
    },
    {
      id:3,
      link: 'portfolio'
    },
    {
      id:4,
      link: 'experience'
    },
    {
      id:5,
      link: 'contact'
    },
  ]

  return (
    <div className='flex justify-end md:justify-center items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
        </div>
        <ul className='hidden md:flex' >
            {links.map(({id, link}) => (
              <li
                key={id}
                className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200'
              >
                {link}
              </li>
            ))}
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 hover:text-white flex justify-end'>
          {nav ? <FaTimes size={30}/> :<FaBars size={30}/>}
        </div>
      
    </div>
  )
}

export default Navbar
