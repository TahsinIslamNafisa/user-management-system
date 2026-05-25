// ═══════════════════════════════════════════════════════════
//  controllers/user.controller.js  —  Request Handlers
// ═══════════════════════════════════════════════════════════

const asyncHandler = require("../utils/asyncHandler");
const sendResponse = require("../utils/sendResponse");

// ╔══════════════════════════════════════════════════════════╗
//  CREATE USER
//  POST /api/users/create-user
// ╚══════════════════════════════════════════════════════════╝
exports.createUser = asyncHandler(async (_req, res) => {
  sendResponse(res, 201, "User created successfully");
});

// ╔══════════════════════════════════════════════════════════╗
//  READ USER
//  GET /api/users/read-user
// ╚══════════════════════════════════════════════════════════╝
exports.readUser = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User read successfully");
});

// ╔══════════════════════════════════════════════════════════╗
//  UPDATE USER
//  PUT /api/users/update-user
// ╚══════════════════════════════════════════════════════════╝
exports.updateUser = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User updated successfully");
});

// ╔══════════════════════════════════════════════════════════╗
//  DELETE USER
//  DELETE /api/users/delete-user
// ╚══════════════════════════════════════════════════════════╝
exports.deleteUser = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User deleted successfully");
});

// ╔══════════════════════════════════════════════════════════╗
//  GET ALL USERS
//  GET /api/users/all-users
// ╚══════════════════════════════════════════════════════════╝
exports.getAllUsers = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "All users fetched successfully");
});

// ╔══════════════════════════════════════════════════════════╗
//  GET USER BY ID
//  GET /api/users/user/:id
// ╚══════════════════════════════════════════════════════════╝
exports.getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  sendResponse(res, 200, "User fetched by ID", { requestedId: id });
});

// ╔══════════════════════════════════════════════════════════╗
//  USER LOGIN
//  POST /api/users/login
// ╚══════════════════════════════════════════════════════════╝
exports.loginUser = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User login successful");
});

// ╔══════════════════════════════════════════════════════════╗
//  USER LOGOUT
//  POST /api/users/logout
// ╚══════════════════════════════════════════════════════════╝
exports.logoutUser = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User logout successful");
});

// ╔══════════════════════════════════════════════════════════╗
//  CHANGE PASSWORD
//  PUT /api/users/change-password
// ╚══════════════════════════════════════════════════════════╝
exports.changePassword = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "Password changed successfully");
});

// ╔══════════════════════════════════════════════════════════╗
//  UPDATE PROFILE
//  PUT /api/users/update-profile
// ╚══════════════════════════════════════════════════════════╝
exports.updateProfile = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User profile updated successfully");
});

// ╔══════════════════════════════════════════════════════════╗
//  MAKE ADMIN
//  PUT /api/users/make-admin/:id
// ╚══════════════════════════════════════════════════════════╝
exports.makeAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;
  sendResponse(res, 200, "User made admin successfully", { userId: id });
});

// ╔══════════════════════════════════════════════════════════╗
//  REMOVE ADMIN
//  PUT /api/users/remove-admin/:id
// ╚══════════════════════════════════════════════════════════╝
exports.removeAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;
  sendResponse(res, 200, "Admin role removed successfully", { userId: id });
});

// ╔══════════════════════════════════════════════════════════╗
//  SEARCH USERS
//  GET /api/users/search
// ╚══════════════════════════════════════════════════════════╝
exports.searchUsers = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User search completed successfully");
});

// ╔══════════════════════════════════════════════════════════╗
//  FILTER USERS
//  GET /api/users/filter
// ╚══════════════════════════════════════════════════════════╝
exports.filterUsers = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "User filter completed successfully");
});

// ╔══════════════════════════════════════════════════════════╗
//  BLOCK USER
//  PATCH /api/users/block-user/:id
// ╚══════════════════════════════════════════════════════════╝
exports.blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  sendResponse(res, 200, "User blocked successfully", { userId: id });
});

// ╔══════════════════════════════════════════════════════════╗
//  UNBLOCK USER
//  PATCH /api/users/unblock-user/:id
// ╚══════════════════════════════════════════════════════════╝
exports.unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  sendResponse(res, 200, "User unblocked successfully", { userId: id });
});

// ╔══════════════════════════════════════════════════════════╗
//  VERIFY EMAIL
//  POST /api/users/verify-email
// ╚══════════════════════════════════════════════════════════╝
exports.verifyEmail = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "Email verified successfully");
});

// ╔══════════════════════════════════════════════════════════╗
//  RESEND VERIFICATION
//  POST /api/users/resend-verification
// ╚══════════════════════════════════════════════════════════╝
exports.resendVerification = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "Verification email resent");
});

// ╔══════════════════════════════════════════════════════════╗
//  UPLOAD PROFILE PICTURE
//  POST /api/users/upload-profile-picture
// ╚══════════════════════════════════════════════════════════╝
exports.uploadProfilePicture = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "Profile picture uploaded successfully");
});

// ╔══════════════════════════════════════════════════════════╗
//  DELETE ACCOUNT
//  DELETE /api/users/delete-account
// ╚══════════════════════════════════════════════════════════╝
exports.deleteAccount = asyncHandler(async (_req, res) => {
  sendResponse(res, 200, "Account deleted successfully");
});
