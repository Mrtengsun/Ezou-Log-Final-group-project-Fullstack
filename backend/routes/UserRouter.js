import express from "express";
import {
  conformedEmail,
  logIn,
  register,
} from "../controllers/UserController.js";

const router = express.Router();

router.post("/register", register);

router.get("/register", conformedEmail);

router.post("/login", logIn);

export default router;
