import {Routes,Route} from "react-router-dom"
import FrontPage from "../Frontpage/FrontPage.jsx";
import CommunityPage from "../Communitypage/Community.jsx";


const MainPath=()=>{
return(<div>
    <Routes>
    
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/community" element={<CommunityPage/>}/>
        {/* 
        <Route path="/aboutUs"/>
        <Route path="/support"/>
        <Route path="/login"/>
        <Route path="/logout"/>
        <Route path="/register"/>
        <Route path="/*"/> */}
    
    </Routes>
</div>)

}

export default MainPath