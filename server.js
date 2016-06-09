var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var db = require('./db.js');

var port = process.env.PORT || 3000;

var app = express();

//to allow front to access back
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};
app.use(allowCrossDomain);

app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

//setting routes
var userRoutes = require('./routes/users.js');
app.use('/users', userRoutes);
var guideRoutes = require('./routes/guides.js');
app.use('/guides', guideRoutes);

app.listen(port);
console.log('puppies are listening on port ' + port);

