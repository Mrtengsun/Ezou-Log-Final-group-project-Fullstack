import React, { useContext } from "react";
import { CommunityContext } from "../contexts/communityContext";
import "./post.scss";

const Posts = () => {
  const { thumbsUp, setThumbsUp, comment, setComment } =
    useContext(CommunityContext);

  const thumbsHandler = () => {
    if (!thumbsUp) {
      setThumbsUp(true);
    } else {
      setThumbsUp(false);
    }
  };
  const commentsHandler = () => {
    const addComment = document.createElement("div");
    addComment.append(<p>this is a comment</p>);
    if (!comment) {
      setComment(true);
    } else {
      setComment(false);
    }
  };
  return (
    <div className="post">
      <div className="section-left">
        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLYSDVq9-CIJU69RPUN7o5f8NzRq0oMVsvmzAtv5J-WcPsCeB8sRlGETiuNfkxhTnwhc&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <h3>User Name</h3>
          <p>Avatar Musterman</p>
        </div>
      </div>
      <div className="section-right">
        <div>
          <h3>topic</h3>
          <p>description</p>
        </div>
        <div className="clicks">
          <div onClick={thumbsHandler}>
            {thumbsUp ? (
              <i className="fa-solid fa-thumbs-up"></i>
            ) : (
              <i className="fa-regular fa-thumbs-up"></i>
            )}
          </div>

          <div onClick={commentsHandler}>
            {comment ? (
              <i className="fa-solid fa-comment"></i>
            ) : (
              <i className="fa-regular fa-comment"></i>
            )}
          </div>
        </div>
        {comment ? (
          <div className="commented">
            <input type="text" placeholder="Leave a comment" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Posts;
