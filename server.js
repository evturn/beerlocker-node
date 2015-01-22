var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/beerlocker');

var app = express();
