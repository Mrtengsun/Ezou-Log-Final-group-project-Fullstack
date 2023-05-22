
import { useContext } from "react";
// import { Link } from "react-router-dom";
import { CreateaccountCTX } from "../contexts/CreateaccountCTX.jsx";
import styles from "./CreateAccount.module.scss";



const DataUpdate = () => {

  const {
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
    navigate,
  } = useContext(CreateaccountCTX);

  const formSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "register",
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
      navigate
    });
  };
  return (
    <div>
      <div className={styles.account}>
        <h2>Create An Account</h2>
        <form onSubmit={formSubmit}>
          <div className={styles.form}>
            <div className={styles.box}>
              <input
                type="text"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={firstName}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>First Name</span>
            </div>
            <div className={styles.box}>
              <input
                type="text"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={lastName}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>Last Name</span>
            </div>
            <div className={styles.box}>
              <input
                type="email"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={email}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>Email</span>
            </div>
            <div className={styles.box}>
              <input
                type="password"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={password}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>Password</span>
            </div>
            <div className={styles.box}>
              <input
                type="date"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={dateOfBirth}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>Date of Birth</span>
            </div>
            <div className={styles.box}>
              <input
                type="text"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={placeOfBirth}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>Place of Birth</span>
            </div>
            <div className={styles.box}>
              <input
                type="select"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={gernda}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>Male/Female/Other</span>
            </div>
            <div className={styles.box}>
              <input
                type="phone"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={phoneNummer}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>Phone Number</span>
            </div>
            <div className={styles.box}>
              <input
                type="text"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={company}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>Company</span>
            </div>
            <div className={styles.box}>
              <input
                type="text"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={streetAndNumber}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>Street/House No.</span>
            </div>
            <div className={styles.box}>
              <input
                type="text"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={postCode}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>Post Code</span>
            </div>
            <div className={styles.box}>
              <input
                type="text"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={state}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>State/Region/Provence</span>
            </div>
            <div className={styles.box}>
              <input
                type="text"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={country}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>Country</span>
            </div>
            <div className={styles.box}>
              <input
                type="text"
                required="required"
                autoComplete="off"
                placeholder=" "
                ref={profession}
                className={styles.forminput}
              />
              <span className={styles.labelinput}>Profession/Job Title</span>
            </div>
          </div>

          <button>Register</button>
        </form>
        {/* <div>
          Already have an Account <Link to="/login">Login</Link>
        </div> */}
      </div>
    </div>
  );

};

export default DataUpdate;
