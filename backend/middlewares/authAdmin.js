import jwt from "jsonwebtoken";

// admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    let token = req.headers.atoken || req.headers.authorization;

    if (!token) {
      return res.json({ success: false, message: "Not Authorized. Login again." });
    }

    if (typeof token === "string" && token.startsWith("Bearer ")) {
      token = token.slice(7);
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET || "dev_jwt_secret");

    if (!token_decode?.admin || token_decode.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: "Not Authorized. Login again." });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;