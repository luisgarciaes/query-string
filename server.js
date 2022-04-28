var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send(`<html><head><link rel='stylesheet' href='/assets/style.css'>
  <title>Document </title></head>
  <body><h1>Hola mundo</h1>
  <p> Este es un parrafo y su contenido debe ser azul</p></body></html>`)
}
);

app.get('/person/:id', (req, res) => {
    res.render('person',{ID: req.params.id, Message: req.query.message, Times: req.query.times},);
});

app.listen(PORT);


