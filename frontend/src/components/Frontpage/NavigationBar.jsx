import React, { useContext, useState } from "react";
import styles from "./Navigation.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { CreateaccountCTX } from "../contexts/CreateaccountCTX";
import Darkmode from "./DarkMode/DarkMode";

const NavigationBar = () => {
  const { user } = useContext(CreateaccountCTX);

  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__content}>
        <div>
          <span className={styles.logo}>EZOU</span>
          <br />
          <span className={styles.logo}>LOG</span>
        </div>
        <div>
          <ul
            className={`${styles.list} ${menuOpen ? styles[`list--open`] : {}}`}
          >
            <li className={styles.list__items}>
              <NavLink className={styles.link} to="/">
                Home
              </NavLink>
            </li>
            <li className={styles.list__items}>
              <NavLink to="/community">Community</NavLink>
            </li>
            <li className={styles.list__items}>
              <NavLink to="/aboutus">About us</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Darkmode />

          <div>
            {!user ? (
              /* //login in button will display when user is not log in */
              <button className={styles.loginbutton}>
                <NavLink to="/login">Login</NavLink>
              </button>
            ) : (
              /* logout and avater will display when user is log in  */
              <div className={styles.avatar__logout}>
                <img
                  src="/images/Neytiri_Profilbild.webp"
                  alt=""
                  className={styles.avatar}
                />
                <button className={styles.loginbutton}>LogOut</button>
              </div>
            )}
          </div>

          <button className={styles.__open} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
