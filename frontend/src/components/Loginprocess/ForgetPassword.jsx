import React from "react";
import "./ForgetPassword.scss"


const ForgetPassword = () => {

  return(
    
    <div className="cover">
    <div className="loginbox">
          <h1>Forget Password</h1>
      <form>
        <div className="inputbox">
          <div className="input-container">
            <label type="email" className="data">Email</label>
          <input type="text" />
          
          <label type="text" className="data">FullName</label>
          <input type="text" />  
        </div>
           
        <button type="submit" className="btn"> <a href="">Continue</a></button>
        </div>
      </form>
    </div>
  </div>

 )
}
export default ForgetPassword;
