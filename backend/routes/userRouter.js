import express from "express";
import {
  conformedEmail,
  logIn,
  register,
  update,
  sendCode,
  addNewPassword,
} from "../controllers/userController.js";
import checkAuth from "../middlewares/CheckAuth.js";
import emailValidator from "../middlewares/EmailValidator.js";
const router = express.Router();

router.post("/register", emailValidator, register);

router.get("/register", conformedEmail);

router.post("/login", logIn);
router.put("/update", checkAuth, update);
router.get("/send-code/:email", sendCode);
router.post("/reset-password", addNewPassword);

export default router;
