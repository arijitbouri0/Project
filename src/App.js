import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/DashBoard';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Home>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Home>
    </Router>
  );
}

export default App;
