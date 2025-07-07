const express = require("express");
const { validate } = require("../middleware/validation");
const { sumNumbersSchema } = require("../schema");
const prisma = require("../lib/prisma");

const router = express.Router();

router.get("/", validate(sumNumbersSchema), async (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const sum = num1 + num2;

  //save into database
  await prisma.calculation.create({
    data: {
      type: "SUM",
      inputs: { num1, num2 },
      result: sum,
    },
  });
  res.json({ sum });
});

module.exports = router;
