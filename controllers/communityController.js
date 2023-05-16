import Community from "../models/CommunityModel.js";
import creatErr from "http-errors";

const getAllPosts = async (req, res, next) => {
  try {
    const getAllPosts = await Community.find();
    res.send(getAllPosts);
  } catch (err) {
    console.log(err);
    next(creatErr(401, err));
  }
};

const createPost = async (req, res, next) => {
  try {
    const newPostCommunity = await Community.create({
      ...req.body,
      author: req.userId,
    });
    res.send(newPostCommunity);
  } catch (error) {
    console.log(error);
    next(creatErr(401, error));
  }
};

const addComment = async (req, res, next) => {
  try {
    const addComment = await Community.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { comments: { author: req.userId, ...req.body } } },
      { new: true }
    );
    res.send(addComment);
  } catch (error) {
    next(creatErr(401, error));
  }
};
const addLike = async (req, res, next) => {
  try {
    const addLike = await Community.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { likes: req.userId } },
      { new: true }
    );
    res.send(addLike);
  } catch (error) {
    next(creatErr(401, error));
  }
};
const getAllComment = async (req, res) => {
  const communityId = req.params.id;
  try {
    const community = await Community.findById(communityId).populate(
      "comments.author",
      "firstName lastName -_id"
    ); // populate the author field of comments with first and last name
    res.send([community.comments, community._id]);
  } catch (error) {
    console.error(error);
    next(creatErr(401, error));
  }
};
const getAllLike = async (req, res) => {
  const communityId = req.params.id;
  try {
    const community = await Community.findById(communityId).populate(
      "likes",
      "firstName lastName -_id"
    ); // populate the author field of comments with first and last name
    res.send([community.likes, community._id]);
  } catch (error) {
    console.error(error);
    next(creatErr(401, error));
  }
};
const updatePost = async (req, res, next) => {
  try {
    const community = req.body.community;
    const updatePost = await Community.findOneAndUpdate(
      { _id: req.params.id },
      community
    );
    res.status(201).send(updatePost);
  } catch (error) {
    next(creatErr(401, error));
  }
};
const deleteComment = async (req, res, next) => {
  try {
    const deleteComment = await Community.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { comments: { _id: req.params.commentId } } },
      { new: true }
    );
    res.send(deleteComment);
  } catch (error) {
    next(creatErr(401, error));
  }
};
const deleteLike = async (req, res, next) => {
  try {
    const deleteComment = await Community.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { likes: req.userId } },
      { new: true }
    );
    res.send(deleteComment);
  } catch (error) {
    next(creatErr(401, error));
  }
};

export {
  getAllPosts,
  createPost,
  addComment,
  addLike,
  getAllComment,
  getAllLike,
  updatePost,
  deleteComment,
  deleteLike,
};
