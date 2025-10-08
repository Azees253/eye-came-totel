import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfG3ANpqZ5cbotcEFr5GgyOHva7CYqWuJfzyoLzkfGhwwSnnhTP246tbMK9bZbBbf5OcY&usqp=CAU"
        alt=""
      />
      <div className="navbar-title">
        <h3>Admin</h3>
        <i className="fa-solid fa-circle-user "></i>
      </div>
    </div>
  );
};

export default Navbar;
