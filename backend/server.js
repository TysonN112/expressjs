const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  next();
});

const sumNumberRoutes = require("./routes/sumNumbers");
const averageArrayRoutes = require("./routes/averageArray");

app.use("/sum", sumNumberRoutes);
app.use("/average", averageArrayRoutes);

app.post("/test", (req, res) => {
  res.json({ message: "Test POST works!" });
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
