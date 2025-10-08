import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNavbar.css";

const SideNavbar = () => {
  return (
    <div className="side-navbar">
      <div className="sidebar-options">
        <NavLink to="/" className="sidebar-option">
          <i class="fa-solid fa-circle-plus"></i>
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <i class="fa-solid fa-circle-check"></i>
          <p>List Items</p>
        </NavLink>
        <NavLink to="/servies" className="sidebar-option">
          <i class="fa-solid fa-circle-plus"></i>
          <p>Servies Items</p>
        </NavLink>
        <NavLink to="/servieslist" className="sidebar-option">
          <i class="fa-solid fa-circle-check"></i>
          <p>ServiesList Items</p>
        </NavLink>

        <NavLink to="/order" className="sidebar-option">
          <i class="fa-solid fa-circle-check"></i>
          <p>Order Items</p>
        </NavLink>
        <NavLink to="/serviesorder" className="sidebar-option">
          <i class="fa-solid fa-circle-check"></i>
          <p>ServiesOrder Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideNavbar;
