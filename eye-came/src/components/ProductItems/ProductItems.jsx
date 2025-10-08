import React, { useContext } from "react";
import "./ProductItems.css";
import ProductCollection from "../ProductCollection/ProductCollection";
import { StoreContext } from "../../context/StorageContext.jsx";

const ProductItems = ({ category }) => {
  const { product_Items, url } = useContext(StoreContext);
  function handleClick(e) {
    const list = document.querySelectorAll("#row > div");
    const searchVal = e.target.value.toUpperCase();
    list.forEach((el) => {
      el.style.display = el
        .querySelector("h4")
        .textContent.toUpperCase()
        .includes(searchVal)
        ? "block"
        : "none";
    });
  }
  return (
    <div className="small-container">
      <div className="row row-2">
        <h2 style={{ color: "rgba(6, 6, 122, 0.774)" }}>All Products</h2>
        <div className="input">
          <input
            type="text"
            id="search"
            onKeyUp={handleClick}
            placeholder="Filter"
          />
          <i class="fa-solid fa-search"></i>
        </div>
      </div>

      <div className="row" id="row">
        {product_Items.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <div className="col-4">
                <ProductCollection
                  image={url + "/images/" + item.image}
                  title={item.name}
                  price={item.price}
                  rating={item.rating1}
                  desc={item.description}
                  id={item._id}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductItems;
