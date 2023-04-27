import { createContext, useState } from "react";
export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [username, setUserName] = useState();
  const [liveChat, setLiveChat] = useState();
  const [texting, setTexting] = useState();
  const [jion, setJion] = useState();
  const [room, setRoom] = useState();

  return <ChatContext.Provider>{children}</ChatContext.Provider>;
};

export default ChatContextProvider;
