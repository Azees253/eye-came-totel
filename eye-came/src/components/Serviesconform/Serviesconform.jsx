import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StorageContext";

const Serviesconform = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/serviesorder/userrequest",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h3>My Orders</h3>
      <div className="ordering">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <>
                        <img src={url + "/images/" + item.image} />
                        <p>{item.name + " x " + item.quantity}</p>
                      </>
                    );
                  } else {
                    return item.name + " x " + item.quantity;
                  }
                })}
              </p>
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return (
                    <>
                      <p>₹{item.servies}</p>
                    </>
                  );
                }
              })}

              <p>Items:{order.items.length}</p>
              <div className="address-container">
                <div className="address-name">
                  <p>{order.address.firstName}</p>
                  <p>{order.address.lastName}</p>
                </div>
                <div>
                  <p>{order.address.address}</p>
                  <p>
                    {order.address.city}-{order.address.zipcode}
                  </p>
                  <p>Phone:{order.address.phone}</p>
                </div>
              </div>
              <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button>Track Orders</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Serviesconform;
