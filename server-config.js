var express = require('express');
var request = require('request');
// var partials = require('express-partials');
// var util = require('./lib/utility');

// var handler = require('./lib/request-handler');

var app = express();

// app.configure(function() {
//   app.set('views', __dirname + '/views');
//   app.set('view engine', 'ejs');
//   app.use(partials());
//   app.use(express.bodyParser());
//   app.use(express.static(__dirname + '/public'));
//   app.use(express.cookieParser('shhhh, very secret'));
//   app.use(express.session());
// });

app.get('/', function(req, res){
  res.send("muni")
})
app.post('/search', function(req, res){
  console.log(req)
  res.send(req.body);
})

module.exports = app;
