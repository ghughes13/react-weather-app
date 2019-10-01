import React from 'react';

class ThreeHourForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }

    render() {   
        
        let dataToUse = this.props.data[this.props.day];
        console.log(dataToUse);
        let hourlyForecast = dataToUse.map((item, index) => 
            <div key={index}>
                {item.main.temp} - {item.dt_txt.split(' ')[1]}
            </div>
        )

        return (
            <div className="daily-card-container">
                {hourlyForecast}
            </div>
        );
    }
}

export default ThreeHourForecast;
  
//Day
//High
//Low
//Current Weather