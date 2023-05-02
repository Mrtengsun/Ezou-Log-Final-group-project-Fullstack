import { io } from "socket.io-client";
import { useContext } from "react";
import { ChatContext } from "../contexts/chatContext.js";
import "./chatbot.scss";
import Chat from "./Chat.jsx";

const ChatBot = () => {
  const { chat, setChat, username, setUserName } = useContext(ChatContext);
  const chatClickHandler = () => {
    setChat(true);
  };
  const closeHandler = () => {
    setChat(false);
  };
  return (
    <div>
      <div className="chatIcon">
        <i
          className="fa-regular fa-comment-dots"
          id="icon"
          onClick={chatClickHandler}
        ></i>
      </div>

      <Chat trigger={chat} setTrigger={setChat}>
        {/* <div ></div> */}
        <div className="chatTitle">
          <i
            className="fa-regular fa-xmark fa-xl"
            id="closeMark"
            onClick={closeHandler}
          ></i>
          <h1 className="heading"> live support</h1>
        </div>
        <div className="chatWindow">
          <h1>text</h1>
          <div>
            <p>date</p>
            <p>author</p>
          </div>
        </div>
        <div className="chatInput">
          <input type="text" className="chatting" />
        </div>
      </Chat>
    </div>
  );
};

export default ChatBot;
