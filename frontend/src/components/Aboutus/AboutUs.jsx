import React from "react";
import styles from "./Aboutus.module.scss";

const AboutUs = () => {
  return (
    <div>
      <div className={styles.about}>
        <h2 className={styles.title}>
          Developers <span>#TeamEzoulog</span>
        </h2>
        <div className={styles.profile}>
          <div className={styles.card}>
            <img src="/images/Diouani.jpg" alt="" />
            <h3>Diouani</h3>
            <div className={styles.socials}>
              <a href="https://github.com/Diouani1">
                <img src="/images/github.svg" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/el-mokhtar-diouani-10a009124/">
                <img src="/images/linkedin.svg" alt="github" />
              </a>
              <a href="diouanijalouka@gmail.com">
                <img src="/images/envelope-solid.svg" alt="github" />
              </a>
              <a href="https://www.diouani-mokhtar.de/">
                <img src="/images/globe-solid.svg" alt="github" />
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/images/teng.jpg" alt="" />
            <h3>Teng</h3>
            <div className={styles.socials}>
              <a href="">
                <img src="/images/github.svg" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/teng-sun-27438a122/">
                <img src="/images/linkedin.svg" alt="github" />
              </a>
              <a href="mrtengsun@gmail.com">
                <img src="/images/envelope-solid.svg" alt="github" />
              </a>
              <a href="https://mrtengsun.github.io/My-Gallery/mainpage.html">
                <img src="/images/globe-solid.svg" alt="github" />
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/images/emmanuel.jpg" alt="" />
            <h3>Emmanuel</h3>
            <div className={styles.socials}>
              <a href="https://github.com/xtrap1">
                <img src="/images/github.svg" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/akwatlambeng-ekokobe-emmanuel-29119722b">
                <img src="/images/linkedin.svg" alt="github" />
              </a>
              <a href="aminkeng2009@yahoo.com">
                <img src="/images/envelope-solid.svg" alt="github" />
              </a>
              <a href="">
                <img src="/images/globe-solid.svg" alt="github" />
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/images/francis.jpg" alt="" />
            <h3>Francis</h3>
            <div className={styles.socials}>
              <a href="https://github.com/dewanstudios">
                <img src="/images/github.svg" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/francis-hoffmann-b852b8180/">
                <img src="/images/linkedin.svg" alt="github" />
              </a>
              <a href="">
                <img src="/images/envelope-solid.svg" alt="github" />
              </a>
              <a href="https://dewanstudios.netlify.app/">
                <img src="/images/globe-solid.svg" alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
