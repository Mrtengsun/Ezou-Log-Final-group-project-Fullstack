import { createContext, useState } from "react";
export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [userName, setUserName] = useState();
  const [liveChat, setLiveChat] = useState();
  const [texting, setTexting] = useState();
  const [join, setJoin] = useState();
  const [room, setRoom] = useState();
  const [chat, setChat] = useState();

  return (
    <ChatContext.Provider
      value={{
        chat,
        setChat,
        userName,
        setUserName,
        texting,
        setTexting,
        liveChat,
        setLiveChat,
        join,
        setJoin,
        room,
        setRoom,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
