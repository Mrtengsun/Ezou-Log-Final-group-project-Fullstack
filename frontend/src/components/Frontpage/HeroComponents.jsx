import React from "react";
import styles from "./Hero.module.scss"

const HeroComponents = () => {
  return <div className={styles.hero}><div><h1 className={styles.header}>SignUp to Secure Your Data</h1></div>
  <div><button className={styles.buttm}>Get Onboard</button></div></div>;
};

export default HeroComponents;
