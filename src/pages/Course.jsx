import React, { useEffect, useState } from 'react'
import { apiWithoutAuth } from '../auth';
import { useParams } from 'react-router-dom';
import NotFound from '../components/NotFound';

const Course = () => {
    useEffect(()=>{
        getCourseDetails();
    }, [])

    const [course, setCourse] = useState(null);
    const { slug } = useParams();
    console.log(slug);
    const getCourseDetails = ()=>{
        apiWithoutAuth.get(`/course/${slug}`).then((response)=>{
            const responseData = response.data;
            setCourse(responseData.course || null)
        })
    }
    if(!course) return <NotFound page={"Course"} />
  return (
    <div>
        <div>
            {course.name}
        </div>
        <div>
            {course.detail}
        </div>
        <ul>
        {course.features.map((feature) => (
            <li key={feature.id}>{feature.detail}</li>
        ))}
        </ul>
        {
            course.is_started ? <div>
                <div>
                  Schedule: <span>
                      {course.schedule.start} - {course.schedule.end}
                    </span></div>
                    <div>
                      Timings: {course.timings.start_time} - {course.timings.end_time}
                    </div>

                <button>Book Appointment</button>
            </div> : <div>
               Course will be starting from: {course.start_date}
            </div>
        }
    </div>
  )
};

export default Course;
