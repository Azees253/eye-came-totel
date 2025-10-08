import React, { useContext } from "react";
import "./ServiesHeader.css";
import { StoreContext } from "../../context/StorageContext";

const ServiesHeader = ({ category, setCatgory }) => {
  const { Servies_List } = useContext(StoreContext);
  return (
    <div className="headers-container">
      {Servies_List.map((item, index) => {
        return (
          <div
            key={index}
            className="header-contain"
            onClick={() =>
              setCatgory((e) =>
                e === item.servies_name ? "All" : item.servies_name
              )
            }
          >
            <img
              src={item.Image}
              alt=""
              className={category === item.servies_name ? "active" : ""}
            />
            <p>{item.servies_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServiesHeader;
