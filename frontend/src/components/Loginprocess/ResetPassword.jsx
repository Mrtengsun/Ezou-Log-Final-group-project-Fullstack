

 import React, {  useRef, useState } from 'react'
 import "./ResetPass.scss"
 import { useContext } from 'react'
 import { loginContext } from '../contexts/LoginContext'
import { CreateaccountCTX } from '../contexts/CreateaccountCTX'

 const ResetPassword = () => {
   const {email}=useContext(loginContext)
   const {navigate}= useContext(CreateaccountCTX)
   const passwordInput = useRef()
   const repeatpasswordInput = useRef()


   const handleSubmit=(e)=>{
     e.preventDefault()
     
     if(passwordInput.current.value !== repeatpasswordInput.current.value){
      alert('The password and repeatpassword should be the same')
      return;
     }
     const data={
       password:passwordInput.current.value,
       email:email

     }
     const config={
      method:'POST',
      body: JSON.stringify(data),
      headers:{
      'Content-type':'application/json',
      }
     }
 fetch(`http://localhost:5000/api/user/reset-password`,config)
.then(res=>res.json()
)
.then(result=>{
  console.log(result)
  if(result.successfull){
    navigate('logincomponent')
  }
})  
.catch(err=>{
   console.log(err)
 })
   }

   return (

   <div className="cover">
   <div className="loginbox">
        <h1>ResetPassword</h1>
     <form onSubmit={handleSubmit}>

       <div className="inputbox">
         <div className="input-container">
            <label  className="data">New Password</label>
          
         <input type="password" ref={passwordInput} />
          <br /> 
         <label  className="data">Confirm Password</label>
          <input type="password" ref={repeatpasswordInput}
            />  
       </div>
       <button type="submit" className="btn"> Submit</button>
      </div>
     </form>
    </div>
  </div>

   )
 }

 export default ResetPassword

