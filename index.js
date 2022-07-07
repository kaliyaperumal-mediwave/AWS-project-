const express = require("express");

const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.send("Hai iam Kaliyaperumal from karaikal");
});

app.get("/yummy", (req, res) => {
  res.send("Welcome to Yummy World");
});

app.get("/exit", (req, res) => {
  res.send("Thank Youuu!!!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
