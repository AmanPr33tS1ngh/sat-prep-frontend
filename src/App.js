import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import StartJourney from "./pages/StartJourney";
import Course from "./pages/Course";
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import { ToastContainer, success, error, info } from './components/Toastify'

function Logout() {
  localStorage.clear()
  return <Navigate to="/sign-in" />
}


const App = () => {
  return (
    <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnVisibilityChange
          pauseOnHover
          className="custom-toast-container"
        />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/start-journey' element={<StartJourney />} />
        <Route path='/course/:slug' element={<Course />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
