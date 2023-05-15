import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style/index.scss";
import App from "./App.jsx";
import CommunityContextProvider from "./components/contexts/communityContext.js";
import LoginContextProvider from "./components/contexts/LoginContext.jsx";
import CreateaccountCTXProvider from "./components/contexts/CreateaccountCTX.jsx";
import ChatContextProvider from "./components/contexts/chatContext.js";
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <LoginContextProvider>
      <CreateaccountCTXProvider>
        <CommunityContextProvider>
          <ChatContextProvider>
            <App />
          </ChatContextProvider>
        </CommunityContextProvider>
      </CreateaccountCTXProvider>
    </LoginContextProvider>
  </BrowserRouter>
);
