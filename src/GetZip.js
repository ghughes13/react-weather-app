import React from 'react';

class GetZip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0 
        };
      }

  render() {   
    return (
      <div>
          <h1>Enter Your Zip Code</h1>
          <input type="text"></input>
          <button 
            onClick={() => this.props.getZip(document.querySelector('input').value)}>Get Weather  
          </button>
      </div>
    );
  }
}

export default GetZip;
  