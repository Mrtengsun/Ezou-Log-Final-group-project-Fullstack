import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style/index.scss";
import App from "./App.jsx";
import CommunityContextProvider from "./components/contexts/communityContext.js";
import ChatContextProvider from "./components/contexts/chatContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <CommunityContextProvider>
      <ChatContextProvider>
        <App />
      </ChatContextProvider>
    </CommunityContextProvider>
  </BrowserRouter>
);
