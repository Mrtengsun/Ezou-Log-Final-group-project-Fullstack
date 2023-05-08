 import React from "react";
import { Link } from "react-router-dom";
import "./Loginstyle.scss";
import { useContext } from "react";
import { loginContext } from "../contexts/LoginContext";

const LoginComponent = ()=>{
const {email,setEmail,setOTP}=useContext(loginContext)

const navigateToOtp = ()=>{
  if(email){
    const OTP = Math.floor(Math.random() *9000 + 1000);
    console.log(OTP)
    setOTP(OTP)

axios.post('http://localhost:5000/api/user/login',{
  OTP,email:email
})
.then(()=>setPage('otp'))
.catch(console.log(object));
return;
  }
  return alert('please enter your email')
}


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(userInput.current.value);
  //   const loginData = {
  //     email: userInput.current.value,
  //     password: passwordInput.current.value,
  //   };
  //   const config = {
  //     method: "Post",
  //     headers: {
  //       "Conten-Type": "application/json",
  //     },
  //     body: JSON.stringify(loginData),
  //   };

  //   fetch(`http://localhost:3000/login`, config)
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result)
  //     })
  //     .catch(err => console.log(err))
  // }

  return (
    <div className="cover">
      <div className="loginbox">
        <h1>Login</h1>
        <form>

          <div className="inputbox">
            <div className="input-container">
              <input 
              onChange={(e)=>setEmail(e.target.value)}
              type="text" placeholder="Email" />
              <br /> <br />
              <input type="password" placeholder="password"
                 />
            </div>

            <div className="forgetpass">
              <label type="checkbox"><input type="checkbox" className="check" />Remember me</label>
              <Link 
              onClick={()=>navigateToOtp()}
              className="account" to='/forgetpassword'>Forgotten password ?</Link>
            </div>
            <button type="submit" className="btn">Sign in</button>
            <div className="register">
              <label>Create an Account  </label>
              <Link className="account" to='/Register'>REGISTER?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default LoginComponent;
