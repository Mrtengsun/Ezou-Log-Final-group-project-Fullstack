import { createContext, useState } from "react";
export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("Sunny");
  const [liveChat, setLiveChat] = useState();
  const [textList, setTextList] = useState([]);
  const [join, setJoin] = useState();
  const [room, setRoom] = useState();
  const [chat, setChat] = useState();
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");
  return (
    <ChatContext.Provider
      value={{
        chat,
        setChat,
        userName,
        setUserName,
        textList,
        setTextList,
        liveChat,
        setLiveChat,
        join,
        setJoin,
        room,
        setRoom,
        message,
        setMessage,
        receivedMessage,
        setReceivedMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
