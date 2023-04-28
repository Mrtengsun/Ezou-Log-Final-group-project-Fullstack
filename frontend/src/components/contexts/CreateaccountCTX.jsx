import { useState, createContext, useRef, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import account from "./UserReducer";

export const CreateaccountCTX = createContext();
const existUser = JSON.parse(localStorage.getItem("user"))||null
const CreateaccountCTXProvider = ({ children }) => {
  const [user, setUser] = useState(existUser)
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const dateOfBirth = useRef();
  const placeOfBirth = useRef();
  const gernda = useRef();
  const phoneNummer = useRef();
  const company = useRef();
  const streetAndNumber = useRef();
  const postCode = useRef();
  const state = useRef();
  const country = useRef();
  const profession = useRef();
 const navigate = useNavigate()
  const [errors, setErrors] = useState(null);

  
  const [statereducer, dispatch] = useReducer(account, {});

  return (
    <div>
      <CreateaccountCTX.Provider
        value={{
          firstName,
          lastName,
          email,
          password,
          dateOfBirth,
          placeOfBirth,
          gernda,
          phoneNummer,
          company,
          streetAndNumber,
          postCode,
          state,
          country,
          profession,
          setErrors,
          errors,
          dispatch,
          user,
          setUser,
          navigate,
        }}
      >
        {children}
      </CreateaccountCTX.Provider>
    </div>
  );
};

export default CreateaccountCTXProvider;
