const mongoose = require('mongoose');
const express = require('express');
const helpers = require('../helpers/generator.js')

let app = express();
app.use(express.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/qrcode', (req, res) => {
  helpers.qrgenerator(req.body)
  .then((r) => {res.send(JSON.stringify(r.data))})
});

app.get('/qrcode', (req, res) => {

});

let port = 3000;

app.listen(port, function(){
  console.log(`listening on port ${port}`)
});
