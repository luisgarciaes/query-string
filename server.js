var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.use('view engine', 'ejs')
app.use('/', (req, res, next) => {
    console.log('Request URL:'+ req.url);
    next();
});

app.get('/', (req, res) => {
  res.send(`<html><head><link rel='stylesheet' href='/assets/style.css'>
  <title>Document </title></head>
  <body><h1>Hola mundo</h1>
  <p> Este es un parrafo y su contenido debe ser azul</p></body></html>`)
}
);

app.get('/person/:id', (req, res) => {
    res.send('person',{ID: req.params.id, Qstr: req.query.qrst});
});

app.listen(PORT);


