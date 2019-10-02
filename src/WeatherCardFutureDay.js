import React from 'react';
import ThreeHourForecast from './ThreeHourForecast';

class WeatherCardFutureDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dayToShow : 0
        };
      }

    render() {   
        let days = [];
        let highs = [];
        let lows = [];
        let dayData = [];

        for(let i = 0; i < this.props.props.list.length; i++) {
            const date = this.props.props.list[i].dt_txt.split(' ')[0];
            if(days.includes(date) === false) {
                days.push(date);
            }
        }

        for(let x = 0; x < days.length; x++) {
            let dayHigh = 0;
            let dayLow = 1000;
            let indvDayData = [];
            for(let y = 0; y < this.props.props.list.length; y++) {
                if(this.props.props.list[y].dt_txt.split(' ')[0] === days[x]) {
                    dayLow > this.props.props.list[y].main.temp_min ? dayLow = this.props.props.list[y].main.temp_min : console.log();
                    dayHigh < this.props.props.list[y].main.temp_max ? dayHigh = this.props.props.list[y].main.temp_max : console.log();
                    indvDayData.push(this.props.props.list[y])
                }
            }
            dayData.push(indvDayData)
            highs.push(dayHigh);
            lows.push(dayLow);           
        }
    
        let dayCard = days.map((day, index) => {
            return (
                <div key= {index} onClick={() => {this.setState({dayToShow : index})}}>
                    <h3>{day}</h3>
                    <span>{lows[index]}, </span>
                    <span>{highs[index]} </span>
                </div>
            )
        })

    return (
      <div className="daily-card-container">
          <div className="dayCards">
            {dayCard}
          </div>
          <ThreeHourForecast day={this.state.dayToShow} data={dayData[this.state.dayToShow]}/>
      </div>
    );
  }
}

export default WeatherCardFutureDay;
  
//Day
//High
//Low
//Current Weather