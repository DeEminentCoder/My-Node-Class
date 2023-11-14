const express = require("express");
const app = express();
const ejs = require("ejs");
app.use(express.urlencoded({extended:true}))
let allstudents = []
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  // res.send([{ fn: "Sola", ln: "Kunle" }]);
  // res.sendFile(__dirname+"/index.html")
 
  res.render("index", {
    myName: "Kun",
    allstudents: [
      { firstname: "Kun", lastname: "Sade" },
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

app.post("/register",(req,res)=>{
  res.send("Wow")
  allstudents.push(req.body)
  console.log(req.body);
})
app.listen(5000, (err) => {
  if (err) {
    console.log("Something went wrong");
  }
  console.log("Yess");
});
