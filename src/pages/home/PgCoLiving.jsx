import React from "react";
import Navbar from "../navabar/Navbar";
import Styles from "./roterdata.module.css";
import Homedata from "./Homedata";
const PgCoLiving = () => {
  return (
    <section className={Styles.pgcolivinBlock}>
      <Navbar />
      <div className={Styles.buyerContnt}>
        <h1>PG/Co-Living in Bengaluru</h1>
        <p>Yahan Search Khatam Karo</p>
      </div>
      <Homedata />
    </section>
  );
};

export default PgCoLiving;
