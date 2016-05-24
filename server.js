// grab express
var express = require('express');

// create an express app
var app = express();
var ig = require('instagram-node').instagram();

// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

//ROUTES
http://localhost:8080/
app.get('/', function (req,res) {
    res.render('pages/index');
});

//start the server on port 8080
app.listen(8080);

//send a message
console.log('App started! Look at http://localhost:8080');