import React from "react";
import Styles from "./roterdata.module.css";
import { Outlet } from "react-router-dom";
import Homedata from "./Homedata";
import Navbar from "../navabar/Navbar";
const MainHomeData = () => {
  return (
    <section className={Styles.mainHomeData}>
      <aside>
        <Navbar />
        <Homedata />
      </aside>
    </section>
  );
};

export default MainHomeData;
