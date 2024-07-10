import { createContext, useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  function addToCart(itemId) {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  }

  function removeFromCart(itemId) {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }
  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalAmount += iteminfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItem,
    setCartItem,
    getTotalCartAmount,
    menu_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
