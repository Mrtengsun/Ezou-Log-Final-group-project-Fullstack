import express from "express";
import logger from "morgan";
import { config } from "dotenv";
import cors from "cors";
import Connect from "./lib/db.js";
import communityRouter from "./routes/communityRouter.js";
import userRouter from "./routes/userRouter.js";
import checkAuth from "./middlewares/CheckAuth.js";
import { Server } from "socket.io";
import { createServer } from "http";
import chatRouter from "./routes/chatRouter.js";
import path from "path";

config();
Connect();
// const { PORT } = process.env;
const server = express();
const port = process.env.PORT || 3000;
server.use(express.static(path.resolve("./", "build")));
server.use(express.json());
server.use(logger("dev"));
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.get("*", (req, res) => {
  const main = path.resolve("./", "build/index.html");

  res.sendFile(main);
});
///middleware
//routers
server.use("/api/user", userRouter);
server.use("/api/community", checkAuth, communityRouter);
server.use("api/chat", chatRouter);
// 404 Page Not Found
server.use("*", (req, res) => {
  res.status(404).send({ error: "Resource not found !!!" });
});
//  handle Error
server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send(err || { message: "Something went Wrong!" });
});
const app = createServer(server);
const io = new Server(app, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("made socket connection", socket.id);
  socket.on("joinRoom", (data) => {
    console.log("here", data);
    socket.join(data);
  });
  socket.on("sendMessage", (data) => {
    console.log("send", data);

    socket.to(data.room).emit("receiveMessage", data);
  });

  socket.on("disconnect", (socket) => {
    console.log("user disconnected", socket.id);
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
