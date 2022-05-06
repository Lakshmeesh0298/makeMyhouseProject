import React, { useContext } from "react";
import Styles from "./navbar.module.css";
import { FaHeart, FaBars } from "react-icons/fa";
import { sidebarContext } from "../../apis/context/SideBarContext";
const Menu = () => {
  let { setToggle } = useContext(sidebarContext);
  return (
    <div className={Styles.menuBlock}>
      <ul>
        <li>
          <a href="#">Download App</a>
        </li>
        <li>
          <a href="#">
            List Property <span>free</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FaHeart />
            </span>
            <span>Saved</span>
          </a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li className={Styles.dashbord}>
          <a href="#">DashBoard</a>
        </li>
        <li>
          <button
            onClick={e => {
              e.stopPropagation();
              setToggle(true);
            }}
          >
            <FaBars />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
