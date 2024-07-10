import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import njn from "../../assets/njn.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={njn} alt="" />
          <p>
            "Experience culinary delight with our diverse menu. From savory
            starters to mouthwatering mains, indulge in rich flavors and vibrant
            textures. Join us to elevate your dining experience."
          </p>
          <div className="footer-social-icons flex ">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <a href="#hom">
              {" "}
              <li>Home</li>{" "}
            </a>
            <li>About us</li>
            <li>Delivary</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9844367866</li>
            <li> bhojanalaya@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <p className="footer-copyright">
        {" "}
        copyright 2024 @ bhojanalaya.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
