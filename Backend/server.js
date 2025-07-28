const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 👉 Direct MongoDB connect (no .env)
mongoose.connect("mongodb://127.0.0.1:27017/netflixDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log("❌ MongoDB Error:", err));

// Example route
app.get("/", (req, res) => {
  res.send("Hello Backend Works!");
});

const authRoute = require("./routes/auth");
app.use("/api/auth", authRoute);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});