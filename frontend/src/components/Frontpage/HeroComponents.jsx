import React, { useContext } from "react";
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";
import { CreateaccountCTX } from "../contexts/CreateaccountCTX";

const HeroComponents = () => {
  const { user } = useContext(CreateaccountCTX);
  return (
    <div className={styles.hero}>
      <div>
        {!user ? (
          <h1 className={styles.header}>SignUp to Secure Your Data</h1>
        ) : (
          <h1 className={styles.header}>
            Uploads and Secure your Data with Us
          </h1>
        )}
      </div>
      <div>
        {!user ? (
          <button className={styles.buttm}>
            <Link to="/register">Get Onbord</Link>
          </button>
        ) : (
          <button className={styles.buttm}>
            <Link to="/uploads">Upload Data</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroComponents;
