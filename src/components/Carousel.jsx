import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <div className="bg-gray-200 p-10 text-center bg-cover bg-center h-[60vh] flex justify-center items-center" style={{
          backgroundImage: 'url(/scholar.png)',
    }}>
      <div>
        <h2 className="text-3xl font-bold mb-10 text-white">Powering your global education dream</h2>
        <Link to={'/start-journey'} className="px-8 py-4 bg-blue-500 text-white rounded">Start your journey</Link>
      </div>
    </div>
  );
};

export default Carousel;
