const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/qrcodes', {
  useCreateIndex: true
});

let qrSchema = mongoose.Schema({
  username: String,
  qrcode: String
});

let Qr = mongoose.model('Qr', qrSchema);

let save = (data) => {
  var user = new Qr({
    username: data.username,
    qrcode: data.qrcode
  })
  user.save((err, data) => {
    if (err) {
      console.log('Save Error: ')
    } else {
      console.log('QR Code saved!')
    }
  })
}

module.exports.save = save;
module.exports.Qr = Qr;