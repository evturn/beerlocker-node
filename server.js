var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/beerlocker');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

router.get('/', function(req, res) {
	res.json({message: 'Hi br0'});
});

app.use('/api', router);

app.listen(port);
console.log('Listening on port ' + port);