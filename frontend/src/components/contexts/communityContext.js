import { useState, createContext, useRef } from "react";

export const CommunityContext = createContext(null);

const CommunityContextProvider = ({ children }) => {
  const [popUp, setPopUp] = useState(false);
  const titleInput = useRef();
  const descriptionInput = useRef();

  return (
    <CommunityContext.Provider
      value={{ popUp, setPopUp, titleInput, descriptionInput }}
    >
      {children}
    </CommunityContext.Provider>
  );
};
export default CommunityContextProvider;
