const { z } = require("zod");

const sumNumbersSchema = z.object({
  num1: z.string().transform((val) => parseFloat(val)),
  num2: z.string().transform((val) => parseFloat(val)),
});
const averageArraySchema = z.object({
  numbers: z.array(z.number()),
});

module.exports = {
  sumNumbersSchema,
  averageArraySchema,
};
