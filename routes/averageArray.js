const express = require("express");
const { averageArraySchema } = require("../schema");
const { validate } = require("../middleware/validation");
const router = express.Router();

router.post("/", validate(averageArraySchema), (req, res) => {
  const { numbers } = req.body;
  const total = numbers.reduce((sum, n) => sum + n, 0);
  const avg = total / numbers.length;
  res.json({ average: avg });
});

module.exports = router;
