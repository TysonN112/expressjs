const { z } = require("zod");

const validate = (schema) => {
  return (req, res, next) => {
    try {
      const isBody = req.body && req.body.numbers;
      const dataToValidate = isBody ? req.body : req.query;
      schema.parse(dataToValidate);
      next();
    } catch (error) {
      res.status(400).json({ error: "Invalid Input" });
    }
  };
};
module.exports = { validate };
