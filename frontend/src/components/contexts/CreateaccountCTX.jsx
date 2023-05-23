import { useState, createContext, useRef, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import account from "./UserReducer";

const themeMode = JSON.parse(localStorage.getItem("themeKey")) || "light";
const existUser = JSON.parse(localStorage.getItem("user")) || null;
const existtoken = JSON.parse(localStorage.getItem("token")) || null;
export const CreateaccountCTX = createContext();

const CreateaccountCTXProvider = ({ children }) => {
  const [code, setCode] = useState(0);
  const [token, setToken] = useState(existtoken);
  const [user, setUser] = useState(existUser);
  const [theme, setTheme] = useState(themeMode);
  const [file, setFile] = useState("");
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

  const navigate = useNavigate();

  const changeTheme = () => {
    setTheme((backgColor) => (backgColor === "light" ? "dark" : "light"));
  };

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
          file,
          setFile,
          changeTheme,
          theme,
          setTheme,
          token,
          setToken,
          code,
          setCode,
        }}
      >
        {children}
      </CreateaccountCTX.Provider>
    </div>
  );
};

export default CreateaccountCTXProvider;
