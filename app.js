var express = require("express");
var app		= express();

app.use(express.static(__dirname + "/public"));

//Routes
app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/contact", function(req, res){
	res.render("contact.ejs");
});


app.listen(process.env.PORT, process.env.IP);