
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Beer = require('./models/beer');

mongoose.connect('mongodb://localhost:27017/beerlocker')

var app = express();

app.use(bodyParser.urlencolded({
	extended: true
}));

var port = process.env.PORT || 3000;
var router = express.Router();

router.get('/', function(req, res) {
	res.json({message: 'Stop looking at me'});
});

app.use('/api', router);

app.listen(port);
console.log('Listening on port ' + port);