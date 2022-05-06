import React from "react";
import Navbar from "../navabar/Navbar";
import Styles from "./roterdata.module.css";
import Homedata from "./Homedata";
const Plotes = () => {
  return (
    <section className={Styles.plotesBlock}>
      <Navbar />
      <div className={Styles.buyerContnt}>
        <h1>Plots for sale in Bengaluru</h1>
        <p>Yahan Search Khatam Karo</p>
      </div>
      <Homedata />
    </section>
  );
};

export default Plotes;
