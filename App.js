import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/Loginpopup/LoginPopup";
import Search from "./pages/Search/Search";
import Menucard from "./pages/Menucard/Menucard";

const App = () => {
  const [showLogin, setShowlogin] = useState(false);
  return (
    <>
      {showLogin ? (
        <LoginPopup setShowlogin={setShowlogin}></LoginPopup>
      ) : (
        <></>
      )}
      <div className="app">
        <Navbar setShowlogin={setShowlogin}></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/menu" element={<Menucard></Menucard>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
          <Route path="/Order" element={<PlaceOrder></PlaceOrder>}></Route>
        </Routes>

        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
