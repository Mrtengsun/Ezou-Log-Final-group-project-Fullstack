import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineCloseSquare} from "react-icons/ai";

const NavigationBar = () => {
   const [menuOpen,setMenuOpen] = useState(false);

   const menuToggler = ()=> setMenuOpen((p) => !p);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__content}>
      <div >
        <span className={styles.logo}>EZOU</span>
        <br />
        <span className={styles.logo}>LOG</span>
      </div>
      <div>
        <ul className={`${styles.list} ${menuOpen ? styles[`list--open`] : {}}`} >
          <li className={styles.list__items}>Home</li>
          <li className={styles.list__items}>Community</li>
          <li className={styles.list__items}>About us</li>
        </ul>
      </div>
      <div>
        <button className={styles.__open} onClick={menuToggler}>{!menuOpen ?<BiMenuAltRight/> : <AiOutlineCloseSquare/>}</button>
      </div>
      </div>
    </nav>
  );
};

export default NavigationBar;