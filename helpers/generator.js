const axios = require('axios');
const db = require('../database/index.js')

let qrgenerator = (body) => {
  const options = {
    method: 'POST',
    url: 'https://qrcode3.p.rapidapi.com/qrcode/text',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '5f4e887790msh40401373fc4de76p1e4a29jsn5c68278b230f',
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
