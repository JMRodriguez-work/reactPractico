import React from "react";
import { ProductInfo } from "../components";
import '../styles/ProductDetail.scss';
import iconClose from '../assets/icons/icon_close.png';

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src={iconClose} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export { ProductDetail };
