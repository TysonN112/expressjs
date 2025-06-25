const express = require("express");
const { validate } = require("../middleware/validation");
const { sumNumbersSchema } = require("../schema");
const router = express.Router();

router.get("/", validate(sumNumbersSchema), (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  res.json({ sum: num1 + num2 });
});

module.exports = router;