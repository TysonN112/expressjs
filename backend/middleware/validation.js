const { z } = require("zod");

const validate = (schema) => {
  return (req, res, next) => {
    try {
      const data = req.method === "POST" ? req.body : req.query;
      schema.parse(data);
      next();
    } catch (error) {
      res.status(400).json({ error: "Invalid Input" });
    }
  };
};
module.exports = { validate };
