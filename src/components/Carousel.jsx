import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Carousel = ({ openLeadModal, selectedCourse, openLead}) => {
  const navigate = useNavigate();
  const {isAuthenticated} = useSelector(state=> state.reducer.reducer);
  console.log('isAuthenticated', isAuthenticated, isAuthenticated )
  const handleClick = () => {
    if (isAuthenticated) openLeadModal()
    else navigate('/start-journey');
  };

  return (
    <div className="bg-gray-200 p-10 text-center bg-cover bg-center h-[60vh] flex justify-center items-center" style={{
          backgroundImage: 'url(/scholar.png)',
    }}>
      <div>
        <h2 className="text-3xl font-bold mb-10 text-white">Powering your global education dream</h2>
        <button onClick={handleClick} className="px-8 py-4 bg-blue-500 text-white rounded">Start your journey</button>
      </div>
    </div>
  );
};

export default Carousel;
