import React from 'react';

import Card from './Card';
import wave from '../../assets/wave.png'; // Example icon import

const Earning = () => {
    return (
        
        <div className=" grid md:grid-cols-4 gap-5 p-5 ">
        <Card
          title="Revenue Status"
          value="$432"
          dateRange="Jan 01 - Jan 10"
          bgColor="bg-gradient-to-r from-pink-500 to-purple-500"
          icon={<wave />}
        />
        <Card
          title="Page View"
          value="$432"
          dateRange="Jan 01 - Jan 10"
          bgColor="bg-gradient-to-r from-purple-500 to-indigo-500"
          icon={<wave />}
        />
        <Card
          title="Bounce Rate"
          value="$432"
          dateRange={
            <select className="bg-transparent text-white border-none">
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
            </select>
          }
          bgColor="bg-gradient-to-r from-blue-500 to-teal-500"
          icon={<wave />}
        />
        <Card
          title="Revenue Status"
          value="$432"
          dateRange="Jan 01 - Jan 10"
          bgColor="bg-gradient-to-r from-yellow-500 to-orange-500"
          icon={<wave />}
        />
      </div>
    );
};

export default Earning;