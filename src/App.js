import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartJourney from "./pages/StartJourney";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/start-journey' element={<StartJourney />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
