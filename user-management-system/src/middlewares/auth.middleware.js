// ═══════════════════════════════════════════════════════════
//  middlewares/auth.middleware.js  —  JWT Authentication
// ═══════════════════════════════════════════════════════════

const jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");

exports.protect = asyncHandler(async (req, _res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("Authentication required. Please log in.", 401));
  }
  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.userId = decoded.id;
  req.userRole = decoded.role;
  next();
});

exports.restrictTo = (...roles) =>
  (req, _res, next) => {
    if (!roles.includes(req.userRole)) {
      return next(new AppError("You do not have permission to perform this action.", 403));
    }
    next();
  };
