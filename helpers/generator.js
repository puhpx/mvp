const axios = require('axios');
const db = require('../database/index.js')

let qrgenerator = (body) => {
  const options = {
    method: 'POST',
    url: 'https://qrcode3.p.rapidapi.com/qrcode/text',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '9535db8c0bmsh66c22b0fb1289d8p149ac6jsnba6b462f656b',
    'X-RapidAPI-Host': 'qrcode3.p.rapidapi.com'
    },
    data: JSON.stringify(body)
  };

  return axios.request(options)
  // .then(function (response) {
  //   // console.log('haha', response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
}

module.exports.qrgenerator = qrgenerator;
