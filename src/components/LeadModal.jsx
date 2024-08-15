import React, { useState } from "react";
import { useSelector } from "react-redux";
import { api } from "../auth";
import { error, info } from "./Toastify";

const LeadModal = ({ closeModal, selectedCourse }) => {
    const {user} = useSelector(state => state.reducer.reducer);
    const courses = [
        'Product-One', 'Product - Two', 'Product - Three',
    ]
    const [userDetails, setUserDetails] = useState({
        fullName: user?.first_name && user?.last_name ? `${user.first_name} ${user.last_name}` : '',
        email: user?.email ? user.email : '',
        phoneNumber: user?.phone_number? user?.phone_number : '',
        message: '',
        course: selectedCourse,
    })
    
    const updateUserDetails = (e)=>{
        setUserDetails(
            {
               ...userDetails,
                [e.target.name]: e.target.value
            }
        )
    }

    const submitLead = (e) => {
        e.preventDefault();
        const data = userDetails;
        console.log("ddddddd", data)

        api.post('/appointment/', data).then((res)=>{
            const responseData = res.data;
            console.log("ressss", responseData);

            if(responseData.message){
                error(responseData.message);
                return;
            }

            info('Successfully booked free demo!')
            closeModal();
        })
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-2/4 mx-auto">
                <div className="float-right relative bottom-[15px] left-[13px] font-bold">
                    <button onClick={closeModal}>✖️</button>
            </div>
                <div className="p-10">
            <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
                        Selected Demo for: {selectedCourse ? userDetails.course : <select
                            name="course"
                            value={userDetails.course || ""}
                            onChange={updateUserDetails}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        >
                            <option value="" disabled>
                                Select
                            </option>
                            {courses.map((course) => (
                                <option key={course} value={course}>
                                    {course}
                                </option>
                            ))}
                        </select>}
            </h2>
            <form onSubmit={submitLead}>
                <input
                onChange={updateUserDetails}
                    type="text"
                    value={userDetails.fullName}
                    placeholder="Name"
                    name="fullName"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                onChange={updateUserDetails}
                    type="email"
                    placeholder="Email"
                    value={userDetails.email}
                    name="email"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <div className="flex mb-4">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-gray-300 bg-gray-100 text-gray-800">
                        +91
                    </span>
                    <input
                    onChange={updateUserDetails}
                        type="number"
                        value={userDetails.phoneNumber}
                        placeholder="Mobile Number"
                        name="phoneNumber"
                        className="w-full p-3 border-t border-b border-r border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                </div>
                <textarea
                onChange={updateUserDetails}
                value={userDetails.message}
                    placeholder="Enter any message for our team..."
                    name="message"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700"
                >
                    Get Started for Free!
                </button>
                    </form></div>
            </div></div>
    );
};

export default LeadModal;
