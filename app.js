const express = require("express");

const app = express();

const port = 3040;

app.get("/", (req, res) => {
  res.send("GitHub Actions are working fine");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

