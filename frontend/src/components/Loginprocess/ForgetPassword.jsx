import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./ForgetPassword.scss";
import { CreateaccountCTX } from "../contexts/CreateaccountCTX";
import { loginContext } from "../contexts/LoginContext";

const ForgetPassword = () => {
  const { navigate, setCode } = useContext(CreateaccountCTX);
  const { email, setEmail } = useContext(loginContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    fetch(`/api/user/send-code/${email}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.randomInt) {
          setCode(result.randomInt);
          navigate("otpinput");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="maincovered">
      <div className="loginboxed">
        <h1>Forget Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputboxed">
            <div className="input-containered">
              <label type="email" className="data">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button className="btn" type="submit">
              {" "}
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgetPassword;
