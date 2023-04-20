import express from "express";
import Community from "../models/CommunityModel.js";
import creatErr from "http-errors";
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
} from "../controllers/communityController.js";

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

router.delete("/:id", (req, res) => {
  res.send("can you delete");
});
export default router;
