import express from "express";
import {
  conformedEmail,
  logIn,
  register,
  update,
} from "../controllers/UserController.js";
import checkAuth from "../middlewares/CheckAuth.js";

const router = express.Router();

router.post("/register", register);

router.get("/register", conformedEmail);

router.post("/login", logIn);
router.put("/update", checkAuth, update);

export default router;
