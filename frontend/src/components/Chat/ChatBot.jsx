import { io } from "socket.io-client";
import { useContext } from "react";
import { ChatContext } from "../contexts/chatContext.js";
import "./chatbot.scss";
import Chat from "./Chat.jsx";
const ChatBot = () => {
  const chatClickHandler = () => {};
  const { chat, setChat, username, setUserName } = useContext(ChatContext);

  return (
    <div className="chatIcon">
      <i
        className="fa-regular fa-comment-dots"
        id="icon"
        onClick={chatClickHandler}
      ></i>
      <div>
        <Chat></Chat>
      </div>
    </div>
  );
};

export default ChatBot;
