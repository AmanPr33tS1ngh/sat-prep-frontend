import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import { apiWithoutAuth } from '../auth';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    country: '',
    studyLevel: '',
    intakeYear: '',
    name: '',
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const stepsImages = {
    1: 'country-flags',
    2: 'study-level',
    3: 'intakes',
    4: 'scholar',
    5: 'college-student'
  };
  const submitData = () => {
    console.log('Form submitted', formData);
    apiWithoutAuth.post("/sign_up").then((response)=>{
      console.log("responseEee", response.data);
      nextStep();
    })
  }

  return (
    <div>
      <ProgressBar step={step}/>
      <div style={{ backgroundImage: `url(/${stepsImages[step]}.png)`, }} className='bg-no-repeat bg-cover m-auto h-[100vh] flex justify-center items-center'>
        <div className="opacity-90 max-w-lg mx-auto bg-white shadow-lg rounded-md p-16">
      {step === 1 && (
            <div>
          <h1 className="text-2xl font-bold mb-4">Choose your dream country</h1>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          >
            <option value="">Select a country</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Ireland">Ireland</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded-md">Continue</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Choose your study level</h1>
          <select
            name="studyLevel"
            value={formData.studyLevel}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          >
            <option value="">Select study level</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="PhD">PhD</option>
          </select>
          <div className="flex justify-between">
            <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-md">Back</button>
            <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded-md">Continue</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Select intake year</h1>
          <select
            name="intakeYear"
            value={formData.intakeYear}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          >
            <option value="">Select intake year</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
          <div className="flex justify-between">
            <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-md">Back</button>
            <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded-md">Continue</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Provide personal details</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
              <div className='grid grid-cols-2 gap-[5px]'>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                /></div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <div className="flex justify-between">
            <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-md">Back</button>
            <button onClick={submitData} className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Thank you!</h1>
          <p>Your information has been submitted.</p>
        </div>
      )}
    </div></div>    </div>

  );
};

export default Form;
