const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', function (req, res){
  console.log(req.query);
  res.sendFile(__dirname + '/home.html');
});

function loggerMiddleware(req, res, next){
  console.log(req.url);
  req.valami = 1;
  next();
}
//bodyParser.urlencoded({extended: true}),
app.post('/products', loggerMiddleware, bodyParser.urlencoded({extended: true}), function(req, res){
  console.log(req.body);
  console.log(req.valami);
});

app.listen(3000);