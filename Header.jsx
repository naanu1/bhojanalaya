import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className=" header-contents">
        <h2 className=" md:text-6xl  abc">Order Your Favourite Food here</h2>
        <p>
          "Indulge in a world of flavors with our food delivery app. From savory
          classics to exotic cuisines, satisfy every craving effortlessly.
          Browse, customize, and order with ease for speedy delivery to your
          doorstep. Elevate your dining experience and let us bring the feast to
          you. Download now and embark on a culinary adventure!"
        </p>
        <Link to="/menu">
          <button className=" hover:bg-yellow-200 "> view Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
