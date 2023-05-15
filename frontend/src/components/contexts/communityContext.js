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
  const [addPost, setAddPost] = useState([]);
  const [sendComment, setSendComment] = useState([]);
  const [deletePost, setDeletePost] = useState(null);
  const [getPost, setGetPost] = useState([]);
  const [getSearchInput, setGetSearchInput] = useState([]);
  return (
    <CommunityContext.Provider
      value={{
        addPost,
        setAddPost,
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
        deletePost,
        setDeletePost,
        getPost,
        setGetPost,
        getSearchInput,
        setGetSearchInput,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
};
export default CommunityContextProvider;
