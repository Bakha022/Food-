import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import Fattoush from '../assets/Fattoush salad.png'
import { FaStar } from "react-icons/fa6";
import Vegetable from '../assets/Vegetable salad.png'
import Eggs from '../assets/Egg salad.png'

const Menu = () => {
  return (
    <div className='mt container'>
      <p className='custom'>
        special dishes
      </p>
      <div className="texts">
        <h2>Standout Dishes From Our Menu</h2>
        <div className="btns">
          <button className='btnThree'><IoIosArrowBack /></button>
          <button className='btnThree'><IoIosArrowForward /></button>
        </div>
      </div>
      <div className="boxes mt">

        <div className="box">
          <div className="fav">< MdFavoriteBorder /></div>
          <img src={Fattoush} alt="" />
          <h5>Fattoush salad</h5>
          <p className='p'>Description of the item</p>
          <div className="cost">
            <p> <span>$</span> 24.00</p>
            <p><FaStar className='star' /> 4.9</p>
          </div>
        </div>

        <div className="box">
          <div className="fav">< MdFavoriteBorder /></div>
          <img src={Vegetable} alt="" />
          <h5>Vegetable salad</h5>
          <p className='p'>Description of the item</p>
          <div className="cost">
            <p className='costs'> <span>$</span> 26.00</p>
            <p><FaStar className='star' /> 4.6</p>
          </div>
        </div>

        <div className="box">
          <div className="fav">< MdFavoriteBorder /></div>
          <img src={Eggs} alt="" />
          <h5>Egg vegi salad</h5>
          <p className='p'>Description of the item</p>
          <div className="cost">
            <p> <span>$</span> 23.00</p>
            <p><FaStar className='star' /> 4.5</p>
          </div>
        </div>

      </div>
      

    </div>
  )
}

export default Menu
