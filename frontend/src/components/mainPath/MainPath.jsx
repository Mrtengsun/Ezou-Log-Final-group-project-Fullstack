import {Routes,Route} from "react-router-dom"
import FrontPage from "../Frontpage/FrontPage.jsx";

import CommunityPage from "../Communitypage/Community.jsx";
import ResetPassword from "../Loginprocess/ResetPassword.jsx"
import NavigationBar from "../Frontpage/NavigationBar.jsx"
import AboutUs from "../Aboutus/AboutUs.jsx"
import Footer from "../Frontpage/Footer.jsx"
import ForgetPassword  from "../Loginprocess/ForgetPassword.jsx"
import styles from "../Frontpage/Frontpage.module.scss";
import LoginComponent from '../Loginprocess/LoginComponent.jsx'


const MainPath=()=>{
return(<div>
    <div className={styles.navbar}><NavigationBar/></div>
    <Routes>
    
        <Route path="/" element={<FrontPage/>}/>

        <Route path="/community" element={<CommunityPage/>}/>
  

        <Route path="/aboutus" element={<AboutUs/>}/>

        <Route path="/support"/>
        <Route path="/login" element={<LoginComponent/>} />
        <Route path="/logout"/>
        <Route path="/register"/>
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
        <Route path="/Resetpassword" element={<ResetPassword/>} />
        <Route path="/*"/>
    
    </Routes>
    <div className={styles.footer}><Footer/></div>
</div>)

}

export default MainPath