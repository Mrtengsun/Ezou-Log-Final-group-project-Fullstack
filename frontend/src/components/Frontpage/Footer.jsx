import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa5 } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  const d = new Date();
  return (
    <div className="footer">
      <div>
        <div class="flex social-btns">
          <a className="app-btn blu flex vert" href="http:apple.com">
            <img src="/images/apple.svg" alt="apple icon" />
            <p>
              Available on the <br /> <span class="big-txt">App Store</span>
            </p>
          </a>

          <a class="app-btn blu flex vert" href="http:google.com">
            <img className="img_google_desktop" src="/images/google-play.svg" alt="google play icon" />
            <p>
              Get it on <br /> <span class="big-txt">Google Play</span>
            </p>
          </a>

          <a class="app-btn blu flex vert" href="http:alphorm.com">
            <img className="img_desktop" src="/images/desktop-solid.svg" alt="desktop app icon" />

            <p>
              Application <br /> <span class="big-txt">Desktop</span>
            </p>
          </a>
        </div>
      </div>
      <div>
        <h5>Copyright Reserve by Ezou Log {d.getFullYear()}</h5>
      </div>
    </div>
  );
};

export default Footer;
