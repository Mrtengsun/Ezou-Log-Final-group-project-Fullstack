import "./addpost.scss";
import { useContext, useEffect } from "react";
import { CommunityContext } from "../contexts/communityContext.js";
import CommunityPopUp from "./CommunityPopUp.jsx";
import Posts from "./Posts";
import { CreateaccountCTX } from "../contexts/CreateaccountCTX";
const AddPost = () => {
  const {
    popUp,
    setPopUp,
    titleInput,
    descriptionInput,
    setAddPost,
    thumbSum,
    sendComment,
    getPost,
    setGetPost,
  } = useContext(CommunityContext);
  const { user, token } = useContext(CreateaccountCTX);
  const submitHandler = (e) => {
    e.preventDefault();
    const addPostData = {
      topic: titleInput.current.value,
      description: descriptionInput.current.value,
    };
    setAddPost((data) => [...data, addPostData]);
    console.log(addPostData);
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(addPostData),
    };

    fetch("http://localhost:5000/api/community/", config)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err, "coming from catch communityPopUp");
      }, []);
    setPopUp(false);
  };

  useEffect(() => {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch("http://localhost:5000/api/community/", config)
      .then((response) => response.json())
      .then((result) => setGetPost(result))
      .catch((err) => console.log(err));
  }, []);

  const addPostHandler = () => {
    setPopUp(true);
  };

  return (
    <div className="addpost">
      <div>
        <button id="addbutton" onClick={addPostHandler}>
          <i className="fa-solid fa-plus fa-xs" />
          ADD POST
        </button>
      </div>
      <CommunityPopUp trigger={popUp} setTrigger={setPopUp}>
        <form className="communityForm">
          <h1>Ask me</h1>

          <div className="communityInput">
            {/* <label className="inputLabel">Title</label> */}
            <input type="text" placeholder="Title" ref={titleInput} />
          </div>
          <div className="communityTextarea">
            {/* <label className="inputLabel">Description</label> */}
            <textarea
              type="text"
              placeholder="Description"
              ref={descriptionInput}
            />
          </div>
        </form>
        <div className="popUpButtons">
          <button className="popUpButton" onClick={submitHandler}>
            Submit
          </button>
          <button
            className="popUpButton"
            onClick={() => {
              setPopUp(false);
            }}
          >
            Cancel
          </button>
        </div>
      </CommunityPopUp>
      <div className="post-section" id="p-section">
        <Posts />
      </div>
    </div>
  );
};

export default AddPost;
