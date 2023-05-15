import { createContext, useState } from "react";
export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [liveChat, setLiveChat] = useState();
  const [textList, setTextList] = useState([]);
  const [join, setJoin] = useState();
  const [room, setRoom] = useState();
  const [chat, setChat] = useState();
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");
  const [clearValue, setClearValue] = useState();
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
        clearValue,
        setClearValue,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
