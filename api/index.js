const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.json("Test completed sucess");
});

app.post("/register", (req, res) => {});
app.listen(5100);
