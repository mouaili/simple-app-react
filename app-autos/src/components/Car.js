import React from 'react';

const Car = ({ color, children }) => {
  const colorCar = color ? (
    <li>Color : {color}</li>
  ) : (
    <li>Color : No information about the color</li>
  );

  if (children) {
    return (
      <ul
        style={{
          color: '#f1f1f1',
          background: '#45a',
          width: '40%',
          margin: '5px auto',
          padding: '8px 8px',
          listStyleType: 'none',
        }}
      >
        <li>Brand : {children}</li>
        {colorCar}
      </ul>
    );
  } else {
    return null;
  }
};

export default Car;
