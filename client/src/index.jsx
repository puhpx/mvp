import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Generator from './components/generator.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: []
    }
  }

  search (address) {
    console.log(`${address} was searched`);
    $.ajax({
      type: "POST",
      url: "/qrcode",
      data: JSON.stringify({website: address}),
      success: console.log('hahaha'),
      fail: (err) => {console.log('err--->'), err}
    });
  }

  render () {
    return (<div>
      <h1>QR CODE GENERATOR</h1>
      <Generator onSearch = {this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



