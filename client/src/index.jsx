import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import defaultPic from './defaultPic.js';
import Generator from './components/generator.jsx';

import Myqrcodes from './components/myqrcodes.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qrcode: defaultPic.defaultPic
    }
  }

  create (text) {
    console.log(`Your url is: ${text}`);
    let body = {
      "data": text,
      "image": {
          "uri": "https://i.ibb.co/7vFK8rf/hack-reactor-owler-20180828-222233-original.jpg",
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
      <div>
        <button>QR MENU</button>
        <> </>
        <button>SOCIAL MEDIA</button>
        <> </>
        <button>PDF</button>
        <> </>
        <button> ... </button>
      </div>
      <Generator createQR = {this.create.bind(this)}
      qrcode = {this.state.qrcode} />
      <div> {"\n"} </div>
      <Myqrcodes/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



