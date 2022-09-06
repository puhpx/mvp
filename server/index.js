const mongoose = require('mongoose');
const express = require('express');
// const helpers = require()

let app = express();
app.use(express.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/qrcode', (req, res) => {

});

app.get('/qrcode', (req, res) => {

});

let port = 3000;

app.listen(port, function(){
  console.log(`listening on port ${port}`)
});
