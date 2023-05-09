import { Children, useState } from "react";
import { createContext } from "react";
import LoginComponent from "../Loginprocess/LoginComponent";
import OtpInput from "../Loginprocess/OtpInput";
import Recovered from "../Loginprocess/Recoverd";
import ResetPassword from "../Loginprocess/ResetPassword";

export const loginContext = createContext();
const  LoginContextProvider = ({children})=>{
  const [page, setPage] = useState("logincomponent");
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();

  // function NavigateComponents() {
  //   if (page === "loginComponent") return <LoginComponent />;
  //   if (page === "otpInput") return <OtpInput />;
  //   if (page === "resetPassword") return <ResetPassword />;

  //   return <Recovered />;
  // }

  return (
    <loginContext.Provider
      value={{ page, setPage, otp, setOTP, setEmail, email }}
    >
        {children}
    </loginContext.Provider>
  );
}
export default LoginContextProvider
