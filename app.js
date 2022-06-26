const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
pages = ['Home','About','Contact']

app.get("/",function(req,res){
    res.render("home",{title:pages[0]})
})

app.get("/about",function(req,res){
    res.render("about",{title:pages[1]})
})

app.get("/contact",function(req,res){
    res.render("contact",{title:pages[2]})
})


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });