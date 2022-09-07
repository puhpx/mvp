import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Generator from './components/generator.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qrcode: ''
    }
  }

  search (address) {
    console.log(`Your website address is: ${address}`);
    let body = {
      "data": address,
      "image": {
          "uri": "icon://appstore",
          "modules": true
      },
      "style": {
          "module": {
              "color": "black",
              "shape": "default"
          },
          "inner_eye": {
              "shape": "default"
          },
          "outer_eye": {
              "shape": "default"
          },
          "background": {}
      },
      "size": {
          "width": 200,
          "quiet_zone": 4,
          "error_correction": "M"
      },
      "output": {
          "filename": "qrcode",
          "format": "svg"
      }
  }

    $.ajax({
      type: "POST",
      url: "/qrcode",
      data: JSON.stringify(body),
      success: (res) => {
        this.setState({
          qrcode: JSON.parse(res)
        })
      },
      error: (err) => {console.log('err--->')},
      contentType: "application/json"
    });
  }

  render () {
    return (<div>
      <h1>QR CODE GENERATOR</h1>
      <Generator onSearch = {this.search.bind(this)}
      qrcode = {this.state.qrcode} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



