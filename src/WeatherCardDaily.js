import React from 'react';

class WeatherCardDaily extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }

    
    render() {   
        console.log(JSON.stringify(this.props.props.city.name));
    return (
      <div>
          <span className="date">{this.props.props.city.name}</span>
          <p>{this.props.props.list[0].weather[0].description}</p>
      </div>
    );
  }
}

export default WeatherCardDaily;
