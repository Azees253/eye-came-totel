import React from "react";
import "./ServiesList.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ServiesList = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/servies/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      alert("Failed to fetch items");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeId = async (itemId) => {
    const response = await axios.post(`${url}/api/servies/remove`, {
      id: itemId,
    });
    await fetchList();
    if (response.data.success) {
      alert("Item removed successfully");
    } else {
      alert("Failed to remove item");
    }
  };

  return (
    <div className="list-add flex-col">
      <p>All Servies List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.servies}</p>
              <p className="cursor" onClick={() => removeId(item._id)}>
                <i class="fa-solid fa-trash"></i>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiesList;
