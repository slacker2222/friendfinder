// Dependencies
// =============================================================
var http = require("http");

var express = require("express");
// var bodyParsar = require("body-parsar");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// function handleRequest(request, response) {
//   response.end("It Works! Path Hit:" + request.url);
// }

// var server = http.createServer(handleRequest);

// server.listen(PORT, function(){

// console.log("App listening on PORT " + PORT);
// );
const htmlRoutes = require("./app/routing/htmlRoutes");

app.use("/", htmlRoutes);
   

  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

  // console.log(chosen);




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

//   requires and sets html routes in this file
  // require('./app/routing/htmlRoutes.js')(app);

//   requires and sets the API routes
  require('./app/routing/apiRoutes.js')(app);