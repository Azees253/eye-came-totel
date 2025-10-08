import React from "react";
import "./Header.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StorageContext";

const Header = ({ category, setCatgory }) => {
  const { ProductList } = useContext(StoreContext);

  return (
    <div className="headers-container">
      {ProductList.map((item, index) => {
        return (
          <div
            key={index}
            className="header-contain"
            onClick={() =>
              setCatgory((e) =>
                e === item.product_name ? "All" : item.product_name
              )
            }
          >
            <img
              src={item.Image}
              alt=""
              className={category === item.product_name ? "active" : ""}
            />
            <p>{item.product_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
