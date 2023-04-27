import User from "../models/UserModel.js";
import sendEmail from "../middlewares/sendEmail.js";
import creatErr from "http-errors";
import jwt from "jsonwebtoken";
import QRCode from "qrcode";
import crypto from "crypto";

const register = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    const qrCode = await QRCode.toDataURL(JSON.stringify(newUser));
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
    next(creatErr(401, error));
  }
};
const conformedEmail = async (req, res, next) => {
  try {
    const updateUser = await User.findOneAndUpdate(
      { _id: req.query.userId },
      { verified: true }
    );

    res.redirect("https://##########/login");
  } catch (error) {
    next(creatErr(401, error));
  }
};

const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user with the matching email
    const loginUser = await User.findOne({ email });
    if (!loginUser) return next(creatErr(401, " InvInvalid email or password"));

    // Check if the password is correct
    const isMatch = await loginUser.comparePassword(password);
    if (!isMatch) {
      return next(creatErr(401, "InvInvalid email or password"));
    }
    if (!loginUser.verified)
      return next(creatErr(404, "please conform your email"));
    const createToken = jwt.sign({ id: loginUser._id }, process.env.SECRET, {
      expiresIn: `${60 * 24}m`,
    });

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
const sendCode = async (req, res, next) => {
  try {
    // Check if user with this email exists in the database
    const user = await User.findOne({ email: req.params.email });

    if (!user) {
      return next(creatErr(401, "No user with that email address"));
    }

    // Generate a unique random 5 digital number for the password reset email
    const randomInt = (crypto.randomBytes(4).readUInt32BE(0) % 99999) + 10000;

    const sent = await sendEmail(
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
const addNewPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Password reset token is invalid or has expired" });
    }
    // Update user's password in the database
    user.password = req.body.password;
    await user.save();
    console.log(user);
    res.json({ successfull: true });
  } catch (error) {
    next(creatErr(401, error.message));
  }
};

export { register, conformedEmail, logIn, update, sendCode, addNewPassword };
