import React from "react";
import { useFlutterwave } from "flutterwave-react-v3";

export default function App({ getTotalSum }) {
  const config = {
    public_key: "FLWPUBK-b21d0e555e44f8173a7ccd6681e6d370-X",
    tx_ref: Date.now(),
    amount: getTotalSum(),
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "VLADAN CUPRIC",
    },
    customizations: {
      title: "Godswill shop",
      description: "Payment for items in cart",
      logo:
        "https://e7.pngegg.com/pngimages/1020/137/png-clipart-bag-illustration-logo-shopping-logo-design-purple-other.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button
        className="btn btn-danger"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
            },
            onClose: () => {},
          });
        }}
      >
        Make Payment
      </button>
    </div>
  );
}
