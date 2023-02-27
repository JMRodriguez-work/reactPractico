import React, { useContext } from "react";
import { OrderItem } from "../components/index";
import "../styles/Orders.scss";
import AppContext from "../context/AppContext";

const Orders = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title">My orders</h1>
        <div className="Orders-content">
          {cart.map(product => {
            <OrderItem key={`Order-item: ${product.id}`} product={product} />
          })}
        </div>
      </div>
    </div>
  );
};

export { Orders };
