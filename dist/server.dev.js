"use strict";

var express = require('express');

var path = require('path');

var _require = require('./middleware/clog'),
    clog = _require.clog;

var api = require('./routes/index.js');

var PORT = 5000;
var app = express(); // Import custom middleware, "cLog"

app.use(clog); // Middleware for parsing JSON and urlencoded form data

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/api', api);
app.use(express["static"]('public')); // GET Route for homepage

app.get('/', function (req, res) {
  return res.sendFile(path.join(__dirname, '/public/index.html'));
}); // GET Route for feedback page

app.get('/feedback', function (req, res) {
  return res.sendFile(path.join(__dirname, '/public/pages/feedback.html'));
});
app.listen(PORT, function () {
  return console.log("App listening at http://localhost:".concat(PORT, " \uD83D\uDE80"));
});