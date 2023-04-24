import React from "react";
import "./addpost.scss";
import { useContext } from "react";
import { CommunityContext } from "../contexts/communityContext.js";
import CommunityPopUp from "./CommunityPopUp.jsx";

const AddPost = () => {
  const { popUp, setPopUp, titleInput, descriptionInput } =
    useContext(CommunityContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const addPostData = {
      topic: titleInput.current.value,
      description: descriptionInput.current.value,
    };
    console.log(addPostData);
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addPostData),
    };

    fetch("http://localhost:3000/community", config)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err, "coming from catch communityPopUp");
      });
    setPopUp(false);
  };
  const addPostHandler = () => {
    setPopUp(true);
  };
  return (
    <div className="addpost">
      <button id="addbutton" onClick={addPostHandler}>
        <i className="fa-solid fa-plus fa-xs" />
        ADD POST
      </button>
      <CommunityPopUp trigger={popUp} setTrigger={setPopUp}>
        <form action="">
          <h1>Ask me</h1>
          <tr>
            <input type="text" placeholder="Title" ref={titleInput} />
          </tr>
          <tr>
            <textarea
              type="text"
              placeholder="Description"
              ref={descriptionInput}
            />
          </tr>
        </form>
        <div className="popUpButtons">
          <button onClick={submitHandler}>Submit</button>
          <button
            onClick={() => {
              setPopUp(false);
            }}
          >
            Cancel
          </button>
        </div>
      </CommunityPopUp>
    </div>
  );
};

export default AddPost;
