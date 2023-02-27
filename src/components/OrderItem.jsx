import React, { useContext } from "react";
import '../styles/OrderItem.scss';
import iconClose from '../assets/icons/icon_close.png'
import AppContext from "../context/AppContext";

const OrderItem = ({ product }) => {

  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (id) => {
    removeFromCart(id);
  }

  return (
    <div className="OrderItem">
      <figure>
        <img
          src={product.images[0]}
          alt={product.title}
        />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={iconClose} alt="close" onClick={() => handleRemove(product.id)} />
    </div>
  );
};

export { OrderItem };
