import { Routes, Route } from "react-router-dom";
import FrontPage from "../Frontpage/FrontPage.jsx";
import CommunityPage from "../Communitypage/Community.jsx";
import NavigationBar from "../Frontpage/NavigationBar.jsx";
import AboutUs from "../Aboutus/AboutUs.jsx";
import CreateAccount from "../Loginprocess/CreateAccount.jsx";
import Footer from "../Frontpage/Footer.jsx";
import LoginComponent from "../Loginprocess/LoginComponent.jsx";

import ResetPassword from "../Loginprocess/ResetPassword.jsx";
import ForgetPassword from "../Loginprocess/ForgetPassword.jsx";
import ChatBot from "../Chat/ChatBot.jsx";
import OtpInput from "../Loginprocess/OtpInput.jsx";
import AddEmail from "../Loginprocess/AddEmail.jsx";

const MainPath = () => {
  return (
    <div>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<FrontPage />} />

        <Route path="/community" element={<CommunityPage />} />

        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="/support" element={<ChatBot />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/Resetpassword" element={<ResetPassword />} />

        <Route path="/otpinput" element={<OtpInput/>} />
        <Route path="/AddEmail" element={<AddEmail/>} />

        <Route path="/Recovered" element={<Recovered />} />

        <Route path="/register" element={<CreateAccount />} />

        <Route path="/logout" />
        <Route path="/*" />
      </Routes>
      <ChatBot />

      <Footer />
    </div>
  );
};

export default MainPath;
