import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartJourney from "./pages/StartJourney";
import Course from "./pages/Course";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/start-journey' element={<StartJourney />} />
        <Route path='/:slug' element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
