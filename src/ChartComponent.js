import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Chart(props) {

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

