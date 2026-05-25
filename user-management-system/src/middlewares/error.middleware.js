// ═══════════════════════════════════════════════════════════
//  middlewares/error.middleware.js  —  Global Error Handler
// ═══════════════════════════════════════════════════════════

const logger = require("../utils/logger");

const errorHandler = (err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  logger.error(`[${statusCode}] ${message}`);

  if (err.name === "CastError") {
    return res.status(400).json({ success: false, message: "Invalid resource ID." });
  }
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({ success: false, message: `${field} already exists.` });
  }
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({ success: false, message: "Invalid token." });
  }
  if (err.name === "TokenExpiredError") {
    return res.status(401).json({ success: false, message: "Token expired." });
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
