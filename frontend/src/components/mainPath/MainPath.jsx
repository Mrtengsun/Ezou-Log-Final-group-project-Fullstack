import FrontPage from "../Frontpage/FrontPage.jsx";
import NavigationBar from "../Frontpage/NavigationBar.jsx";
import AboutUs from "../Aboutus/AboutUs.jsx";
import Footer from "../Frontpage/Footer.jsx";
import Login from "../Loginprocess/LoginComponent.jsx";
import CreateAccount from "../Loginprocess/CreateAccount.jsx";
import styles from "../Frontpage/Frontpage.module.scss";

import { Routes, Route } from "react-router-dom";
import LoginComponent from "../Loginprocess/LoginComponent.jsx";

const MainPath = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <NavigationBar />
      </div>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/community" />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/support" />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/logout" />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/*" />
      </Routes>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default MainPath;
