// ═══════════════════════════════════════════════════════════
//  services/user.service.js  —  Business Logic Layer
// ═══════════════════════════════════════════════════════════

/**
 * This service layer sits between controllers and models.
 * In a real application, all DB operations and business logic
 * would live here. Controllers remain thin and only handle
 * HTTP request / response concerns.
 */

const User = require("../models/user.model");

class UserService {
  // ── Create ──────────────────────────────────────────────
  async createUser(data) {
    const user = await User.create(data);
    return user;
  }

  // ── Read (single) ────────────────────────────────────────
  async readUser(query) {
    return User.findOne(query);
  }

  // ── Get all ──────────────────────────────────────────────
  async getAllUsers() {
    return User.find();
  }

  // ── Get by ID ────────────────────────────────────────────
  async getUserById(id) {
    return User.findById(id);
  }

  // ── Update ───────────────────────────────────────────────
  async updateUser(id, data) {
    return User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  // ── Delete ───────────────────────────────────────────────
  async deleteUser(id) {
    return User.findByIdAndDelete(id);
  }

  // ── Search ───────────────────────────────────────────────
  async searchUsers(keyword) {
    return User.find({
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { email: { $regex: keyword, $options: "i" } },
      ],
    });
  }

  // ── Filter ───────────────────────────────────────────────
  async filterUsers(filters) {
    return User.find(filters);
  }
}

module.exports = new UserService();
