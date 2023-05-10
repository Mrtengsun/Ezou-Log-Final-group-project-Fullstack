import React from 'react'
import './AddEmail.scss'
import { Link } from 'react-router-dom'

const AddEmail = () => {
  return (
    <div>
       <div className="covered">
    <div className="mainbox">
          <h1>Add Email</h1>
      <form >
        <div className="input">
          <div className="email-input">
          
          
          <label type="text" className="data">Email</label>
          <input type="text" 
         />  
        </div>
           
        <Link  to="/otpinput"><button className="btn"> send</button></Link>
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}

export default AddEmail
