const express = require("express");
const prisma = require("../lib/prisma");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { numbers } = req.body;

    if (!numbers || !Array.isArray(numbers)) {
      return res.status(400).json({ error: "numbers array is required" });
    }

    const total = numbers.reduce((sum, n) => sum + n, 0);
    const avg = total / numbers.length;

    const calculation = await prisma.calculation.create({
      data: {
        type: "AVERAGE",
        inputs: { numbers },
        result: avg,
      },
    });
    res.json({
      average: avg,
      calculation: calculation,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

module.exports = router;
