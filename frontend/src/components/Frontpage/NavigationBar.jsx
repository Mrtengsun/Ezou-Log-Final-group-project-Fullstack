import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const NavigationBar = () => {
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
            <li className={styles.list__items}>Home</li>
            <li className={styles.list__items}>Community</li>
            <li className={styles.list__items}>About us</li>
          </ul>
        </div>
        <div>
          {/* <div className={styles.switch}>
            <input id={styles.checkbox1} type="checkbox" />
            <label for="checkbox1"></label>
          </div> */}

          <div>
            {/* //login in button will display when user is not log in */}
            {/* <button className={styles.loginbutton}>Login</button> */}
            {/* logout and avater will display when user is log in  */}
            <div className={styles.avatar__logout}>
              <img
                src="/images/Neytiri_Profilbild.webp"
                alt=""
                className={styles.avatar}
              />
              <button className={styles.loginbutton}>LogOut</button>
            </div>
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
