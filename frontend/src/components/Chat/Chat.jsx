import LoginComponent from "../Loginprocess/LoginComponent.jsx";
import "./chat.scss";
import { useContext } from "react";
import { ChatContext } from "../contexts/chatContext.js";

const Chat = ({ trigger, setTrigger, children }) => {
  const { username, setUserName } = useContext(ChatContext);
  return trigger ? (
    <div className="chat">
      <div className="chatPop">{children}</div>
      {/* <div className="chatPop">{username ? children : <LoginComponent />}</div> */}
    </div>
  ) : (
    ""
  );
};
export default Chat;
