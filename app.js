// ═══════════════════════════════════════════════════════════
//  app.js  —  Express Application Setup
// ═══════════════════════════════════════════════════════════

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/error.middleware");
const notFound = require("./middlewares/notFound.middleware");

const app = express();

// ── Security Middlewares ───────────────────────────────────
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "*", credentials: true }));

// ── Rate Limiting ──────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { success: false, message: "Too many requests. Please try again later." },
});
app.use("/api", limiter);

// ── Body Parsers ───────────────────────────────────────────
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ── HTTP Logger ────────────────────────────────────────────
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ── Static Files (profile pictures) ───────────────────────
app.use("/uploads", express.static("uploads"));

// ── Health Check ───────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.status(200).json({ success: true, message: "Server is healthy 🚀" });
});

// ── API Routes ─────────────────────────────────────────────
app.use("/api/users", userRoutes);

// ── 404 & Error Handlers ───────────────────────────────────
app.use(notFound);
app.use(errorHandler);

module.exports = app;
