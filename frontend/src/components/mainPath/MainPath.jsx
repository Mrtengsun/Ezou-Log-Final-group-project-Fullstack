

import { Routes, Route } from "react-router-dom";
import FrontPage from "../Frontpage/FrontPage.jsx";
import CommunityPage from "../Communitypage/Community.jsx";
import NavigationBar from "../Frontpage/NavigationBar.jsx";
import AboutUs from "../Aboutus/AboutUs.jsx";
import Footer from "../Frontpage/Footer.jsx";
import styles from "../Frontpage/Frontpage.module.scss";
import LoginComponent from "../Loginprocess/LoginComponent.jsx";
import CreateAccount from "../Loginprocess/CreateAccount.jsx";
import ResetPassword from '../Loginprocess/ResetPassword.jsx'
import ForgetPassword from "../Loginprocess/ForgetPassword.jsx";
const MainPath = () => {
  return (
    <div>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<FrontPage />} />

        <Route path="/community" element={<CommunityPage />} />

        <Route path="/aboutus" element={<AboutUs />} />
       <Route path="/support" />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/forgetpass" element={<ForgetPassword/>} />
        <Route path="/passreset" element={<ResetPassword/>} />

        <Route path="/logout" />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/*" />
      </Routes>

      <Footer />
    </div>
  );
};


 export default MainPath
