import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Services = () => {
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    getCourses();
  }, [])

  const getCourses = ()=> {
    axios.get('http://localhost:8000/course/').then((res)=>{
      console.log('Services fetched successfully');
      const responseData = res.data;
      console.log("ddddd", responseData);
      setCourses(responseData.courses || []);
    })
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Find the right resources to get started with SAT-PREP</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="p-8 bg-gray-50 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
            <p className='text-gray-500 text-sm mb-4'>{course.detail}</p>
            {/* <ul className='m-2'>
            {course.features.map((feature) => (
              <li className='list-disc m-2'>
                {feature.detail}
              </li>
            ))}</ul> */}
            <Link to={`/${course.slug}`} className="px-4 py-2 bg-blue-500 text-white rounded">Start Now →</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
