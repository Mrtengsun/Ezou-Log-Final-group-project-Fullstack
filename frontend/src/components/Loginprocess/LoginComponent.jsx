import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./Loginstyle.scss";
import { CreateaccountCTX } from "../contexts/CreateaccountCTX";

const LoginComponent = () => {

  const { setUser, setToken, navigate, errors, setErrors } = useContext(CreateaccountCTX);

  const userInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput.current.value);
    const loginData = {
      email: userInput.current.value,
      password: passwordInput.current.value,
    };
    const config = {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    };

    fetch(`http://localhost:5000/api/user/login`, config)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.user) {

          setUser(result.user);
          setToken(result.token);

          localStorage.setItem("token", JSON.stringify(result.token));
          localStorage.setItem("user", JSON.stringify(result.user));


          navigate("/")
        } else {
          setErrors(result.message)

        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cover-2">
      <div className="loginbox-2">
        <h1>Login</h1>
        {errors && <p>{errors}</p>}
        <form onSubmit={handleSubmit}>

          <div className="inputbox-2">
            <div className="input-container-2">
              <input type="email" placeholder="username" ref={userInput} />

              <br /> <br />
              <input
                type="password"
                placeholder="password"
                ref={passwordInput}
              />
            </div>

            <div className="forgetpass-2">
              <label type="checkbox">
                <input type="checkbox" className="check" />
                Remember me
              </label>
              <Link className="account" to="/forgetpassword">
                Forgotten password ?
              </Link>
            </div>
            <button type="submit" className="btn">
              Sign in
            </button>
            <div className="register">
              <label>Create an Account </label>
              <Link className="account" to="/Register">
                REGISTER?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginComponent;
