import React, { useContext } from "react";
import styles from "./Card.module.scss";
import { CreateaccountCTX } from "../contexts/CreateaccountCTX.jsx";
import QRCode from "react-qr-code";

const CardComponents = () => {
  const{user} = useContext(CreateaccountCTX)
  console.log(user);

  const userName = user? `${user.firstName} ${user.lastName}`:"Muller Man" ;
  const userCardid = user? `${user.cardId}`:"0000 0000 0000 0000" ;
  const userQrcode = user? `${user._id}` : "Euzolog";
  
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.innercard}>
        <div className={styles.front}>
          {/* <img  src="/images/qrCode.png" alt="" /> */}
          <div style={{ height: "auto", margin: "0 auto", maxWidth: 250, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={userQrcode}
    viewBox={`0 0 256 256`}
    />
</div>
          <div>
            <h4>UserName</h4>
            <h3>{userName}</h3>
            <h4>Card Number</h4>
            <h3>{userCardid}</h3>
          </div>
        </div>
        <div className={styles.back}>
          <img src="/images/cardback.png" alt="cardback" />
          <h3>
            Sign-Up Once <br /> Log-In Forever
          </h3>
          <img
                  src="/images/Neytiri_Profilbild.webp"
                  alt=""
                  className={styles.avatar}
                />
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardComponents;
