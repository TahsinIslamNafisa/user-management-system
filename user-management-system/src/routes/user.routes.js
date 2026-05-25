// ═══════════════════════════════════════════════════════════
//  routes/user.routes.js  —  User API Route Definitions
// ═══════════════════════════════════════════════════════════

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// ── Auth & Account ─────────────────────────────────────────
router.post("/create-user",            userController.createUser);
router.post("/login",                  userController.loginUser);
router.post("/logout",                 userController.logoutUser);
router.delete("/delete-account",       userController.deleteAccount);

// ── Read / Fetch ───────────────────────────────────────────
router.get("/read-user",               userController.readUser);
router.get("/all-users",               userController.getAllUsers);
router.get("/user/:id",                userController.getUserById);

// ── Search & Filter ────────────────────────────────────────
router.get("/search",                  userController.searchUsers);
router.get("/filter",                  userController.filterUsers);

// ── Update Operations ──────────────────────────────────────
router.put("/update-user",             userController.updateUser);
router.put("/change-password",         userController.changePassword);
router.put("/update-profile",          userController.updateProfile);
router.put("/make-admin/:id",          userController.makeAdmin);
router.put("/remove-admin/:id",        userController.removeAdmin);

// ── Delete ─────────────────────────────────────────────────
router.delete("/delete-user",          userController.deleteUser);

// ── Block / Unblock ────────────────────────────────────────
router.patch("/block-user/:id",        userController.blockUser);
router.patch("/unblock-user/:id",      userController.unblockUser);

// ── Email Verification ─────────────────────────────────────
router.post("/verify-email",           userController.verifyEmail);
router.post("/resend-verification",    userController.resendVerification);

// ── Profile Picture ────────────────────────────────────────
router.post("/upload-profile-picture", userController.uploadProfilePicture);

module.exports = router;
