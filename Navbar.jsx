import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import tit from "../../assets/tit.png";
import ab1 from "../../assets/ab1.png";
import ab2 from "../../assets/ab2.png";
import jj from "../../assets/jj.png";

const Navbar = ({ setShowlogin }) => {
  const [menu, setmenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar ">
      <Link to="/">
        <img
          src={ab1}
          alt=""
          className="logo w-[600px] h-[50px] mt-5 md:w-[300px] md:h-[100px] "
        />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "home" ? " active" : ""}
          onClick={() => setmenu("home")}
        >
          Home
        </Link>

        <a
          href="#explore-menu"
          className={menu === "menu" ? "active " : ""}
          onClick={() => setmenu("menu")}
        >
          <Link to="/menu"> menu</Link>
        </a>

        <a
          href="#app-download"
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => setmenu("mobile-app")}
        >
          mobile-app
        </a>

        <a
          href="#footer"
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => setmenu("contact-us")}
        >
          contact-us
        </a>
      </ul>
      <div className=" navbar-right">
        <Link to="/search">
          <img src={assets.search_icon} alt="" />
        </Link>

        <div className=" navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />{" "}
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowlogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
