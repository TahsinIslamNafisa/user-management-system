// ═══════════════════════════════════════════════════════════
//  utils/generateToken.js  —  JWT Token Generator
// ═══════════════════════════════════════════════════════════

const jwt = require("jsonwebtoken");

/**
 * Generates a signed JWT for the given user id and role.
 *
 * @param   {string} id    MongoDB ObjectId as string
 * @param   {string} role  "user" | "admin"
 * @returns {string}       Signed JWT
 */
const generateToken = (id, role = "user") =>
  jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });

module.exports = generateToken;
