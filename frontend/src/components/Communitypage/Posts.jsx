import React, { useContext } from "react";
import { CommunityContext } from "../contexts/communityContext";
import "./post.scss";

const Posts = () => {
  const {
    thumbsUp,
    setThumbsUp,
    comment,
    setComment,
    commentSum,
    setCommentSum,
    thumbSum,
    setThumbSum,
  } = useContext(CommunityContext);

  const thumbsHandler = () => {
    const sum = "";
    if (!thumbsUp) {
      setThumbsUp(true);

      setThumbSum(sum + 1);
    } else {
      setThumbsUp(false);
    }
  };
  const commentsHandler = () => {
    const sum = "";
    if (!comment) {
      setComment(true);
      setCommentSum(sum + 1);
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
          <h3>Topic</h3>
          <p>description</p>
        </div>
        <div className="clicks">
          <div onClick={thumbsHandler}>
            {thumbsUp ? (
              <i className="fa-solid fa-thumbs-up">
                <span style={{ marginLeft: "0.5rem", fontSize: "large" }}>
                  {thumbSum}
                </span>
              </i>
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
            <textarea placeholder="Leave a comment"></textarea>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Posts;
