import React, { useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { useContext } from "react";
import { ThemeCTX } from "../../../App";

const DarkMode = () => {
  const { changeTheme, theme, setTheme } = useContext(ThemeCTX);

  useEffect(() => {
    localStorage.setItem("themeKey", JSON.stringify(theme));
  }, [theme]);

  const toggleChange =
    theme === "light" ? "first_mode_label" : "second_mode_label";
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={changeTheme}
      />
      <label
        className={`dark_mode_label ${toggleChange}`}
        for="darkmode-toggle"
      >
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
