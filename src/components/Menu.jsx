import React from "react";
import { Link } from "react-router-dom";
import '../styles/Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="orders" className="title">
            My orders
          </Link>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
