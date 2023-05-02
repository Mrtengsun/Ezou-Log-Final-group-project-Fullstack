import React, { useRef, useState } from 'react'
import "./ResetPass.scss"
import axios from 'axios'

const ResetPassword = () => {
  const {state,setState}=useState()
  const resetInput = useRef()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data={
      token:params.id,
      password:password,
      password_confirm:password_confirm
    }
axios.post('ResetPassword',data)
.then(res=>{
  console.log(res)
  setState({
    reset:true
  })
}).catch(err=>{
  console.log(err)
})
  }

  {

    if(state.reset){
      return <Redirect to={'/login'}/>
    }
  }

  return (

   <div className="cover">
   <div className="loginbox">
         <h1>ResetPassword</h1>
     <form onSubmit={handleSubmit}>

       <div className="inputbox">
         <div className="input-container">
           <label type="email" className="data">New Password</label>
          
         <input type="text" ref={resetInput} />
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
