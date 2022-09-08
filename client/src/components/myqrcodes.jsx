import React from 'react';
import $ from 'jquery';

class Myqrcodes extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      qrArr: []
    }
  }

  getQRCode() {
    console.log('hahaha');
    let user = prompt("Please enter your username:", "Guest");
    if (user === null || user === '') {
      alert('Please Enter A Valid Username')
    } else {
      console.log('qrArrrrrr', user);
      $.ajax({
        type: "GET",
        url: "/db",
        data: {username: user},
        success: (data) => {
          console.log('wowowowow', JSON.parse(data).length);
          console.log(Array.isArray(JSON.parse(data)));
          this.setState({
            qrArr: JSON.parse(data)
          })
        },
        error: (err) => {
          console.log('why why why')
        },
        contentType: "application/json"
      })
    }
  }

  render () {
    console.log('------>>>>>', this.state.qrArr)
    return (<div>
      <h1>       </h1>
      <div>
        <button onClick = {this.getQRCode.bind(this)}> My QR Codes </button>
        <span>  Show all my QR codes!  </span>
      </div>
      <div>
        <h4>My saved QR codes:</h4>
        {this.state.qrArr.map((qr) => {
          return (
            <img key={`${qr._id}`} src={`data:image/svg+xml;base64,${btoa(qr.qrcode)}`} alt="QRcode" width="80" height="80" />
          )
        })}
      </div>
    </div>)
  }

}

export default Myqrcodes;