const { z } = require("zod");

const sumNumbersSchema = z.object({
  num1: z.string(),
  num2: z.string(),
});
const averageArraySchema = z.object({
  numbers: z.array(z.number()),
});

module.exports = {
  sumNumbersSchema,
  averageArraySchema,
};
