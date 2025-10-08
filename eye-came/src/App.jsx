import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LoginPopup from "./LoginPopup/LoginPopup";
import Shopping from "./components/Shopping/Shopping";
import Address from "./components/Address/Address";
import Footer from "./Footer/Footer";
import Order from "./components/Order/Order";
import ServiesOrder from "./components/ServiesOrder/ServiesOrder";
import Serviesconform from "./components/Serviesconform/Serviesconform";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="app">
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/address" element={<Address />} />
          <Route path="/order" element={<Order />} />
          <Route path="/serviesorder" element={<ServiesOrder />} />
          <Route path="/serviesconform" element={<Serviesconform />} />
        </Routes>
        <div style={{ marginTop: "160px" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
