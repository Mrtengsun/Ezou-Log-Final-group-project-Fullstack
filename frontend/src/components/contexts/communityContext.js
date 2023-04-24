import { useState, createContext, useRef } from "react";

export const CommunityContext = createContext(null);

const CommunityContextProvider = ({ children }) => {
  const [popUp, setPopUp] = useState(false);
  const titleInput = useRef();
  const descriptionInput = useRef();
  const searchInput = useRef();
  const [search, setSearch] = useState(null);

  return (
    <CommunityContext.Provider
      value={{
        popUp,
        setPopUp,
        titleInput,
        descriptionInput,
        searchInput,
        search,
        setSearch,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
};
export default CommunityContextProvider;
