import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import GetZip from './GetZip';
import WeatherCardDay from './WeatherCardCurrentDay';
import WeatherCardFutureDay from './WeatherCardFutureDay';


export default function App() {
  const [data, setData] = useState([]);

  const getZip = (zip = 75240) => {
      axios
        .get("http://api.openweathermap.org/data/2.5/forecast?zip=" + zip + "&units=imperial&APPID=6c383058dc52c8efb2a8317ed6ce95c4")
        .then(result => setData(result.data));
  }

  while(data.length === 0) {
    return (
      <div className="App">
        <GetZip getZip={getZip()}/>
      </div>
    );
  } 

  return (
    <div className="App">
      <WeatherCardDay props={data}/>
      <WeatherCardFutureDay props={data}/>
    </div>
  );
}
