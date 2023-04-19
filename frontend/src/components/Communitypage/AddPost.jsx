import React from "react";
import "./addpost.scss";
import { useContext } from "react";
import { communityContext } from "../contexts/communityContext.js";
import CommunityPopUp from "./CommunityPopUp.jsx";

const AddPost = () => {
  const { popUp, setPopUp } = useContext(communityContext);

  const addPostHandler = () => {
    setPopUp(true);
  };
  return (
    <div className="addpost">
      <button id="addbutton" onClick={addPostHandler}>
        <i className="fa-solid fa-plus fa-xs" />
        ADD POST
      </button>
      <CommunityPopUp trigger={popUp} />
    </div>
  );
};

export default AddPost;
