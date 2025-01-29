const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

// API Endpoint
app.get("/", (req, res) => {
  res.json({
    email: "developersholotan@gmailcom",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Mj-devs/Backend-dev",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
