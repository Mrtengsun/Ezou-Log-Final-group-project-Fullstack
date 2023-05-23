import express from "express";
import { createChat } from "../controllers/chatController.js";
const chatRouter = express.Router();

chatRouter.post("/", createChat);
chatRouter.get("/:id");

export default chatRouter;
