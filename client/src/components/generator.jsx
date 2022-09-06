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
    return (<div>
      <h4>Input url to generate QR code</h4>
      Enter your website: <input value={this.state.url} onChange={this.onChange.bind(this)}/>
      <button onClick={this.search.bind(this)}> Submit
      </button>
    </div>)
  }
}

export default Generator;