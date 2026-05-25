// ═══════════════════════════════════════════════════════════
//  controllers/user.controller.js  —  Request Handlers
// ═══════════════════════════════════════════════════════════

const asyncHandler = require("../utils/asyncHandler");
const sendResponse = require("../utils/sendResponse");

exports.createUser = asyncHandler(async (_req, res) => {
  sendResponse(res, 201, "User created successfully");
});

exports.readUser = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User read successfully");
});

exports.updateUser = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User updated successfully");
});

exports.deleteUser = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User deleted successfully");
});

exports.getAllUsers = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "All users fetched successfully");
});

exports.getUserById = asyncHandler(async (req, res) => {
  sendResponse(res, 200, "User fetched by ID", { requestedId: req.params.id });
});

exports.loginUser = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User login successful");
});

exports.logoutUser = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User logout successful");
});

exports.changePassword = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "Password changed successfully");
});

exports.updateProfile = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User profile updated successfully");
});

exports.makeAdmin = asyncHandler(async (req, res) => {
  sendResponse(res, 200, "User made admin successfully", { userId: req.params.id });
});

exports.removeAdmin = asyncHandler(async (req, res) => {
  sendResponse(res, 200, "Admin role removed successfully", { userId: req.params.id });
});

exports.searchUsers = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User search completed successfully");
});

exports.filterUsers = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User filter completed successfully");
});

exports.blockUser = asyncHandler(async (req, res) => {
  sendResponse(res, 200, "User blocked successfully", { userId: req.params.id });
});

exports.unblockUser = asyncHandler(async (req, res) => {
  sendResponse(res, 200, "User unblocked successfully", { userId: req.params.id });
});

exports.verifyEmail = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "Email verified successfully");
});

exports.resendVerification = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "Verification email resent");
});

exports.uploadProfilePicture = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "Profile picture uploaded successfully");
});

exports.deleteAccount = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "Account deleted successfully");
});
