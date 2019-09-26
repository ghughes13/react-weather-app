import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

export default function App() {

  const [data, setData] = useState([]);
  let zipCode = 71111;
  useEffect(() => {
    axios
      .get("http://api.openweathermap.org/data/2.5/forecast?zip=" + zipCode + "&APPID=6c383058dc52c8efb2a8317ed6ce95c4")
      .then(result => setData(result.data));
  }, []);
  
  console.log(data);

  return (
    <div className="App">
    
    </div>
  );
}
