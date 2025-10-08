import { createContext, useEffect, useState } from "react";
import { ProductList } from "../assets/assets";
// import { product_Items } from "../assets/assets";
import { Servies_List } from "../assets/assets";
import { service_items } from "../assets/assets";
import axios from "axios";
import { set } from "mongoose";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [serviesCart, setServiesCart] = useState({});
  const [token, setToken] = useState("");
  const [product_Items, setProductItems] = useState([]);
  const [service_items, setServiceItems] = useState([]);

  const url = "http://localhost:5000";

  // servies cart functions

  const addToServies = async (itemId) => {
    if (!serviesCart[itemId]) {
      setServiesCart((prev) => ({ ...prev, [itemId]: 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/serviescart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeToServies = async (itemId) => {
    setServiesCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/serviescart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/servies/list`);
    setServiceItems(response.data.data);
  };

  const loadserviesData = async (token) => {
    const response = await axios.post(
      url + "/api/serviescart/total",
      {},
      { headers: { token } }
    );
    setServiesCart(response.data.cartData);
  };

  useEffect(() => {
    async function loadservies() {
      await fetchList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadserviesData(localStorage.getItem("token"));
      }
    }
    loadservies();
  }, []);

  // product cart functions
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeToCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotalAmount = () => {
    let TotalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = product_Items.find((product) => product._id == item);
        if (itemInfo) {
          TotalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return TotalAmount;
  };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setToken(localStorage.getItem("token"));
  //   }
  // });

  const fetchCollection = async () => {
    const response = await axios.get(url + "/api/item/list");
    setProductItems(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/total",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchCollection();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    ProductList,
    product_Items,
    Servies_List,
    service_items,
    cartItems,
    addToCart,
    removeToCart,
    getTotalAmount,
    token,
    setToken,
    url,
    addToServies,
    serviesCart,
    removeToServies,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
