const express = require("express");
const app = express();

console.log("Starting server...");
const sumNumberRoutes = require("./routes/sumNumbers");
const averageArrayRoutes = require("./routes/averageArray");

app.use(express.json());
app.use("/sum", sumNumberRoutes);
app.use("/average", averageArrayRoutes);

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
