import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import SideNavbar from "./SideNavbar/SideNavbar";
import List from "./pages/List/List";
import Servies from "./pages/Servies/Servies";
import ServiesList from "./pages/ServiesList/ServiesList";
import Order from "./pages/Order/Order";
import ServiesOrder from "./pages/ServiesOrder/ServiesOrder";

function App() {
  const [count, setCount] = useState(0);
  const url = "http://localhost:5000";

  return (
    <>
      <Navbar />
      <br />
      <div className="main-container">
        <SideNavbar />
        <Routes>
          <Route path="/" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/servies" element={<Servies url={url} />} />
          <Route path="/servieslist" element={<ServiesList url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
          <Route path="/serviesorder" element={<ServiesOrder url={url} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
