// ═══════════════════════════════════════════════════════════
//  server.js  —  Application Entry Point
// ═══════════════════════════════════════════════════════════

const app = require("./src/app");
const connectDB = require("./src/config/db.config");
const logger = require("./src/utils/logger");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// ── Connect to Database then start server ──────────────────
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`✅  Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error("❌  Database connection failed:", err.message);
    process.exit(1);
  });

// ── Graceful shutdown ──────────────────────────────────────
process.on("unhandledRejection", (err) => {
  logger.error("Unhandled Rejection:", err.message);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  logger.error("Uncaught Exception:", err.message);
  process.exit(1);
});
