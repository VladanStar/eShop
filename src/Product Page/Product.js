import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Product.css";
import ProductItem from "./ProductItem";

export default function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <img src="loader.gif" alt="loader" />
      </div>
    );
  }

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.id === item.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }

    setCart(newCart);
  };

  return (
    <>
      <div className="title_h text-center mt-4 mb-3">
        <h1>Our Products</h1>
        <div className="d-flex justify-content-center">
          <div className="underline"> </div>
        </div>
      </div>

      <div className="productList">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}
