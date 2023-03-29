import express from "express";
import logger from "morgan";
import { config } from "dotenv";
import cors from "cors";
import Connect from "./lib/db.js";

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

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
