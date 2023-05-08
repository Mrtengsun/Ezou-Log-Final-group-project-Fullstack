import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style/index.scss";
import App from "./App.jsx";
import CommunityContextProvider from "./components/contexts/communityContext.js";
import LoginContextProvider from "./components/contexts/LoginContext.jsx";
import CreateaccountCTXProvider from "./components/contexts/CreateaccountCTX.jsx";

import ChatContextProvider from "./components/contexts/chatContext.js";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

// socket.on("connect", () => {
//   console.log(socket.id);
// });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <LoginContextProvider>
    <CommunityContextProvider>
      <CreateaccountCTXProvider>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </CreateaccountCTXProvider>
    </CommunityContextProvider>
    </LoginContextProvider>
  </BrowserRouter>
);
