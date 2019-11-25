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
          <h1>React Weather App</h1>
          <div className="get-zip-input">
            <h2>Enter Your Zip Code</h2>
            <div>
              <input type="text"></input>
              <button 
                onClick={() => this.props.getZip(document.querySelector('input').value)}>Get Weather  
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default GetZip;
  