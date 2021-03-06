import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressIndicator = ({ value }) => {

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-10 h-10">
        <CircularProgressbar
          value={value}
          maxValue={10}
          text={value}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              // stroke: `rgba(62, 152, 199, ${value})`,
              stroke: `#${Math.floor(Math.random()*16777215).toString(16)}`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // Rotate the path
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: '#FFFFFF',
              // stroke: '#d6d6d6',
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Rotate the trail
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: '#FFFFFF',
              // Text size
              fontSize: '25px',
            },
          }}
        />
      </div>
    </div>
  );
};

export default CircularProgressIndicator;
