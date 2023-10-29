const express = require("express");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  // res.send([{ fn: "Sola", ln: "Kunle" }]);
  // res.sendFile(__dirname+"/index.html")
  res.render("index", {
    myName: "Kun",
    allstudents: [
      { firstname: "Kun", lastname: "Saade" },
      { firstname: "Tola", lastname: "wayne" },
      { firstname: "Tom", lastname: "Vic" },
    ],
  });
});
app.get("/about", (req, res) => {
  res.send("No error");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.listen(5000, (err) => {
  if (err) {
    console.log("Something went wrong");
  }
  console.log("Yess");
});
