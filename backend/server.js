import express from "express";
import logger from "morgan";
import { config } from "dotenv";
import cors from "cors";
import Connect from "./lib/db.js";
import communityRouter from "./routes/communityRouter.js";
import userRouter from "./routes/userRouter.js";
import checkAuth from "./middlewares/CheckAuth.js";
config();
Connect();
// const { PORT } = process.env;
const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());
server.use(logger("dev"));
server.use(express.urlencoded({ extended: false }));
server.use(cors());
///middleware
//routers
server.use("/api/user", userRouter);
server.use("/api/community", checkAuth, communityRouter);

//  handle Error
server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send(err || { message: "Something went Wrong!" });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
