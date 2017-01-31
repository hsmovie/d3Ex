var express = require('express');
var app = express();

var path = require('path') ;
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.listen(3000, function(){
  console.log('connected 3000 port!!!!!!!!');
});

app.get('/', function(req, res){
  res.render('3dStack');
	// res.render('Practice/d3Bars');
});
