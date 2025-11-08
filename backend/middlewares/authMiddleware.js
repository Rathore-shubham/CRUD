import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const header = req.header("Authorization");
  if (!header) return res.status(401).json({ message: "No token provided" });

  const token = header.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default auth;
