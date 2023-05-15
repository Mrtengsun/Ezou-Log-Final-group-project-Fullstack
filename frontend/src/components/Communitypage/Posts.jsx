import React, { useContext, useEffect } from "react";

import { CommunityContext } from "../contexts/communityContext";
import { CreateaccountCTX } from "../contexts/CreateaccountCTX";
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
    addPost,
    setAddPost,
    deletePost,
    setDeletePost,
    getPost,
    setGetPost,
    likes,
    setLikes,
  } = useContext(CommunityContext);
  const { user, token } = useContext(CreateaccountCTX);

  const thumbsHandler = (item) => {
    const sum = "";

    if (!thumbsUp) {
      setThumbsUp(true);

      setThumbSum(sum + 1);
    } else {
      setThumbsUp(false);
    }

    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`http://localhost:5000/api/community/addlike/${item._id}`, config)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err, "coming from Post");
      });
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
    if (user && commentInput) {
      const commentData = {
        author: `${user.firstName} ${user.lastName}`,
        comment: commentInput.current.value,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      setSendComment((comment) => [...comment, commentData]);

      const config = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(commentData),
      };

      fetch(
        `http://localhost:5000/api/community/addcomment/${user._id}`,
        config
      )
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err, "coming from addComment");
        });
    }
  };

  const deletePostHandler = (hiding) => {
    // const deleted = getPost.filter((item) => {
    //   item._id !== deleting._id;
    // });
    //   const config = {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };

    //   fetch(
    //     `http://localhost:5000/api/community/deletecomment/${user._id}/${deleting._id}`,
    //     config
    //   )
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch((err) => {
    //       console.log(err, "coming from deleteComment");
    //     });
    if (hiding) {
      const hide = document.getElementsByClassName("post");
      console.log(hide);
    }
  };
  return (
    getPost &&
    getPost.map((item, i) => {
      return (
        <div className="post" id="pp" key={i}>
          <div className="section-left" id="left">
            <div className="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLYSDVq9-CIJU69RPUN7o5f8NzRq0oMVsvmzAtv5J-WcPsCeB8sRlGETiuNfkxhTnwhc&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <h3>{`${user.firstName} ${user.lastName}`}</h3>
            </div>
          </div>
          <div className="section-right" id="right">
            <div>
              <h3 onClick={topicHandler}>{item.topic}</h3>

              <p>{item.description}</p>
            </div>
            <div className="clicks">
              <div onClick={() => thumbsHandler(item)}>
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
                        <h4>
                          {item.author} {""}
                          <span style={{ fontSize: "small" }}>{item.time}</span>
                        </h4>

                        <p>{item.comment}</p>
                      </div>
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
          <button
            className="closeCross"
            onClick={() => deletePostHandler(item)}
          >
            X
          </button>
        </div>
      );
    })
  );
};
export default Posts;
