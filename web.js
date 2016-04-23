'use strict';

var gzippo 					= require('gzippo');
var express 				= require('express');
var morgan 					= require('morgan');
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

var app = express();

// add middleware needed for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// connect to the MongoDb
mongoose.connect('mongodb://localhost:27017/sampleapp');
mongoose.connection.once('open', function () {

// connect to data model
// load the routes

});

app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());


console.log('listening on port 3000...');
app.listen(3000);

//app.use(morgan('dev'));
//app.use(gzippo.staticGzip("" + __dirname + "/dist"));
//app.listen(process.env.PORT || 5000);


