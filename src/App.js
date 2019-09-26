import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import GetZip from './GetZip';
import WeatherCard from './WeatherCard';


export default function App() {
  const [data, setData] = useState([]);

  const getZip = (zip = 71111) => {
      axios
        .get("http://api.openweathermap.org/data/2.5/forecast?zip=" + zip + "&APPID=6c383058dc52c8efb2a8317ed6ce95c4")
        .then(result => setData(result.data));
  }
  console.log(data);
  while(data.length === 0) {
    return (
      <div className="App">
        <GetZip getZip={getZip} runit={console.log(data)}/>
      </div>
    );
  } 
  return (
    <div className="App">
      <WeatherCard props={data}/>
    </div>
  );
  

}
