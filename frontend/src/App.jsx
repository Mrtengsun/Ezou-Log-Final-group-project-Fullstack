import MainPath from "./components/mainPath/MainPath.jsx";
import "./app.css";
import { useContext } from "react";
import { CreateaccountCTX } from "./components/contexts/CreateaccountCTX.jsx";


const App = () => {
  const {theme} = useContext(CreateaccountCTX)
  return (
    <div id={theme}>
      <MainPath />
    </div>

  );
};

export default App;
