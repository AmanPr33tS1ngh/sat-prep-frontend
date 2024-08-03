import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartJourney from "./pages/StartJourney";
import Course from "./pages/Course";
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/start-journey' element={<StartJourney />} />
        <Route path='/course/:slug' element={<Course />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
