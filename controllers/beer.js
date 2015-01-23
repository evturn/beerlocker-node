var Beer = require('../models/beer');

exports.postBeers = function(req, res) {
	var beer = Beer();
	beer.name = req.body.name;
	beer.type = req.body.type;
	beer.quantity = req.body.quantity;
	beer.save(function(err) {
		if (err)
			res.send(err);
		res.json({message: 'Beer added to the locker!', data: beer});
	});
};

exports.getBeers = function(req, res) {
	Beer.find(function(err, beers) {
		if (err)
			res.send(err);
		res.json(beers);
	});
};
