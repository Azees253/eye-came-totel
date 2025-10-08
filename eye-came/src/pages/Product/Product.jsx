import React, { useState } from "react";
import "./Product.css";
import Productimg from "../../components/Productimg/Productimg";
import Header from "../../components/Header/Header";
import ProductItems from "../../components/ProductItems/ProductItems";
import { MenuItems } from "../../MenuItems";
import { Link } from "react-router-dom";

const Product = () => {
  const [category, setCatgory] = useState("All");
  return (
    <div>
      <Productimg />
      {/* <Header category={category} setCatgory={setCatgory} />
      <ProductItems category={category} setCatgory={setCatgory} /> */}

      <div className="categories">
        <div className="small-container2">
          <div className="row2">
            <div className="col-3-1">
              <img
                src="https://static.vecteezy.com/system/resources/previews/041/933/147/non_2x/ai-generated-wall-mount-cctv-security-camera-isolated-on-transparent-background-free-png.png"
                alt=""
              />
            </div>
            <div className="col-3-1">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="col-3-1">
              <img
                src="https://static.vecteezy.com/system/resources/previews/046/553/770/non_2x/water-purifier-filter-on-transparent-background-png.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="small-container2">
        <h2 className="title">Feature Products</h2>
        <div className="row2">
          {MenuItems.map((item, index) => {
            return (
              <div className="col-3-1">
                <img src={item.image} alt="" />

                <h4>{item.title}</h4>
                <div className="rating">
                  <i className={item.rating1}></i>
                  <i className={item.rating1}></i>
                  <i className={item.rating1}></i>
                  <i className={item.rating1}></i>
                  <i className={item.half}></i>
                </div>
                <p>${item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="offer1">
        <div className="row4">
          <div className="col-2-1">
            <img
              src="https://www.kent.co.in/images/ro/ro-water-purifiers-banner.png"
              alt=""
              className="offer1-img"
            />
          </div>
          <div className="col-2-1">
            <p>Exclusively Available on E-com</p>
            <h1> Water Purifier </h1>
            <div className="small1">
              The Mi Smart Band 4 is a smart fitness band that comes with a
              0.95-inch AMOLED color display, heart rate monitoring, and up to
              20 days of battery life.
            </div>

            <Link to="/product" className="col-2-1-btn">
              Buy Now &#8594;
            </Link>
          </div>
        </div>
      </div> */}

      <div className="offer1">
        <div className="row4">
          <div className="col-2">
            <img
              src="https://www.kent.co.in/images/ro/ro-water-purifiers-banner.png"
              alt=""
            />
          </div>
          <div className="col-2">
            <p>Exclusively Available on E-com</p>
            <h1> Water Purifier </h1>
            <div className="small1">
              RO (Reverse Osmosis) water is purified by forcing water through a
              semi-permeable membrane that removes impurities, salts, and
              harmful contaminants, making it clean, safe, and healthy to drink.
            </div>

            <Link to="/product" className="col-2-1-btn">
              Buy Now &#8594;
            </Link>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="small-container1">
          <div className="row1">
            <div className="col-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, quis?
              </p>
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <img src="" alt="" />
              <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, quis?
              </p>
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <img src="" alt="" />
              <h3>Mike Smith</h3>
            </div>
            <div className="col-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, quis?
              </p>
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <img src="" alt="" />
              <h3>Mabel Joe</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Aquafina_logo_%282005%29.svg/250px-Aquafina_logo_%282005%29.svg.png"
                alt=""
              />
            </div>
            <div className="col-5">
              <img src="https://www.microtechboise.com/favicon.ico" alt="" />
            </div>
            <div className="col-5">
              <img
                src="https://jimssecurity.com.au/wp-content/uploads/2021/03/HIKVISION_LOGO-1.png"
                alt=""
              />
            </div>

            <div className="col-5">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
