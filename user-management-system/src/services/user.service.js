// ═══════════════════════════════════════════════════════════
//  services/user.service.js  —  Business Logic Layer
// ═══════════════════════════════════════════════════════════

const User = require("../models/user.model");

class UserService {
  async createUser(data) {
    return User.create(data);
  }
  async readUser(query) {
    return User.findOne(query);
  }
  async getAllUsers() {
    return User.find();
  }
  async getUserById(id) {
    return User.findById(id);
  }
  async updateUser(id, data) {
    return User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }
  async deleteUser(id) {
    return User.findByIdAndDelete(id);
  }
  async searchUsers(keyword) {
    return User.find({
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { email: { $regex: keyword, $options: "i" } },
      ],
    });
  }
  async filterUsers(filters) {
    return User.find(filters);
  }
}

module.exports = new UserService();
