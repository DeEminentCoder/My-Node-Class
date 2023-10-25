const express = require("express");
const app = express();
app.get("/",(req,resp)=>{

})
app.listen(5000,(err)=>{
    if(err){
        console.log("Something went wrong");
    }
    console.log("Yess");
})