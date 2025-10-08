import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { StoreContext } from "../context/StorageContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
  const [current, setCurrent] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { url, token, setToken } = useContext(StoreContext);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  // checl
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (current === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
      alert("Login successfully");
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{current}</h2>
          <i class="fa-solid fa-xmark" onClick={() => setShowLogin(false)}></i>
        </div>
        <div className="login-popup-input">
          {current === "Login" ? (
            <></>
          ) : (
            <input
              onChange={onChangeHandler}
              value={data.name}
              name="name"
              type="text"
              placeholder="Your name"
            />
          )}

          <input
            onChange={onChangeHandler}
            value={data.email}
            name="email"
            type="email"
            placeholder="Your email"
          />
          <input
            onChange={onChangeHandler}
            value={data.password}
            name="password"
            type="password"
            placeholder="Your password"
          />
        </div>
        <button type="submit">
          {current === "Sign Up" ? "Create account" : "Login"}
        </button>
        {current === "Login" ? (
          <p>
            Create new account
            <span onClick={() => setCurrent("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have a account?
            <span onClick={() => setCurrent("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
