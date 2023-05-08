import express from "express";

const chatRouter = express.Router();

chatRouter.post("/");
chatRouter.get("/:id");

export default chatRouter;
