import creatErr from "http-errors";
import jwt from "jsonwebtoken";

const checkAuth = (req, res, next) => {
  try {
    const tokenRaw = req.headers.authorization;
    if (!tokenRaw) {
      res.status(401).send(" access not allowed!!");
      return;
    }

    const token = tokenRaw.split(" ")[1];

    if (!token) {
      res.status(401).send(" access not allowed!!");
      return;
    }

    jwt.verify(token, process.env.SECRET, (err, payload) => {
      if (err) {
        res.status(401).send({ message: err.message });
        return;
      }
      //  making a userId
      req.userId = payload.id;

      next();
    });
  } catch (error) {
    next(creatErr(401, error));
  }
};

export default checkAuth;
