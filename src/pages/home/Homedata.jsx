import React from "react";
import Styles from "./homeblock.module.css";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Homedata = () => {
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <main className={Styles.homeDataBlock}>
        <article>
          <ul>
            <li>
              <NavLink
                style={isActive => ({
                  borderBottom: isActive ? "2px solid" : "",
                })}
                to="/"
              >
                buy
              </NavLink>
            </li>
            <li>
              <Link to="/rent">rent</Link>
            </li>
            <li className={Styles.homeDataBlockNEW}>
              <Link to="/commercial">
                COMMERCIAL <span>NEW</span>
              </Link>
            </li>
            <li>
              <Link to="/pgcoliving">PG/CO-LIVING</Link>
            </li>
            <li>
              <Link to="/plots">PLOTS</Link>
            </li>
          </ul>
          <div>
            <select name="citys" id="selectCitys">
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkotha">Kolkotha</option>
              <option value="Dehali">Dehali</option>
            </select>
            <input
              type="text"
              placeholder="Search for locality,landmark,project,or builder"
            />
            <button>
              <span>
                <FaSearch />
              </span>
              <span>Search</span>
            </button>
          </div>
        </article>
      </main>
    </section>
  );
};

export default Homedata;
