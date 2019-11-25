import React from 'react';
import Chart from './ChartComponent';

class ThreeHourForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: this.props.dayToShow,
            data: {
                test: 'test string',
                labels: this.props.data.map((item, index) => {
                    return item.dt_txt.split(' ')[1];
                }),
                datasets: [
                    {
                        label: "Temperature",
                        borderColor: 'rgb(255, 99, 132)',
                        data: this.props.data.map((item, index) => {
                            return Math.round(item.main.temp) + '&#176';
                        })
                    }
                ]
            }
        }
      }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.day !== this.props.day) {
            this.setState({ day : prevProps.day})
            this.setState({ data : { data: {
                test: 'new test string;',
                labels: this.props.data.map((item, index) => {
                    let hour = item.dt_txt.split(' ')[1].split(':')[0];
                    hour = hour - 6;
                    if(hour < 0) {
                        hour += 12;
                    }
                    if(hour === '00') {
                        hour = 12 + ':00am'
                    } else if(hour > 12) {
                        hour = hour%12 + ':00pm';
                    } else {
                        hour = hour + ":00am";
                    }
                    return hour;
                }),
                datasets: [
                    {
                        label: "Temperature",
                        backgroundColor: 'transparent',
                        borderColor: 'rgb(255, 99, 132)',
                        data: this.props.data.map((item, index) => {
                            return Math.round(item.main.temp)
                        })
                    }
                ]
                }}}
            )
        }
    }

    render() {   
        return (
            <div>
                <div className="temp-chart" style={{ margin: 'auto', position: "relative", width: 600,}}>
                    <h3>Temperature</h3>
                    <Chart props={this.state.data} />
                </div>
            </div>
        );
    }
}

export default ThreeHourForecast;
