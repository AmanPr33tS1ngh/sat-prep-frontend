import React, { useEffect } from 'react';
import api from '../auth';

const Services = () => {
  useEffect(()=>{
    getCourses();
  }, [])

  const getCourses = ()=> {
    api.get('/course').then((res)=>{
      console.log('Services fetched successfully');
      const responseData = res.data;
      console.log("ddddd", responseData);
    })
  }

  const services = [
    { title: 'Crack IELTS', link: '#' },
    { title: 'Shortlist Colleges', link: '#' },
    { title: 'Financial Planning', link: '#' },
    { title: 'SOP Review', link: '#' },
    { title: 'VISA Help', link: '#' },
    { title: 'Get a Coach', link: '#' }
  ];

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Find the right resources to get started with SAT-PREP</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Start Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
