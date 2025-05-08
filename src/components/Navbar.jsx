import React from 'react'
import Logo from '../assets/Group 20.png'
import { CiSearch } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  return (
  <div className='header container'>
    <img src={Logo} alt="" />
    <ul className='ul1'>
        <li>Home <IoIosArrowDown /></li>
        <li>Menu <IoIosArrowDown /></li>
        <li>Services <IoIosArrowDown /></li>
        <li>Offers <IoIosArrowDown /></li>
    </ul>
    <div className="end">
    <CiSearch />
    <button className='btnOne'>
    <IoCallOutline />
    Contact
    </button>
    </div>
  </div>
  )
}

export default Navbar
