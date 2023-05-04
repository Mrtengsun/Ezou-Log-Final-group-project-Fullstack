import MainPath from "./components/mainPath/MainPath.jsx";
import "./app.css";
import { useState } from "react";
import { createContext } from "react";

export const ThemeCTX = createContext();

const themeMode = JSON.parse(localStorage.getItem("themeKey")) || "light"

const App = () => {
  const [theme, setTheme] = useState(themeMode);

  const changeTheme = () => {
    setTheme((backgColor) => (backgColor === "light" ? "dark" : "light"));
  };
  return (
    <ThemeCTX.Provider value={{ changeTheme, theme, setTheme }}>
      <div className={theme}>
        <MainPath />
      </div>
    </ThemeCTX.Provider>
  );
};

export default App;
