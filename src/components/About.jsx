import React from 'react'
import { FaBowlRice } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";



const About = () => {
  return (
    <div className='about mt container'>
      <div className="frst">
        <p className='custom'>Our Story & Services</p>
        <h2>Our Culinary Journey And Services</h2>
        <p className='p'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
        <button className='btnOne'>Explore</button>
      </div>
      <div className="scnd">
        <div className="abcard">
          <FaBowlRice size={70} />
          <h6>Catering</h6>
          <p>Delight your guests with our flavors and  presentation</p>

        </div>
        <div className="abcard">
          <FaShoppingCart size={70} />
          <h6>Catering</h6>
          <p>Delight your guests with our flavors and  presentation</p>

        </div>
        <div className="abcard">
          <IoTimerOutline size={70} />
          <h6>Catering</h6>
          <p>Delight your guests with our flavors and  presentation</p>

        </div>
        <div className="abcard">
          <FaGift size={70} />
          <h6>Catering</h6>
          <p>Delight your guests with our flavors and  presentation</p>

        </div>
      </div>
    </div>
  )
}

export default About
