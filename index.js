const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send();
});

app.listen(5000, (err) => {
  if (err) {
    console.log("Something went wrong");
  }
  console.log("Yess");
});
