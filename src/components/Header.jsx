import React, { useState, useLayoutEffect, useContext } from "react";
import iconMenu from "../assets/icons/icon_menu.svg";
import logoYardSale from "../assets/logos/logo_yard_sale.svg";
import iconShoppingCart from "../assets/icons/icon_shopping_cart.svg";
import "../styles/Header.scss";
import { Menu, MenuMobile } from "./index";
import AppContext from "../context/AppContext";
import { MyOrder } from "../containers";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
    if (toggleOrders) {
      setToggleOrders(false);
    }
  };

  const handleToggleOrders = () => {
    setToggleOrders((prevState) => !prevState);
    if (toggle) {
      setToggle(false);
    }
  };

  const handleToggleMobile = () => {
    setToggleMenuMobile((prevState) => !prevState);
  };

  /*ocultar el menú cuando ya no se puede ver el contenido para cerrarlo */
  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 730) {
        setToggle(false);
        setToggleMenuMobile(false);
      }
    });
  });

  const {
    state: { cart },
  } = useContext(AppContext);



  return (
    <nav>
      <img
        src={iconMenu}
        alt="menu"
        className="menu"
        onClick={handleToggleMobile}
      />

      <div className="navbar-left">
        <img src={logoYardSale} alt="logo" className="navLogo"  />
        <ul>
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
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            jmartinrodriguez@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
            <img src={iconShoppingCart} alt="shopping cart" />
            <div>{cart.length > 9 ? `+9` : cart.length}</div>
          </li>
        </ul>
      </div>
      {!!toggle && <Menu />}
      {!!toggleOrders && <MyOrder setToggleOrders={setToggleOrders} />}
      {!!toggleMenuMobile && (
        <MenuMobile setToggleMenuMobile={setToggleMenuMobile} />
      )}
    </nav>
  );
};

export { Header };
