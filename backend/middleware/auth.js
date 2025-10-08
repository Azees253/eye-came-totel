import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ succes: false, message: "Please account Login First" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!req.body) {
      req.body = {};
    }
    req.body._id = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Invalid Token" });
  }
};

export default authMiddleware;
