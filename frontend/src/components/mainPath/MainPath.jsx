import FrontPage from "../Frontpage/FrontPage.jsx";
import NavigationBar from "../Frontpage/NavigationBar.jsx"
import AboutUs from "../Aboutus/AboutUs.jsx"
import Footer from "../Frontpage/Footer.jsx"
import styles from "../Frontpage/Frontpage.module.scss";

import {Routes,Route} from "react-router-dom"

const MainPath=()=>{
return(<div>
    <div className={styles.navbar}><NavigationBar/></div>
    <Routes>
    
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/community"/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/support"/>
        <Route path="/login"/>
        <Route path="/logout"/>
        <Route path="/register"/>
        <Route path="/*"/>
    
    </Routes>
    <div className={styles.footer}><Footer/></div>
</div>)

}

export default MainPath