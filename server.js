const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function(){
	console.log("I'm listening.. On PORT: " + port);
})

app.get('/',(req,res)=>{
	var inp ='/index.html';
	res.sendFile(__dirname + inp);
	console.log("res.sendFile('" + __dirname + inp + "')");
})

app.post("/quotes",(req,res)=>{
	console.log("Posted");
})