import React, { useContext } from "react";
import "../styles/ProductItem.scss";
import AppContext from "../context/AppContext";
import iconAdd from "../assets/icons/bt_add_to_cart.svg";
import addedToCartImage from '../assets/icons/bt_added_to_cart.svg';

const ProductItem = ({ item }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleCart = (product) => {
    addToCart(product);
  }

  return (
    <div className="ProductItem">
      <img
        src={item.images[0]}
        alt={item.title}
        loading='lazy'
      />
      <div className="product-info">
        <div>
          <p>${item.price}</p>
          <p>{item.title}</p>
        </div>
        <figure onClick={() => handleCart(item)} >
          {state.cart.includes(item) ? <img className="disabled add-to-cart-btn" src={addedToCartImage} alt="added to cart" /> : 
          <img className="add-to-cart-btn pointer" src={iconAdd} alt="add to cart" />
          }
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
