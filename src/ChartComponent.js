import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function Chart(props) {

  const [data, setData] = useState([]);
    console.log(props)
  return (
    <div className="Chat">
      <Line 
        options={{
            responsive: true
        }}
        data={props.props.data}
        />
    </div>
  );
}

