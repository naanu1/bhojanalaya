import React, { useState, useContext } from "react";
import "./Search.css";
import { StoreContext } from "../../context/StoreContext";

const Search = () => {
  const { food_list, menu_list, cartItem, addToCart, removeFromCart } =
    useContext(StoreContext);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const lowercasedQuery = value.toLowerCase();

    const filteredFoodList = food_list.filter((item) =>
      item.name?.toLowerCase().includes(lowercasedQuery)
    );

    const filteredMenuList = menu_list.filter((item) =>
      item.name?.toLowerCase().includes(lowercasedQuery)
    );

    setResults([...filteredFoodList, ...filteredMenuList]);
    console.log(results);
  };

  return (
    <div className="search-container ">
      <input
        className="search-input text-black"
        type="text"
        placeholder="Search here"
        value={query}
        onChange={handleSearch}
      />
      <div className="search-results">
        {results.map((item) => (
          <div key={item._id} className="search-item">
            <img
              src={item.image}
              alt={item.name}
              className="search-item-image"
            />
            <div className="search-item-details">
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <p>Rs {item.price}</p>
              <div className="cart-controls">
                {
                  <p
                    className="cart-button g"
                    onClick={() => addToCart(item._id)}
                  >
                    +
                  </p>
                }
                <p className="cart-count">{cartItem[item._id] || 0}</p>
                {cartItem[item._id] > 0 && (
                  <p
                    className="cart-button r"
                    onClick={() => removeFromCart(item._id)}
                  >
                    -
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
