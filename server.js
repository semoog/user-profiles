// dependencies

var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');

// app

var app = express();
var port = 3000;

var corsOptions = {
	origin: 'http://localhost:3000'
};

// use

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
 }));

 // serve html

 app.use(express.static(__dirname + '/public'));

// endpoints

app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getFriends);

// start listen

app.listen(port, function (req, res, next) {
  console.log("Directory name: ", __dirname);
  console.log("listening on port ", port);
});
