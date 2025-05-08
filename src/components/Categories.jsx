import React from "react";
import CardOne from "../assets/pngwing 4.png";
import CardTwo from "../assets/pngwing 6.png";
import CardThree from "../assets/pngwing 3.png";
import CardFour from "../assets/pngwing 7.png"

const Categories = () => {
  return (
    <div className="categories container">
      <p className="custom">Customer Favorites</p>
      <h3>Popular Categories</h3>
      <div className="cards">
        <div className="card">
          <button className="btnTwo">
            <img src={CardOne} alt="" />
          </button>
          <h4>Main Dish</h4>
          <p className="p">(86 dishes)</p>
        </div>
        <div className="card">
          <button className="btnTwo">
            <img src={CardTwo} alt="" />
          </button>
          <h4 className="p">Break Fast</h4>
          <p className="p">(12 break fast)</p>
        </div>
        <div className="card">
          <button className="btnTwo">
            <img src={CardThree} alt="" />
          </button>
          <h4>Dessert</h4>
          <p className="p">(48 dessert)</p>
        </div>
        <div className="card">
          <button className="btnTwo">
            <img src={CardFour} alt="" />
          </button>
          <h4>Browse All</h4>
          <p className="p">(255 Items)</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
