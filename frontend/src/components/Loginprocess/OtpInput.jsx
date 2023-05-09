import React, { useState } from 'react'
import "./OtpInput.scss";
import { useContext } from 'react';
import { loginContext } from '../contexts/LoginContext';

const OtpInput = () => {
 const { email, otp, setPage } = useContext(loginContext);
 // const { timerCount, setTimer } = useState(60)
 const {OTPinput,setOTPinput}= useState([0,0,0,0])
 const { disable, setDisable } = useState(true)

 const resendOTP = () => {
  if (disable) return;

  axios.post('http://localhost:1200/recovery-email', {
   OTP: otp, email: email
  })
   .then(() => setDisable(true))
   .then(() => alert('A new OTP has been send to your email'))
   // .then(() => setTimer(60))
   .catch(console.log)
 }
const verifyOTP =()=>{
 if(parseInt(OTPinput.join('')) === otp){
  setPage('reset');
 }
 alert('The code you entered is not correct,try resend the link')
 return;
}

// React.useEffect(() => {
//  let interval = setInterval(() => {
//    setTimer((lastTimerCount) => {
//      lastTimerCount <= 1 && clearInterval(interval);
//      if (lastTimerCount <= 1) setDisable(false);
//      if (lastTimerCount <= 0) return lastTimerCount;
//      return lastTimerCount - 1;
//    });
//  }, 1000); 
//  return () => clearInterval(interval);
// }, [disable]);

 return (
  <div>
   <p>Email Verification</p>
   <div>
    we have send you an email {email}
   </div>
   <div>
    <div className='box-1' >
     <input type="text" 
       onChange={(e) =>
        setOTPinput([
          e.target.value,
          OTPinput[1],
          OTPinput[2],
          OTPinput[3],
        ])
      }
     
     
     />
    </div>
    <div className='box-1'>
     <input type="text"
        onChange={(e) =>
         setOTPinput([
           OTPinput[0],
           e.target.value,
           OTPinput[2],
           OTPinput[3],
         ])
       }
     
     />
    </div>
    <div className='box-1'>
     <input type="text"
         onChange={(e) =>
          setOTPinput([
            OTPinput[0],
            OTPinput[1],
            e.target.value,
            OTPinput[3],
          ])
        }
     
     />
    </div>
    <div className='box-1'>
     <input type="text" 
       onChange={(e) =>
        setOTPinput([
          OTPinput[0],
          OTPinput[1],
          OTPinput[2],
          e.target.value,
        ])
      }
     
     />
    </div>
   </div>




   <div className='flex'>
    <div>
     <a 
     onClick={()=> verifyOTP}
     >Verify Account</a>
    </div>

    <div className='otp'>
     <p>Didn't Recieve code ?</p>{' '}
     <a 
     style={{
      color: disable ? 'grey':'blue',
      cursor: disable ? 'none': 'pointer',
      textDecorationLine: disable ? 'none': 'underline'
      }}
      onClick={()=>resendOTP}>
      {disable ? `Resend OTP in ${timerCount()}s` : 'Resend OTP'}
      </a>
    </div>

   </div>
  </div>
 )
}

export default OtpInput
