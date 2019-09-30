import React from 'react';
import ThreeHourForecase from './ThreeHourForecase';

class WeatherCardFutureDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay : this.props.props.list[0].dt_txt.split(' ')[0]
        };
      }

    render() {   
        let days = [];
        let highs = [];
        let lows = [];

        for(let i = 0; i < this.props.props.list.length; i++) {
            const date = this.props.props.list[i].dt_txt.split(' ')[0];
            if(days.includes(date) === false) {
                days.push(date);
            }
        }

        console.log(this.props.props.list);

        for(let x = 0; x < days.length; x++) {
            let dayHigh = 0;
            let dayLow = 1000;
            for(let y = 0; y < this.props.props.list.length; y++) {
                if(this.props.props.list[y].dt_txt.split(' ')[0] === days[x]) {
                    dayLow > this.props.props.list[y].main.temp_min ? dayLow = this.props.props.list[y].main.temp_min : console.log();
                    dayHigh < this.props.props.list[y].main.temp_max ? dayHigh = this.props.props.list[y].main.temp_max : console.log();
                }
            }
            highs.push(dayHigh);
            lows.push(dayLow);           
        }

        console.log(highs, lows)
    
        let dayCard = days.map((day, index) => {
            return (
                <div key= {index} onMouseEnter={() => {console.log('nothing else')}} onMouseLeave={() => {console.log('noting')}}>
                    <h3>{day}</h3>
                    <span>{lows[index]}, </span>
                    <span>{highs[index]} </span>
                </div>
            )
        })

    return (
      <div className="daily-card-container">
          {dayCard}
          {/* <ThreeHourForecase props={}/> */}
      </div>
    );
  }
}

export default WeatherCardFutureDay;
  
//Day
//High
//Low
//Current Weather