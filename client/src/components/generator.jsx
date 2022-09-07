import React from 'react';

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

  search(props) {
    this.props.onSearch(this.state.url)
  }

  render () {
    console.log(this.props)
    return (<div>
      <h4>Input url to generate QR code</h4>
      Enter your website: <input value={this.state.url} onChange={this.onChange.bind(this)}/>
      <button onClick={this.search.bind(this)}> Submit
      </button>
      <div>
      <img src={`data:image/svg+xml;base64,${btoa(this.props.qrcode)}`} alt="" width="200" height="200" />
      </div>
    </div>)
  }
}

export default Generator;