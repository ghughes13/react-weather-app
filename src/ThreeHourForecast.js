import React from 'react';
import { Line } from 'react-chartjs-2';

class ThreeHourForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test : console.log("Here are the props: ", this.props.data[0]),
            day: this.props.dayToShow,
            data: {
                labels: this.props.data.map((item, index) => {
                    return item.dt_txt.split(' ')[1];
                }),
                datasets: [
                    {
                        label: "videos Made",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: this.props.data.map((item, index) => {
                            return item.main.temp
                        })
                    }
                ]
            }
        }
      }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevProps.day, this.props.prop);
        if (prevProps.day !== this.props.day) {
            this.setState({ data : { data: {
                labels: this.props.data.map((item, index) => {
                    return item.dt_txt.split(' ')[1];
                }),
                datasets: [
                    {
                        label: "videos Made",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: this.props.data.map((item, index) => {
                            return item.main.temp
                        })
                    }
                ]
                }}}
            )
        }
        console.log('current state', this.state);
    }

    render() {   
        // console.log('re-rendering', this.props, this.state.data);
        let dataToUse = this.props.data;
        let hourlyForecast = dataToUse.map((item, index) => { 
                return (
                    <div key={index}>{item.main.temp} - {item.dt_txt.split(' ')[1]}</div>
                )
        });

        return (
            <div>
                {hourlyForecast}
                <div style={{position: "relative", width: 600, height: 550 }}>
                    <h3>Chart Samples</h3>
                    <Line 
                        options={{
                            responsive: true
                        }}
                        data={this.state.data}
                    />
                </div>
            </div>
        );
    }
}

export default ThreeHourForecast;
