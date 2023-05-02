import React from "react";
import styles from "./Card.module.scss";

const CardComponents = () => {

  
  return (
    <div className={styles.card}>
      <div className={styles.innercard}>
        <div className={styles.front}>
        <img className={styles.qrcode} src="/images/qrCode.png" alt="" />
        <div>
          <h4>UserName</h4>
          <h3>Muster Muller</h3>
          <h4>Card Number</h4>
          <h3>2166 3984 30 136</h3>
          </div>
          <div className={styles.back}>back</div>
        </div>
      </div>
    </div>
  );
};

export default CardComponents;
