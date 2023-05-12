import React, { useState } from 'react'
import "./OtpInput.scss";
import { useContext } from 'react';
import { CreateaccountCTX } from '../contexts/CreateaccountCTX';

const OtpInput = () => {
 const {code,navigate} = useContext(CreateaccountCTX);
 const [OTPinput,setOTPinput]= useState(['','','',''])


 const resendOTP = () => {
 navigate('forgetpassword')


 
 }
const verifyOTP =()=>{
  console.log(code)
  console.log(parseInt(OTPinput.join('')))
 if(parseInt(OTPinput.join('')) === code){
  navigate('Resetpassword')
  return;
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
  <div className='cover-1'>
  <div className='loginbox-1'>
    <div className='verified'>
   <p>Email Verification</p>
   <div>
    please check your email
   </div>
   </div>
   <div className='inputbox-1'>
    <div className='box-1'>
     <input type="text" 
     value={OTPinput[0]}
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
     value={OTPinput[1]}
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
      value={OTPinput[2]}
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
     value={OTPinput[3]}
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
    <div className="checkaccount">
     <a 
     onClick={verifyOTP}
     >Verify Account</a>
    </div>

    <div className='otp'>
     <p>Didn't Recieve code ?</p>{' '}
    
    <button
      onClick={resendOTP}
    >
     send again      
    </button>
    </div>

   </div>
   </div>
  </div>
 )
}

export default OtpInput
