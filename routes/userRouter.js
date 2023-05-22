import express from "express";
import multer from "multer";

import {
  conformedEmail,
  logIn,
  register,
  update,
  sendCode,
  addNewPassword,
  updatePassword,
  profilePicture,
  updateProfilePicture,
  thirdPartylogin,
} from "../controllers/userController.js";
import checkAuth from "../middlewares/CheckAuth.js";
import emailValidator from "../middlewares/EmailValidator.js";
const router = express.Router();
const upload = multer({ dest: "uploads/" });

const fotoProfileMiddleWare = upload.fields([
  { name: "profilePicture", maxCount: 1 },
]);
router.post("/register", emailValidator, register);

router.get("/register", conformedEmail);

router.post("/thirdpartylogin",thirdPartylogin);

router.post("/login", logIn);
router.put("/update", checkAuth, update);
router.get("/send-code/:email", sendCode);
router.post("/reset-password", addNewPassword);
router.put("/update-password/:id", updatePassword);
router.get("/profile-picture/:id", profilePicture);
router.put(
  "/update-profile-picture/:id",
  fotoProfileMiddleWare,
  updateProfilePicture
);
export default router;
