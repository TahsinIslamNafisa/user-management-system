// ═══════════════════════════════════════════════════════════
//  utils/asyncHandler.js  —  Async Error Wrapper
// ═══════════════════════════════════════════════════════════

/**
 * Wraps async route handlers so that any rejected promise is
 * automatically forwarded to Express's next(err) error handler —
 * eliminating repetitive try/catch in every controller.
 *
 * Usage:
 *   exports.myHandler = asyncHandler(async (req, res) => { ... });
 */
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
