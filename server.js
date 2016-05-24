// grab express
var express = require('express');

// create an express app
var app = express();
var ig = require('instagram-node').instagram();

// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');


// configure instagram app with client_id
ig.use({
    client_id: 'd69c8817c7344f9fbc0b529e3d425573',
    client_secret: '4154c14a5c414facb25fc887790e7c7a'
});

//ROUTES
http://localhost:8080/
app.get('/', function (req,res) {
	ig.media_popular(function(err, medias, remaining, limit) {
    res.render('pages/index', { grams: medias });
});

//start the server on port 8080
app.listen(8080);

//send a message
console.log('App started! Look at http://localhost:8080');