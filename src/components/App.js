import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import AuthenticationPage from './AuthenticationPage';
import './App.css';
import CustomNavbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/authentication" element={<AuthenticationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
