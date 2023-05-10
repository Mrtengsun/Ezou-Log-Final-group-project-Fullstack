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
    sendComment,
    setSendComment,
    commentInput,
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
  const topicHandler = () => {
    const open = document.getElementById("pp");
    const openTop = document.getElementById("left");
    const openBtm = document.getElementById("right");
    open.classList.remove("post");
    open.classList.add("post2");
    openTop.classList.remove("section-left");
    openTop.classList.add("section-top");
    openBtm.classList.remove("section-right");
    openBtm.classList.add("section-btm");
  };

  const sendCommentHandler = () => {
    if (commentInput) {
      const commentData = {
        author: "musterfrau",
        comment: commentInput.current.value,
      };
      setSendComment((comment) => [...comment, commentData]);
    }
  };
  return (
    <div className="post" id="pp">
      <div className="section-left" id="left">
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
      <div className="section-right" id="right">
        <div>
          <h3 onClick={topicHandler}>Topic</h3>

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
        {sendComment
          ? sendComment.map((item, i) => {
              return (
                <div className={i}>
                  <div>
                    <h4>{item.author}</h4>
                    <p>{item.comment}</p>
                  </div>
                  {/* <div className="clicks">
                    <div onClick={thumbsHandler}>
                      {thumbsUp ? (
                        <i className="fa-solid fa-thumbs-up">
                          <span
                            style={{ marginLeft: "0.5rem", fontSize: "large" }}
                          >
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
                  </div> */}
                </div>
              );
            })
          : ""}
        {comment ? (
          <div className="commented">
            <textarea
              placeholder="Leave a comment"
              ref={commentInput}
              onKeyDown={(e) => e.key === "Enter" && sendCommentHandler()}
            ></textarea>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Posts;
