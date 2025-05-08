import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer container'>
      <div className="icons">
        <button className='btnicon'><FaFacebookF size={20} /></button>
        <button className='btnicon'><FaInstagram size={20} /></button>
        <button className='btnicon'><FaTwitter size={20} /></button>
        <button className='btnicon'><FaYoutube size={20} /></button>
      </div>
      <div className="copyright">
        <p className='pend'>Copyright       2023 Dscode | All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
