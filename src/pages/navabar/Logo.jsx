import React from "react";
import Styles from "./navbar.module.css";
import { FaHome } from "react-icons/fa";
const Logo = () => {
  return (
    <div className={Styles.logoBlock}>
      <a href="#">
        <span>
          <FaHome />
        </span>
        <span>MakeMyHome</span>
      </a>
    </div>
  );
};

export default Logo;
