const express = require("express");
const app = express();
app.get("/", (req, res) => {
  // res.send([{ fn: "Sola", ln: "Kunle" }]);
  res.sendFile()
});
app.get("/about", (req, res) => {
  res.send("No error");
});

app.listen(5000, (err) => {
  if (err) {
    console.log("Something went wrong");
  }
  console.log("Yess");
});
