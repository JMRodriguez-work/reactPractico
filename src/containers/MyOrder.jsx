import React, { useContext } from "react";
import { OrderItem } from "../components";
import "../styles/MyOrder.scss";
import iconArrow from "../assets/icons/flechita.svg";
import AppContext from "../context/AppContext";

const MyOrder = ({ setToggleOrders }) => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={iconArrow} alt="arrow" onClick={() => setToggleOrders(false)} />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map((item) => (
          <OrderItem product={item} key={`orderItem: ${item.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${cart.reduce((prev, curr) => prev + curr.price, 0)}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export { MyOrder };
