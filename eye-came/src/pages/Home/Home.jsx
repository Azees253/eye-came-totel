import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { MenuItems } from "../../MenuItems";
import Header from "../../components/Header/Header";
import ProductItems from "../../components/ProductItems/ProductItems";

const Home = () => {
  const [category, setCatgory] = useState("All");
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="row">
          <div className="col-2">
            <h1>
              EYE-CAME-TECH
              <br />A New Items!
            </h1>
            <p>
              Success isn't alway about greatless. it s about consistency
              consisitent hard work gains success graterness will come
            </p>
            <button className="btn" onClick={() => navigate("/product")}>
              Explore Now &#8594;
            </button>
          </div>
          <div className="col-2">
            <img
              src="https://wallpapers.com/images/hd/hikvision-c-c-t-v-camera-collection-mc10kwme2teic2rn-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <Header category={category} setCatgory={setCatgory} />
      <ProductItems category={category} setCatgory={setCatgory} />
    </>
  );
};

export default Home;
