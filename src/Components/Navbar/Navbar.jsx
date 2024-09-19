import React from "react";
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../../Routes";

export const Navbar = () => {
  return (
    <header>
      <div className="main">
        <NavLink to={ROUTES.HOME}>Logo</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT}>About</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.PRODUCTS}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
