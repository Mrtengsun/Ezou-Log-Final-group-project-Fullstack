import { Routes, Route } from "react-router-dom";
import FrontPage from "../Frontpage/FrontPage.jsx";
import CommunityPage from "../Communitypage/Community.jsx";
import NavigationBar from "../Frontpage/NavigationBar.jsx";
import AboutUs from "../Aboutus/AboutUs.jsx";
import CreateAccount from "../Loginprocess/CreateAccount.jsx";
import Footer from "../Frontpage/Footer.jsx";
import LoginComponent from "../Loginprocess/LoginComponent.jsx";

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
        <Route path="/logout" />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/*" element={<FrontPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainPath;
