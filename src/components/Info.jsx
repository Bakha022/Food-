import React from 'react'
import Logo from '../assets/Group 20.png'

const Info = () => {
  return (
    <div className='info mt container'>
      <div className="lineone">
        <img src={Logo} alt="" />
        <p>Savor the artistry where every dish is a culinary masterpiece</p>
      </div>
      <div className="linetwo">
        <p className='head'>Useful links</p>
        <p className='pend'>About us</p>
        <p className='pend'>Events</p>
        <p className='pend'>Blogs</p>
        <p className='pend'>FAQ</p>
      </div>
      <div className="linethree">
      <p className='head'>Main Menu</p>
        <p className='pend'>Home </p>
        <p className='pend'>Offers</p>
        <p className='pend'>Menus</p>
        <p className='pend'>Reservation</p>
      </div>
      <div className="linefour">
      <p className='head'>Contact Us</p>
        <p className='pend'> example@email.com </p>
        <p className='pend'>+64 958 248 966</p>
        <p className='pend'>Social</p>
      </div>
    </div>
  )
}

export default Info
