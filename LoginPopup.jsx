import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowlogin }) => {
  const [currstate, setcurrstate] = useState("signup");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => setShowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currstate === "login" ? (
            <></>
          ) : (
            <input type=" text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{currstate === "signup" ? "create account" : "login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>

        {currstate === "login" ? (
          <p>
            Create a new account?
            <span onClick={() => setcurrstate("signup")}>click here</span>
          </p>
        ) : (
          <p>
            already have an account?
            <span onClick={() => setcurrstate("login")}>login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
