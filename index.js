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

app.get('/group', function(req,res) {
	res.render('group')
});

app.get('/massage', function(req,res) {
	res.render('massage')
});
app.listen(3000);