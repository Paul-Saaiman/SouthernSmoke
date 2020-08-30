var express = require("express");
var app		= express();
var port    = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

//Routes
app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/contact", function(req, res){
	res.render("contact.ejs");
});


app.listen(port, function(){
	console.log("server has started");
});