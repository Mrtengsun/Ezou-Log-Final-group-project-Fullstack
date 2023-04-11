import { body, validationResult } from "express-validator";
import creatErr from "http-errors";
const emailValidator = async (req, res, next) => {
  await body("firstName")
    .exists()
    .withMessage("firs tname is Required")
    .trim()
    .run(req);
  await body("lastName")
    .exists()
    .withMessage("last name is Required")
    .trim()
    .run(req);
  await body("email")
    .exists()
    .withMessage("email is Required")
    .normalizeEmail()
    .isEmail()
    .withMessage("Not a valid Email!")
    .trim()
    .run(req);
  await body("password")
    .exists()
    .withMessage("password is Required")
    .isLength({ min: 6, max: 16 })
    .withMessage("password must have between 6 and 16 characters.")
    .run(req);
  await body("dateOfBirth")
    .exists()
    .withMessage("Date of birth is Required")
    .trim()
    .run(req);
  await body("placeOfBirth")
    .exists()
    .withMessage("place of birth is Required")
    .trim()
    .run(req);
  await body("gender")
    .exists()
    .withMessage("gender is Required")
    .trim()
    .run(req);
  await body("phoneNumber")
    .exists()
    .withMessage("phone Number is Required")
    .trim()
    .run(req);
  await body("profession")
    .exists()
    .withMessage("profession is Required")
    .trim()
    .run(req);

  const err = validationResult(req);
  if (err.isEmpty()) {
    next();
    return;
  }
  next(creatErr(401, err));
};

export default emailValidator;
