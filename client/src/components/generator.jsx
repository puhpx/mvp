import React from 'react';
import $ from 'jquery';

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }

  onChange (e) {
    console.log('--->', e.target.value);
    this.setState({
      url: e.target.value
    })
  }

  create(props) {
    this.props.createQR(this.state.url)
  }

  saveqrcode () {
    let user = prompt("Please enter your username:", "Guest");
    if (user === null || user === '') {
      alert('Invalid Username')
    } else {
      $.ajax({
        type: "POST",
        url: "/db",
        data: JSON.stringify({
          username: user,
          qrcode: this.props.qrcode,
        }),
        success: console.log('saved to db through POST'),
        error: (err) => {console.log(err)},
        contentType: "application/json"
      })
      console.log('QR SAVED!!!!')
    }
  }




  render () {
    console.log(this.props)
    return (<div>
      <div>
        <h4>Create QR code</h4>
        Enter your URL: <input value={this.state.url} onChange={this.onChange.bind(this)}/>
        <button onClick={this.create.bind(this)}> Submit
        </button>
      </div>
      <div>
        <img src={`data:image/svg+xml;base64,${btoa(this.props.qrcode)}`} alt="" width="200" height="200" />
      </div>
      <button onClick = {this.saveqrcode.bind(this)}> save this QR code </button>
    </div>)
  }
}

export default Generator;