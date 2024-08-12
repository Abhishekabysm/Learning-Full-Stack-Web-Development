import React from "react";
// import Navbar from "./components/Navbar";
import Footer from "./Footer";
function Navbar(props) {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>Graphics Cards</li>
        <li>Gaming Cpu</li>
        <li>About Us</li>
      </ul>
      <Footer />
    </div>
  );
}

export default Navbar;
