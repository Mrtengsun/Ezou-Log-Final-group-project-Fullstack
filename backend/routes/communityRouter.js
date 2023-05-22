import express from "express";
import {
  addComment,
  addLike,
  createPost,
  deleteComment,
  deleteLike,
  getAllComment,
  getAllLike,
  getAllPosts,
  updatePost,
  deletePost,
} from "../controllers/communityController.js";
import Community from "../models/CommunityModel.js";

const router = express.Router();

router.get("/", getAllPosts);

router.post("/", createPost);

router.put("/addcomment/:id", addComment);

router.put("/addlike/:id", addLike);
router.get("/comments/:id", getAllComment);
router.get("/likes/:id", getAllLike);

router.put("/:id", updatePost);
router.delete("/deletecomment/:id/:commentId", deleteComment);
router.delete("/unlike/:id", deleteLike);

router.delete("/:id", deletePost);
export default router;
