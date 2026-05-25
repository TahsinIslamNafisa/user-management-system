// ═══════════════════════════════════════════════════════════
//  utils/logger.js  —  Winston Logger
// ═══════════════════════════════════════════════════════════

const { createLogger, format, transports } = require("winston");
const path = require("path");

const { combine, timestamp, printf, colorize, errors } = format;

const logFormat = printf(({ level, message, timestamp: ts, stack }) =>
  stack
    ? `${ts} [${level}]: ${message}\n${stack}`
    : `${ts} [${level}]: ${message}`
);

const logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "warn" : "debug",
  format: combine(
    errors({ stack: true }),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  transports: [
    // Console — colourised in development
    new transports.Console({
      format: combine(colorize(), timestamp({ format: "HH:mm:ss" }), logFormat),
    }),
    // Persistent error log
    new transports.File({
      filename: path.join("logs", "error.log"),
      level: "error",
    }),
    // Combined log
    new transports.File({
      filename: path.join("logs", "combined.log"),
    }),
  ],
});

module.exports = logger;
