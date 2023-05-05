import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style/index.scss";
import App from "./App.jsx";
import CommunityContextProvider from "./components/contexts/communityContext.js";

import CreateaccountCTXProvider from "./components/contexts/CreateaccountCTX.jsx";

import ChatContextProvider from "./components/contexts/chatContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <CommunityContextProvider>
      <CreateaccountCTXProvider>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </CreateaccountCTXProvider>
    </CommunityContextProvider>
  </BrowserRouter>
);
