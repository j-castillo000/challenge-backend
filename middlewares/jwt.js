const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No autorizado",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "No autorizado",
      error,
    });
  }
};
module.exports = { validateToken };
