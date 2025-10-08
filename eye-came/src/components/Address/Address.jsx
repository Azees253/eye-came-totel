import React from "react";
import "./Address.css";
import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StorageContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Verfiy from "../Verfiy/Verfiy";

const Address = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    zipcode: "",
    contry: "",
    phone: "",
  });
  const { cartItems, getTotalAmount, product_Items, token, url } =
    useContext(StoreContext);

  const [loading, setLoading] = useState(false);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];
    product_Items.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    try {
      let orderData = {
        items: orderItems,
        amount: getTotalAmount(),
        address: data,
        userId: token,
      };

      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });

      if (response.data.success) {
        alert("Order placed Succesfully");
        setLoading(true);
        setTimeout(() => {
          navigate("/order");
        }, 2000);
      } else {
        alert("Error" + response.data.message);
      }
    } catch (error) {
      console.log("Error", error);
      alert("Error placing order");
    }
  };

  return (
    <>
      {loading ? (
        <Verfiy />
      ) : (
        <div>
          <form onSubmit={placeOrder} className="place-order">
            <div className="place-order-left">
              <p className="titles">Delivery Information</p>
              <div className="multi-field">
                <input
                  onChange={onChangeHandler}
                  value={data.firstName}
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  required
                />
                <input
                  onChange={onChangeHandler}
                  value={data.lastName}
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  required
                />
              </div>
              <input
                onChange={onChangeHandler}
                value={data.email}
                name="email"
                type="text"
                placeholder="Email Address"
                required
              />
              <input
                onChange={onChangeHandler}
                value={data.address}
                name="address"
                type="text"
                placeholder="Address"
                required
              />
              <div className="multi-field">
                <input
                  onChange={onChangeHandler}
                  value={data.city}
                  name="city"
                  type="text"
                  placeholder="city"
                  required
                />
                <input
                  onChange={onChangeHandler}
                  value={data.state}
                  name="state"
                  type="text"
                  placeholder="state"
                  required
                />
              </div>
              <div className="multi-field">
                <input
                  onChange={onChangeHandler}
                  value={data.zipcode}
                  name="zipcode"
                  type="text"
                  placeholder="Zip code"
                  required
                />
                <input
                  onChange={onChangeHandler}
                  value={data.contry}
                  name="contry"
                  type="text"
                  placeholder="contry"
                  required
                />
              </div>
              <input
                onChange={onChangeHandler}
                value={data.phone}
                name="phone"
                type="text"
                placeholder="Phone"
                required
              />
              <button type="submit">Place Order</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Address;
