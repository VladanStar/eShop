import React from "react";
import "./Cart.css";
import Payment from "./Payment";

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.id === product.id).quantity = amount;
    setCart(newCart);
  };

  return (
    <>
      <div className="title_h text-center mt-4 mb-3">
        <h1>Your Cart</h1>
        <div className="d-flex justify-content-center">
          <div className="underline"> </div>
        </div>
      </div>

      <div className="container-fluid Cart_table mt-5 text-center">
        <div className="row table_title mb-3">
          <div className="col-lg-3">
            <h2>Products</h2>
          </div>
          <div className="col-lg-3">
            <h2>Product Name</h2>
          </div>
          <div className="col-lg-2">
            <h2>Price</h2>
          </div>
          <div className="col-lg-2">
            <h2>Quantity</h2>
          </div>
          <div className="col-lg-2">
            <h2>Remove</h2>
          </div>
        </div>

        {cart.map((product) => {
          const { image, title, price, quantity, id } = product;
          return (
            <>
              <div key={id} className="row mb-2 cart_Item">
                <div className="col-lg-3 col-sm-12 col-12">
                  <img src={image} alt={title} className="img-fluid" />
                </div>

                <div className="col-lg-3 col-sm-12 col-12">
                  <h3>{title}</h3>
                </div>

                <div className="col-lg-2 col-sm-12 col-12">
                  <h4>
                    {price
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                      }
                  </h4>
                </div>

                <div className="col-lg-2 col-sm-12 col-12">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(product, Number(e.target.value))
                    }
                  />
                </div>

                <div className="col-lg-2 col-sm-12 col-12">
                  <div onClick={() => removeFromCart(product)}>
                    {" "}
                    <i className="fas fa-trash-alt" />{" "}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="d-flex justify-content-end container-fluid mt-5">
        <div>
          {cart.length > 0 && (
            <div className="clear_cart text-center" onClick={clearCart}>
              Clear Cart
            </div>
          )}
          <div className="total_cost pt-2 mb-3 mt-2">
            Total Cost: ${getTotalSum()}
          </div>
          <Payment getTotalSum={getTotalSum} />
          <img
            src="master-card.png"
            alt="master card"
            className="master_card"
          />
        </div>
      </div>
    </>
  );
}
