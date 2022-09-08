const mongoose = require('mongoose');
const express = require('express');
const helpers = require('../helpers/generator.js');
const db = require('../database/index.js')

let app = express();
app.use(express.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/qrcode', (req, res) => {
  helpers.qrgenerator(req.body)
  .then((r) => {res.send(JSON.stringify(r.data))})
});

app.post('/db', (req, res) => {
  db.save(req.body);
  res.sendStatus(201);
});

app.get('/qrcode', (req, res) => {

});


app.get('/db', (req, res) => {
  console.log('body:::', req.query.username);
  db.Qr
  .find({username: req.query.username})
  .limit(5)
  .then((data) => res.send(JSON.stringify(data)));
})


let port = 3000;

app.listen(port, function(){
  console.log(`listening on port ${port}`)
});
