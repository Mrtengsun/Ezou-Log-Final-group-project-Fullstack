import User from "../models/User.js";
import sendEmail from "../middlewares/sendEmail.js";
import createErr from "http-errors";
import jwt from "jsonwebtoken";
import checkAuth from "../middlewares/CheckAuth.js";

const register = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
    // sending email to conformed the user email
    const sendingEmail = await sendEmail(
      req.body.email,
      "verify Your email",
      `
        <h1>Verify Your Email</h1>
        <h2>Dear "${req.body.firstName}"</h2>
        <h4>This is my first Full Stack Project, Thanks for your visit </4>
        <p>
    
            This email '${req.body.email}', is used to register in our app, <br>
            please visit <a href="https://${"we need to add correct local host "}/api/user/register?userId=${
        newUser._id
      }">this link</a> To verify your email.
            <br>
            If you not the owner, please ignore the message
            <br>
            Thank You.
        </p>
        `
    );
  } catch (error) {
    next(createErr(401, error));
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
    next(createErr(401, error));
  }
};

const logIn = async (req, res, next) => {
  try {
    const loginUser = await User.login(req.body);
    if (!loginUser) return next(createErr(401, "Invalid Data"));
    if (!loginUser.verified)
      return next(createErr(404, "please conform your email"));
    const createToken = jwt.sign({ id: loginUser._id }, process.env.SECRET, {
      expiresIn: `${60 * 24}m`,
    });

    res.send({ user: loginUser, token: createToken });
  } catch (error) {
    next(createErr(401, error));
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
    res.send(userUpdate);
  } catch (error) {
    next(createErr(401, error));
  }
};

export { register, conformedEmail, logIn, update };
