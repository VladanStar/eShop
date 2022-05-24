import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products Page/Products.js";
import Cart from "./Cart Page/Cart.js";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <>
      <nav>
        <div className="container d-flex justify-content-around">
          <div className="product" onClick={() => navigateTo(PAGE_PRODUCTS)}>
            Products
          </div>
          <button className="cart" onClick={() => navigateTo(PAGE_CART)}>
            <i className="fas fa-cart-plus" /> My cart{" "}
            <span>{getCartTotal()}</span>
          </button>
        </div>
      </nav>

      <div className="container-fluid mb-5">
        {page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
        {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
      </div>
    </>
  );
}

export default App;
