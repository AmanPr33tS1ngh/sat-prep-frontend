import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <div className="bg-gray-200 p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Powering your global education dream</h2>
      <Link to={'/start-journey'} className="px-4 py-2 bg-blue-500 text-white rounded">Start your journey</Link>
    </div>
  );
};

export default Carousel;
