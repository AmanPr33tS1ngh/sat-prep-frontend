import React, { useEffect, useState } from 'react';
import {api, apiWithoutAuth} from '../auth';
import { useNavigate } from 'react-router-dom';
import LeadModal from './LeadModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Services = ({ openLeadModal, selectedCourse, openLead }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, [])

  const getCourses = () => {
    apiWithoutAuth.get('/course/').then((res) => {
      console.log('Services fetched successfully');
      const responseData = res.data;
      console.log("ddddd", responseData);
      setCourses(responseData.courses || []);
    })
  };
  
  // const navigateToCourse = (slug)=>{
  //   navigate(`/course/${slug}`);
  // };

  return (
    <div>
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Find the right resources to get started with SAT-PREP</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800">{course.name}</h2>
            <p className="text-purple-700 font-bold mt-2">{course.detail}</p>

            <ul className="mt-4 space-y-2 text-gray-600">
              {course.features.map((feature) => (
                <li className='list-disc m-2 ml-5'>
                  {feature.detail}
                </li>
              ))}</ul>

            <button onClick={()=>openLeadModal(course.name)} className="block w-9/12 m-auto mt-5 bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700">
              Book a Free Demo Class
            </button>
            {/* <button onClick={()=>navigateToCourse(course.slug)} className="block w-9/12 m-auto mt-5 border border-purple-600 text-purple-600 py-2 px-4 rounded-full hover:bg-purple-100">
              Explore program →
            </button> */}
          </div>
        ))}
      </div>
      </div>
      {openLead ? <LeadModal closeModal={openLeadModal} selectedCourse={selectedCourse} /> : null}</div>
  );
};

export default Services;
