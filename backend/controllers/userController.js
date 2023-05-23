import User from "../models/UserModel.js";
import sendEmail from "../middlewares/sendEmail.js";
import creatErr from "http-errors";
import jwt from "jsonwebtoken";
import QRCode from "qrcode";

import path from "path";
import { compare, hash } from "bcrypt";

// register a new user
const register = async (req, res, next) => {
  try {
    if (req.body.email === "mrtengsun@gmail.com") {
      req.body.role = "admin";
    }
    const digits = "0123456789";
    let cardId = "";

    for (let i = 1; i < 20; i++) {
      if (i > 0 && i % 5 === 0) {
        cardId += "-";
      } else {
        const randomIndex = Math.floor(Math.random() * digits.length);
        cardId += digits[randomIndex];
      }
    }
    req.body.cardId = cardId;
    const hashPassword = await hash(req.body.password, 10);
    req.body.password = hashPassword;
    const newUser = await User.create(req.body);

    const qrCode = await QRCode.toDataURL(JSON.stringify(newUser._id));
    newUser.qrCode = qrCode;
    await newUser.save();

    // sending email to conformed the user email
    const sendingEmail = await sendEmail(
      req.body.email,
      "verify Your email",
      `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
      <h1 style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Verify Your Email</h1>
      </div>
      <h2 style="font-size:1.1em">Dear "${req.body.firstName}"</h2>
      <h4>This is Our group Full Stack Project, Thanks for your visit </4>
      <p>
      
      This email '${req.body.email}', is used to register in our app, <br>
      please visit <a style="background:  rgba(14, 199, 206, 0.644);margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;" href="http://localhost:5000/api/user/register?userId=${newUser._id}">this link</a> To verify your email.
      <br>
      If you not the owner, please ignore the message
      
      
      </p>
      <p style="font-size:0.9em;">Best Regards,<br />Ezo Group</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p> straße name 56</p>
      <p>1600 Berlin</p>
      <p>Germany</p>
      </div>
      </div>
      </div>`
    );

    res.send(newUser);
  } catch (error) {
    console.log(error);
    next(creatErr(401, error));
  }
};
const conformedEmail = async (req, res, next) => {
  console.log("object");
  try {
    const updateUser = await User.findOneAndUpdate(
      { _id: req.query.userId },
      { verified: true }
    );

    res.redirect("http://localhost:3000/login");
  } catch (error) {
    next(creatErr(401, error));
  }
};
// loging the user and creating token
const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user with the matching email
    const loginUser = await User.findOne({ email });

    if (!loginUser) return next(creatErr(401, " InvInvalid email or "));

    // Check if the password is correct

    const isMatch = await compare(password, loginUser.password);
    console.log(" isMactch:", isMatch, password);
    if (!isMatch) {
      return next(creatErr(401, "InvInvalid email or password"));
    }
    if (!loginUser.verified)
      return next(creatErr(404, "please conform your email"));
    const createToken = jwt.sign({ id: loginUser._id }, process.env.SECRET);
    const user = loginUser;
    delete user.password;
    req.session.user = user;

    res.send({ user: loginUser, token: createToken });
  } catch (error) {
    next(creatErr(401, error));
  }
};

const update = async (req, res, next) => {
  try {
    const userUpdate = await User.findByIdAndUpdate(
      { _id: req.userId },
      req.body,
      {
        new: true,
      }
    );
    const qrCode = await QRCode.toDataURL(JSON.stringify(userUpdate));
    userUpdate.qrCode = qrCode;
    res.send(userUpdate);
  } catch (error) {
    next(creatErr(401, error));
  }
};
// sending code to user email to recover his password
const sendCode = async (req, res, next) => {
  console.log(req.body);

  try {
    // Check if user with this email exists in the database
    const user = await User.findOne({ email: req.params.email });

    if (!user) {
      return next(creatErr(401, "No user with that email address"));
    }

    // Generate a unique random 5 digital number for the password reset email
    const randomInt = Math.floor(Math.random() * 9000) + 1000;

    const sentCode = await sendEmail(
      req.params.email,
      "Reset your Password",
      `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
       <div style="margin:50px auto;width:70%;padding:20px 0">
       <div style="border-bottom:1px solid #eee">
       <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">EZOU LOG</a>
       </div>
       <p style="font-size:1.1em">Hey ${user.fullName},</p>
       <p>Thank you for choosing our App. Use the following Code to complete your Password Recovery Procedure. code is valid for one time and will expires in 20 minutes</p>
       <h2 style="background:  rgba(14, 199, 206, 0.644);margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${randomInt}</h2>
       <p style="font-size:0.9em;">Best Regards,<br />EZOU LOG</p>
       <hr style="border:none;border-top:1px solid #eee" />
       <div style="padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
       <p>laden straße 56</p>
       <p>1600 Berlin</p>
       <p>Germany</p>
       </div>
       </div>
       </div>`
    );

    res.json({ randomInt });
  } catch (error) {
    next(creatErr(407, error.message));
  }
};
// changing the forgotten password with new one
const addNewPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Password reset token is invalid or has expired" });
    }
    // Update user's password in the database
    const hashPassword = await hash(req.body.password, 10);
    user.password = hashPassword;
    await user.save();
    console.log(user);
    res.json({ successfull: true });
  } catch (error) {
    next(creatErr(401, error.message));
  }
};
// Update password
const updatePassword = async (req, res) => {
  const { id } = req.params;
  const { oldPassword, newPassword } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Check if old password is correct
    const isPasswordCorrect = await compare(oldPassword, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }
    //  check new password length
    if (newPassword.length < 6 || newPassword.length > 20) {
      return res
        .status(400)
        .json({ message: "New password must be between 6 and 20 characters" });
    }

    // by saving its and hashing password
    const hashPassword = await hash(newPassword, 10);
    user.password = hashPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// gitting profile picture
const profilePicture = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    const fotoProfilePath = path.resolve("./", user.imgProfile.path);
    res.sendFile(fotoProfilePath);
  } catch (error) {
    next(creatErr(404, error));
  }
};
// updating the profile pictures
const updateProfilePicture = async (req, res, next) => {
  if (!req.files["profilePicture"]) {
    next(creatErr(401, "please select the file"));
    return;
  }

  try {
    const updateImg = await User.findOneAndUpdate(
      { _id: req.params.id },
      { imgProfile: req.files["profilePicture"][0] },
      { new: true }
    );

    res.send(updateImg);
  } catch (error) {
    next(creatErr(401, error));
  }
};

const thirdPartylogin = async (req, res, next) => {
  try {
    console.log(req.body);
    const findUser = await User.findOne({ email: req.body.email });
    console.log(findUser);
    if (!findUser) {
      res.status(404).send({ message: "Usre not found" });
      return;
    }
    const isMatch = await compare(req.body.password, findUser.password);

    if (!isMatch) {
      return next(creatErr(401, "InvInvalid email or password"));
    }
    if (!findUser.verified)
      return next(creatErr(404, "please conform your email"));
    const createToken = jwt.sign({ id: findUser._id }, process.env.SECRET);

    res.send({ user: findUser, token: createToken });
  } catch (error) {
    console.log(error);
  }
};

export {
  register,
  conformedEmail,
  logIn,
  update,
  sendCode,
  addNewPassword,
  updatePassword,
  profilePicture,
  updateProfilePicture,
  thirdPartylogin,
};
