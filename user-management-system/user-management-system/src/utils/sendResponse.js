// ═══════════════════════════════════════════════════════════
//  utils/sendResponse.js  —  Uniform JSON Response Helper
// ═══════════════════════════════════════════════════════════

const sendResponse = (res, statusCode, message, data = null) => {
  const body = { success: true, message };
  if (data !== null) body.data = data;
  return res.status(statusCode).json(body);
};

module.exports = sendResponse;
