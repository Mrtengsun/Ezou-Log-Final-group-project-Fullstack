import { useContext } from "react";
import { ChatContext } from "../contexts/chatContext.js";
import "./chatbot.scss";
import Chat from "./Chat.jsx";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log(socket.id);
});

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
      <div className={chat ? "removeIcon" : "chatIcon"}>
        <i
          className="fa-regular fa-comment-dots"
          id="icon"
          onClick={chatClickHandler}
        ></i>
      </div>

      <Chat trigger={chat} setTrigger={setChat}>
        <div className="chatTitle">
          <i
            className="fa-regular fa-circle-xmark fa-2xl"
            id="closeMark"
            onClick={closeHandler}
          ></i>
          <h1 className="heading"> live support</h1>
        </div>
        <div className="chatWindow">
          <h1>text</h1>
          <div className="chatMark">
            <p>mustermann</p>
            <p>
              {new Date(Date.now()).getHours()}:
              {new Date(Date.now()).getMinutes()}
            </p>
          </div>
        </div>
        <div className="chatInput">
          <textarea type="text" className="chatting" />
          <button className="sending">Send</button>
        </div>
        )
      </Chat>
    </div>
  );
};

export default ChatBot;
