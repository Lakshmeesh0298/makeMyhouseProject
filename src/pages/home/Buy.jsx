import React from "react";
import Navbar from "../navabar/Navbar";
import Styles from "./roterdata.module.css";
import Homedata from "./Homedata";
const Buy = () => {
  return (
    <section className={Styles.buyerBlock}>
      <Navbar />
      <div className={Styles.buyerContnt}>
        <h1>Properties to buy in Bengaluru</h1>
        <p>Yahan Search Khatam Karo</p>
      </div>
      <Homedata />
    </section>
  );
};

export default Buy;
