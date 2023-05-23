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
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
config();
Connect();
// const { PORT } = process.env;
const server = express();
const port = process.env.PORT || 3000;
server.set("view engine", "ejs");
server.set("views", join("./views"));
server.use(express.static(path.resolve("./", "build")));
server.use(express.json());
server.use(logger("dev"));
server.use(express.urlencoded({ extended: false }));
server.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365,
    },
  })
);
server.use(cors());

// special router for check AAuth(api)
// server.get("/checkAuth", (req, res) => {
//   // res.send("Hello");
//   // service B will be registerd first in our service
//   // servicename:dfsdf
//   // service URL
//   // service b will use it, need to be registerd in your service DB
//   // proccessing if exist & valied
//   // use Hash to encrypt the scr
//   if (req.query.scr) {
//     res.render("login", { user: req.session.user });
//   } else {
//     res.send("Not Authorized To use our Service");
//   }
// });

///middleware
//routers
server.use("/api/user", userRouter);
server.use("/api/community", checkAuth, communityRouter);
server.use("api/chat", chatRouter);

server.get("*", (req, res) => {
  //const main = path.resolve("./", "build/index.html");
  res.sendFile(join(__dirname, "./build/index.html"));
  // res.sendFile(main);
  //res.send("hallo world")
});
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
// const io = new Server(app, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

const adminSocket = {};
const io = new Server(app);
io.on("connection", (socket) => {
  // console.log("made socket connection", socket.id);

  socket.on("joinRoom", (data) => {
    console.log(
      `User isAdmin?(${
        data.isAdmin ? "Joined as an Admin" : "Joined as Normal User"
      }) id: ${data.id}`
    );
    data.isAdmin ? socket.join("admin") : socket.join(data.id);
  });
  socket.on("UserMessage", (UserMessage) => {
    console.log("UserMessage", UserMessage);
    // console.log("AdminObject", adminSocket);
    socket
      .to(UserMessage.message.role === "admin" ? UserMessage.to : "admin")
      .emit("UserMessage", UserMessage.message);
  });
  // socket.on("joinAsAdmin", (roomID) => {
  //   adminSocket[roomID.room] = socket;
  // });
  socket.on("notification", () => {
    // console.log("data", data);
    // if (data.role === "user") {
    //   socket.broadcast.emit("notification");
    // }
  });

  socket.on("sendMessage", (data) => {
    console.log(`Gotting message from ${data.room}`);
    socket.to(data.room).emit("receiveMessage", data);
  });

  socket.on("disconnect", (socket) => {
    console.log("user disconnected", socket.id);
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
