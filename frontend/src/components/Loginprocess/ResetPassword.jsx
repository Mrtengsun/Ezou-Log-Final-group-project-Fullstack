// // // import React, {  useRef, useState } from 'react'
// import "./ResetPass.scss"
// import { useContext } from 'react'
// import { loginContext } from '../contexts/LoginContext'

// import axios from 'axios'

// const ResetPassword = () => {
//   const {state,setState}=useContext(loginContext)
//   const resetInput = useRef()

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     const data={
//       token:params.id,
//       password:password,
//       password_confirm:password_confirm
//     }
// axios.post(`http:/localhost:3000/ResetPassword`,data)
// .then(res=>{
//   console.log(res)
//   setState({
//     reset:true
//   })
// }).catch(err=>{
//   console.log(err)
// })
//   }

//   {

//     // if(state.reset){
//     //   return <Redirect to={'/login'}/>
//     // }
//   }// import React, {  useRef, useState } from 'react'
// import "./ResetPass.scss"
// import { useContext } from 'react'
// import { loginContext } from '../contexts/LoginContext'

// import axios from 'axios'

// const ResetPassword = () => {
//   const {state,setState}=useContext(loginContext)
//   const resetInput = useRef()

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     const data={
//       token:params.id,
//       password:password,
//       password_confirm:password_confirm
//     }
// axios.post(`http:/localhost:3000/ResetPassword`,data)
// .then(res=>{
//   console.log(res)
//   setState({
//     reset:true
//   })
// }).catch(err=>{
//   console.log(err)
// })
//   }

//   {

//     // if(state.reset){
//     //   return <Redirect to={'/login'}/>
//     // }
//   }// import React, {  useRef, useState } from 'react'
// import "./ResetPass.scss"
// import { useContext } from 'react'
// import { loginContext } from '../contexts/LoginContext'

// import axios from 'axios'

// const ResetPassword = () => {
//   const {state,setState}=useContext(loginContext)
//   const resetInput = useRef()

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     const data={
//       token:params.id,
//       password:password,
//       password_confirm:password_confirm
//     }
// axios.post(`http:/localhost:3000/ResetPassword`,data)
// .then(res=>{
//   console.log(res)
//   setState({
//     reset:true
//   })
// }).catch(err=>{
//   console.log(err)
// })
//   }

//   {

//     // if(state.reset){
//     //   return <Redirect to={'/login'}/>
//     // }
//   }// import React, {  useRef, useState } from 'react'
// import "./ResetPass.scss"
// import { useContext } from 'react'
// import { loginContext } from '../contexts/LoginContext'

// import axios from 'axios'

// const ResetPassword = () => {
//   const {state,setState}=useContext(loginContext)
//   const resetInput = useRef()

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     const data={
//       token:params.id,
//       password:password,
//       password_confirm:password_confirm
//     }
// axios.post(`http:/localhost:3000/ResetPassword`,data)
// .then(res=>{
//   console.log(res)
//   setState({
//     reset:true
//   })
// }).catch(err=>{
//   console.log(err)
// })
//   }

//   {

//     // if(state.reset){
//     //   return <Redirect to={'/login'}/>
//     // }
//   }

//   return (

//    <div className="cover">
//    <div className="loginbox">
//          <h1>ResetPassword</h1>
//      <form onSubmit={handleSubmit}>

//        <div className="inputbox">
//          <div className="input-container">
//            <label type="email" className="data">New Password</label>
          
//          <input type="text" ref={resetInput} />
//          <br /> 
//          <label type="text" className="data">Confirm Password</label>
//          <input type="text" 
//             />  
//        </div>
//        <button type="submit" className="btn"> <a href="">Submit</a></button>
//        </div>
//      </form>
//    </div>
//  </div>

//   )
// }

// export default ResetPassword


import React from "react";
import { useContext } from "react";
import { loginContext } from "../contexts/LoginContext";

 const ResetPassword=()=>{
  const { setPage } = useContext(loginContext);
  function changePassword() {
    setPage("recovered");
  }

  return (
   
    <div className="cover">
    <div className="loginbox">
          <h1>Forget Password</h1>
      <form >
        <div className="inputbox">
          <div className="input-container">
            <label type="text" className="data">password</label>
          <input type="text" placeholder="password" />
          
          <label type="text" className="data">confirm password</label>
          <input type="password" placeholder="confirm password" />  
        </div>
           
        <Link  to="/Resetpassword"><button 
        onClick={() => changePassword()}
        className="btn"> Reset password</button></Link>
        </div>
      </form>
    </div>
  </div>
  );
}
export default ResetPassword