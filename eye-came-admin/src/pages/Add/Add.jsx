import React, { useEffect, useState } from "react";
import "./Add.css";
import axios from "axios";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const onChandeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/item/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "cctv",
      });
      setImage(false);
      alert(response.data.message);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://www.freeiconspng.com/uploads/upload-icon-30.png"
              }
              alt=""
            />
          </label>

          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name="name"
            id="image"
            hidden
            requried
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChandeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChandeHandler}
            value={data.description}
            type="text"
            name="description"
            placeholder="Write content here"
            id=""
            rows="10"
            required
          />
        </div>
        <div className="add-category-price">
          <div className="add-category">
            <p>Product category</p>
            <select onChange={onChandeHandler} name="category">
              <option value="cctv">cctv</option>
              <option value="Inverter Battery">Inverter Battery</option>
              <option value="RO Water Purifier">RO Water Purifier</option>
              <option value="Dish Antenna">Dish Antenna</option>
              <option value="Solar">Solar</option>
              <option value="Air Conditioner">Air Conditioner</option>
              <option value="Refrigerator">Refrigerator</option>
              <option value="Laptop & Computer">Laptop & Computer</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChandeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="0.00"
            />
          </div>
        </div>
        <button type="submit" className="btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
