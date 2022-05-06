import React from "react";
import Navbar from "../navabar/Navbar";
import Styles from "./roterdata.module.css";
import Homedata from "./Homedata";
const Rent = () => {
  return (
    <section className={Styles.rentBlock}>
      <Navbar />
      <div className={Styles.buyerContnt}>
        <h1>Properties for rent in Bengaluru</h1>
        <p>Yahan Search Khatam Karo</p>
      </div>
      <Homedata />
    </section>
  );
};

export default Rent;
