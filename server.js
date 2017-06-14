// server.js
// Server side code - runs in node

// Simple in-memory data-store for now
var lines = [
];

// Require and instantiate Express
var express = require('express');
var app = express();

// Allow normal form input
// Gives us request.body.xxxxx
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser); 

// Use the "public" directory to serve files
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Send /views/index.html when a request for "/" comes in
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.redirect("/index.html");
});

// Send the stored dreams
app.get("/lines", function (request, response) {
  response.send(lines);
});

app.get("/newline", function(request, response) {
  lines.push({x: request.query.x, y: request.query.y});
  response.send("Thanks");
});

app.get("/clear", function(request, response) {
  lines.length = 0;
  response.send("Thanks");
});

// Start the server
var listener = app.listen(process.env.PORT, function () {
  console.log('Your server is running and listening on port ' + listener.address().port);
});
