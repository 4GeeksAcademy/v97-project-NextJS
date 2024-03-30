import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const TrafficLight = () => {
  const [color, setColor] = useState('red');

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
    <div className="traffic-light">
      <div
        className={`light red ${color === 'red' ? 'glow-red' : ''}`}
        onClick={() => handleClick('red')}
      />
      <div
        className={`light yellow ${color === 'yellow' ? 'glow-yellow' : ''}`}
        onClick={() => handleClick('yellow')}
      />
      <div
        className={`light green ${color === 'green' ? 'glow-green' : ''}`}
        onClick={() => handleClick('green')}
      />

      
      <div
        className={`light purple ${color === 'purple' ? 'glow-purple' : ''}`}
        onClick={() => handleClick('purple')}
      />
   
    </div>

    <div><button type='button'>Purple</button></div>
    </>
    
  );
};
