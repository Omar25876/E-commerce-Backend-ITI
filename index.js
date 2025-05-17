require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

mongoose.connect(process.env.CONNECTION_STR).then(() => {
  console.log("DB connected successfully");
});
