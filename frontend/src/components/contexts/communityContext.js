import { useState, createContext, useRef } from "react";

export const CommunityContext = createContext(null);

const CommunityContextProvider = ({ children }) => {
  const [popUp, setPopUp] = useState(false);
  const titleInput = useRef();
  const descriptionInput = useRef();
  const searchInput = useRef();
  const commentInput = useRef();
  const [search, setSearch] = useState(null);
  const [thumbsUp, setThumbsUp] = useState(false);
  const [comment, setComment] = useState(false);
  const [thumbSum, setThumbSum] = useState(null);
  const [commentSum, setCommentSum] = useState(false);

  const [sendComment, setSendComment] = useState([]);
  return (
    <CommunityContext.Provider
      value={{
        popUp,
        setPopUp,
        titleInput,
        commentInput,
        descriptionInput,
        searchInput,
        search,
        setSearch,
        thumbsUp,
        setThumbsUp,
        comment,
        setComment,
        thumbSum,
        setThumbSum,
        commentSum,
        setCommentSum,
        sendComment,
        setSendComment,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
};
export default CommunityContextProvider;
