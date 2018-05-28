const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/static'));

app.get('/', function(req, res) {
	res.render('index')
});

app.get('/training', function(req,res) {
	res.render('training')
});

app.get('/staff', function(req,res) {
	res.render('staff')
});

app.get('/other', function(req,res) {
	res.render('other')
});
app.listen(3000);