import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

import "./menu.css";
import ButtonLink from "../ButtonLink";

const Menu = ({ buttonContent, buttonLink }: any) => {
  return (
    <nav className="menu">
      <Link to="/">
        <ButtonLink className="">
          <img className="logo" src={Logo} alt="logo" />
        </ButtonLink>
      </Link>

      <Link to={buttonLink}>
        <ButtonLink className="button_link">{buttonContent}</ButtonLink>
      </Link>
    </nav>
  );
};

export default Menu;
