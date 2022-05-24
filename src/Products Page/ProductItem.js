import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function ProductItem({ product, addToCart }) {
  const { title, image, price, description, id } = product;

  const [readMore, setReadMore] = useState(true);

  const info = readMore ? description.slice(0, 120) : description;

  const read = () => {
    setReadMore(!readMore);
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.warn("Item Added to the cart !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  return (
    <div key={id} className="card shadow text-center mb-1 product_container">
      <div className="d-flex justify-content-center card-img pt-3 img_wrap">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>
          {info}
          <button className="btn text-primary" onClick={read}>
            <span>{readMore ? "....Read More" : "Read Less"}</span>
          </button>
        </p>

        <h4>${price}</h4>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn addToCartBtn" onClick={handleAddToCart}>
          Add to Cart <i className="fas fa-cart-plus" />
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
