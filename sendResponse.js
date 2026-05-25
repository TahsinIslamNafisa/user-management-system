// ═══════════════════════════════════════════════════════════
//  utils/sendResponse.js  —  Uniform JSON Response Helper
// ═══════════════════════════════════════════════════════════

/**
 * Sends a standardised JSON response.
 *
 * @param {import('express').Response} res
 * @param {number}  statusCode  HTTP status code
 * @param {string}  message     Human-readable message
 * @param {*}       [data]      Optional payload
 */
const sendResponse = (res, statusCode, message, data = null) => {
  const body = { success: true, message };
  if (data !== null) body.data = data;
  return res.status(statusCode).json(body);
};

module.exports = sendResponse;
