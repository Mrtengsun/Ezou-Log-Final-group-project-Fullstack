
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./ForgetPassword.scss"
import axios from 'axios'
import { loginContext } from "../contexts/LoginContext";

const ForgetPassword = () => {
  const {setEmail,email}= useContext(loginContext)
  
    axios.post(`http://localhost:3000/ForgetPassword`,{email:email})
    .then(res=>{
      console.log(res)
    }).catch(err=>{
  console.log(err)
    })
      

  return(
    
    <div className="cover">
    <div className="loginbox">
          <h1>Forget Password</h1>
      <form >
        <div className="inputbox">
          <div className="input-container">
            <label type="email" className="data">Email</label>
          <input type="text" onClick={()=> setEmail(e.target.value)}/>
          
          <label type="text" className="data">FullName</label>
          <input type="text" />  
        </div>
           
        <Link  to="/Resetpassword"><button className="btn"> Continue</button></Link>
        </div>
      </form>
    </div>
  </div>

 )
}
export default ForgetPassword;
