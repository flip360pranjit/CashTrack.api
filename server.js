require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const connectDb = require("./config/connectDb");

const app = express();

// Connect to MongoDB Database
connectDb();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.get("/", (req, res) => {
  res.send("<h1>Hello World from Server</h1>");
});
// app.post("/api/transactions", async (req, res) => {
//   try {
//     // Get transactions
//   } catch {
//     // Error
//   }
// });

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server started succesfully on port ${PORT}`);
});
