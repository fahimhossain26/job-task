// src/components/Card.jsx
import React from 'react';

const Card = ({ title, value, dateRange, bgColor, icon }) => {
  return (
    <div className={`p-5 rounded-lg text-white ${bgColor} flex flex-col justify-between`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg">{title}</p>
          <h2 className="text-3xl">{value}</h2>
          <p className="text-sm">{dateRange}</p>
        </div>
        <div className="text-4xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Card;
