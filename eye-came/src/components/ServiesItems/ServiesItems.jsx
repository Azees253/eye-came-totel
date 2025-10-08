import React, { useContext } from "react";
import { StoreContext } from "../../context/StorageContext";
import ServiesDetails from "../ServiesDetails/ServiesDetails";

const ServiesItems = ({ category }) => {
  const { service_items, url, addToServiesCart } = useContext(StoreContext);
  return (
    <div>
      {service_items.map((item, index) => {
        if (category === "All" || category === item.category) {
          return (
            <div className="col-4">
              <ServiesDetails
                image={url + "/images/" + item.image}
                title={item.name}
                servies={item.servies}
                rating={item.rating1}
                desc={item.description}
                id={item._id}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ServiesItems;
