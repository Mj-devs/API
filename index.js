const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());


app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    email: "developersholotan@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Mj-devs/Backend-dev",
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
