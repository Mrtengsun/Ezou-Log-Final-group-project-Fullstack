import React, { useRef } from "react";
import "./ForgetPassword.scss"
import axios from 'axios'

const ForgetPassword = () => {
  
  const inputEmail= useRef()
      const handleSubmit =(e)=>{
    e.preventDefault()
    const data= {
      email:inputEmail.current.value

    }
    axios.post('ForgetPassword',data)
    .then(res=>{
      console.log(res)
    }).catch(err=>{
  console.log(err)
    })
      }

  return(
    
    <div className="cover">
    <div className="loginbox">
          <h1>Forget Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          <div className="input-container">
            <label type="email" className="data">Email</label>
          <input type="text" ref={inputEmail} />
          
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
