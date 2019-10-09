import React from 'react';

class WeatherCardDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentDay : this.props.props.list[0].dt_txt.split(' ')[0]
        };
      }

    
    render() {   
    return (
      <div>
          <span className="date">{this.props.props.city.name}</span>
          <div>
            <p>{this.state.currentDay}</p>
            <p>{this.props.props.list[0].weather[0].description}</p>
          </div>
      </div>
    );
  }
}

export default WeatherCardDay;