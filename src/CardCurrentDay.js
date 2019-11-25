import React from 'react';

class cardCurrentDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentDay : this.props.props.props.list[0].dt_txt.split(' ')[0]
        };
      }

    
    render() {   
    let f = new Date(this.state.currentDay);

    return (
      <div>
          <div className="selected-day-info">
            <p>{this.state.currentDay}</p>
            <p>{Math.round(this.props.props.props.list[0].main.temp)}&#176;</p>
            <img src={require("./WeatherSVGs/" + this.props.props.props.list[0].weather[0].main + ".svg")} />
          </div>
      </div>
    );
  }
}

export default cardCurrentDay;