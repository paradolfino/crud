const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;
var db;
MongoClient.connect('mongodb://admin:admin@ds155414.mlab.com:55414/star-wars-quotes', (err, database) => {
	if (err) return console.log(err)
  	db = database
	app.listen(port, function(){
		console.log("I'm listening.. On PORT: " + port);
	})
})

app.use(bodyParser.urlencoded({extended: true}))



app.get('/',(req,res)=>{
	var inp ='/index.html'
	var cursor = db.collection('quotes').find().toArray(function(err,results){
		console.log(results)
	})
	res.sendFile(__dirname + inp)
	console.log(`app.get:sendFile(${inp})`)
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log(`Posted ${JSON.stringify(req.body)}`)
    res.redirect('/')
  })
})

app.set('view engine','ejs')