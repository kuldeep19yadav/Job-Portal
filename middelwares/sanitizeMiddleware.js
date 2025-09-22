// middlewares/sanitizeMiddleware.js
export default function customSanitize(req, res, next) {
  const sanitize = (obj) => {
    for (const key in obj) {
      if (key.startsWith("$") || key.includes(".")) {
        delete obj[key];
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        sanitize(obj[key]);
      }
    }
  };

  if (req.body) sanitize(req.body);
  if (req.params) sanitize(req.params);
  if (req.query) sanitize(req.query); // only read, not reassign

  next();
}
