import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import GetZip from './GetZip';
import DayCards from './DayCards';

export default function App() {
  const [data, setData] = useState([]);

  const getZip = (zip) => {
      axios
        .get("http://api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",us&units=imperial&APPID=6c383058dc52c8efb2a8317ed6ce95c4")
        .then(result => setData(result.data)) 
  }

  while(data.length === 0) {
    return (
      <div className="App-getting-zip App">
        <GetZip getZip={getZip}/>
      </div>
    );
  } 

  const setBackground = () => {
    let setUrl = require('./WeatherBackgrounds/' + data.list[0].weather[0].main + '.png');
    document.querySelector('.App').style.background = "url(" + setUrl + ")"; 
  }

  return (
    <div className="App">
      <span className="city">{data.city.name}</span>
      <DayCards props={data}/>
      {setBackground()}
    </div>
  );
}
