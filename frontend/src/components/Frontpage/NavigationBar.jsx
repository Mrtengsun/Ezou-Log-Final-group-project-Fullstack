import React, { useContext, useState } from "react";
import styles from "./Navigation.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { CreateaccountCTX } from "../contexts/CreateaccountCTX";
import Darkmode from "./DarkMode/DarkMode";

const NavigationBar = () => {
  const { user, navigate } = useContext(CreateaccountCTX);


  const { user,navigate,setUser } = useContext(CreateaccountCTX);


 const logOut = ()=>{
  localStorage.removeItem("user")
  localStorage.removeItem("token")
  setUser(null)
  navigate("/")
 }



  const [menuOpen, setMenuOpen] = useState(false);
  const imageURL= user.imgProfile? `http://localhost:5000/api/user/profile-picture/${user._id}`:`/images/Neytiri_Profilbild.webp`;

  const logo = () => {
    navigate("/");
  };
  const menuToggler = () => setMenuOpen((p) => !p);
    const community = user? "/community":"/login"
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__content}>
        <div>
          {/* <span className={styles.logo}>EZOU</span>
          <br />
          <span className={styles.logo}>LOG</span> */}
          {/* <img onClick={logo} src="/images/logo.png" alt="logo" /> */}
        </div>
        <div>
          <ul
            className={`${styles.list} ${menuOpen ? styles[`list--open`] : {}}`}
          >
            <li className={styles.list__items}>
              <NavLink className={styles.link} to="/homepage">
                Home
              </NavLink>
            </li>
            <li className={styles.list__items}>
              <NavLink to={community}>Community</NavLink>
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
                  src={imageURL}
                  alt=""
                  className={styles.avatar}
                />
                <button className={styles.loginbutton} onClick={logOut}>
                  LogOut
                </button>
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
