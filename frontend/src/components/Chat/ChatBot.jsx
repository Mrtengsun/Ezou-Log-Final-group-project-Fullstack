import { useContext, useEffect } from "react";
import { ChatContext } from "../contexts/chatContext.js";
import "./chatbot.scss";
import Chat from "./Chat.jsx";
import { io } from "socket.io-client";
import { CreateaccountCTX } from "../contexts/CreateaccountCTX.jsx";

// const socket = io("http://localhost:5000");
 const socket = io()
const ChatBot = () => {
  const {
    chat,
    setChat,
    userName,
    setUserName,
    message,
    setMessage,
    receivedMessage,
    setReceivedMessage,
    room,
    setRoom,
    textList,
    setTextList,
    clearValue,
    setClearValue,
  } = useContext(ChatContext);
  const { token, user } = useContext(CreateaccountCTX);
  const chatClickHandler = () => {
    if (user) {
      console.log(user);
      setChat(true);
      const fullName = `${user.firstName} ${user.lastName}`;
      console.log(fullName);
      setUserName(fullName);
      setRoom(user._id);
    }
  };
  const closeHandler = () => {
    setChat(false);
  };
  const messageHandler = (e) => {
    setClearValue(null);
    setMessage(e.target.value);
  };
  const sendMessageHandler = () => {
    if (message) {
      const messageData = {
        message: message,
        author: userName,
        room: room,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      setClearValue("");
      socket.emit("sendMessage", messageData);
      setTextList((list) => [...list, messageData]);
      if (messageData.room !== "") {
        socket.emit("joinRoom", messageData.room);
      }
    }
  };
  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      // setReceivedMessage(data.message);
      setTextList((list) => [...list, data]);
    });
  }, [socket]);
  // console.log(textList);

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
          {textList.map((message, i) => {
            return (
              <div key={i}>
                <div
                  className="chatContent"
                  id={userName !== message.author ? "author" : "admin"}
                >
                  <h3>{message.message}</h3>
                </div>
                <div className="chatMark">
                  <p id="sender">{message.author}</p>
                  <p>{message.time}</p>
                </div>
              </div>
            );
          })}
          {/* <h1>{receivedMessage}</h1>
          <div className="chatMark">
            {/* <p>{userName}</p>
            <p>
              {new Date(Date.now()).getHours()}:
              {new Date(Date.now()).getMinutes()}
            </p> */}
          {/* </div>{" "} */}
        </div>
        <div className="chatInput">
          <textarea
            type="text"
            className="chatting"
            placeholder="Messaging......"
            value={sendMessageHandler && clearValue}
            onChange={messageHandler}
            onKeyDown={(e) => e.key === "Enter" && sendMessageHandler()}
          />
          <button className="sending" onClick={sendMessageHandler}>
            Send
          </button>
        </div>
      </Chat>
    </div>
  );
};

export default ChatBot;
