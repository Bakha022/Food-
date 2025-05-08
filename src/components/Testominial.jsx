import React from 'react'
import Cooker from '../assets/Mask.png'
import Maskone from '../assets/Mask1.png'
import Masktwo from '../assets/Mask2.png'
import Maskthree from '../assets/Mask3.png'
import { FaStar } from "react-icons/fa6";

const Testominial = () => {
  return (
    <div className='testominial mt hero container'>
      <img src={Cooker} alt="" />
      <div className="rights">
        <p className='custom'>Testimonials</p>
        <h2>What Our Customers Say About Us</h2>
        <p className='p'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
        <div className="feedback">
          <img className='first' src={Maskone} alt="" />
          <img className='second' src={Masktwo} alt="" />
          <img className='third' src={Maskthree} alt="" />
          <div className="cus">
            <h5>Customer Feedback</h5>
             <p className='costs'><FaStar className='star' /> 4.9 <span className='p'>(18.6k Reviews)</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testominial
