import React from 'react'
import "./ResetPass.scss"

const ResetPassword = () => {
  return (
   <div className="cover">
   <div className="loginbox">
         <h1>ResetPassword</h1>
     <form>

       <div className="inputbox">
         <div className="input-container">
           <label type="email" className="data">New Password</label>
          
         <input type="text" />
         <br /> 
         <label type="text" className="data">Confirm Password</label>
         <input type="text" 
            />  
       </div>
       <button type="submit" className="btn"> <a href="">Submit</a></button>
       </div>
     </form>
   </div>
 </div>

  )
}

export default ResetPassword
