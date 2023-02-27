import React from "react";
import "../styles/MenuMobile.scss";
import iconClose from "../assets/icons/icon_close.png";

const MenuMobile = ({ setToggleMenuMobile }) => {
  return (
    <div className="mobile-menu">
      <img
        src={iconClose}
        alt="close menu"
        className="close"
        onClick={() => setToggleMenuMobile(false)}
      />
      <div>
        <ul>
          <li>
            <a href="/">CATEGORIES</a>
          </li>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furniture</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My Account</a>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <a href="/" className="email">
            jmartinrodriguez@example.com
          </a>
        </li>
        <li>
          <a href="/" className="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export { MenuMobile };
