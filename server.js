const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, function(){
	console.log("I'm listening.. On PORT: " + port);
})

app.get('/',(req,res)=>{
	var inp ='/index.html';
	res.sendFile(__dirname + inp);
	console.log(`app.get:sendFile(${inp})`);
})

app.post("/quotes",(req,res)=>{
	console.log(`Posted ${JSON.stringify(req.body)}`);
})