import React from "react";
import Navbar from "../navabar/Navbar";
import Styles from "./roterdata.module.css";
import Homedata from "./Homedata";
const Commercial = () => {
  return (
    <section className={Styles.commercialBlock}>
      <Navbar />
      <div className={Styles.buyerContnt}>
        <h1>Commercial Property for Sale & Rent in Bengaluru</h1>
        <p>Yahan Search Khatam Karo</p>
      </div>
      <Homedata />
    </section>
  );
};

export default Commercial;
