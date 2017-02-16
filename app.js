var express = require('express')
var app = express()


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');



app.get('/', function (req, res) {
  res.send('Hello Andika')
})

app.get('/dika', function (req, res) {
  res.send('Hello dika')
})

app.get('/test', function (req, res) {
  res.render('index',
  	{ title : 'Home' }
  )
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})