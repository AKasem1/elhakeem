// src/App.js
import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import {Routes, Route, Navigate} from 'react-router-dom'
import { Navbar } from "./Components/navbar";
import "./App.css";
import Home from "./pages/Home";
import ScrollProgressBar from "./Components/ScrollProgressBar";
import Footer from "./Components/Footer";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Change this value to simulate longer/shorter loading times
  }, []);

  return (
    <div className="App">
      <Navbar />
      <ScrollProgressBar />
      {loading ? (
        <Loader />
      ) : (
        <div className="pages">
          <Routes>
            <Route 
              exact path="/"
              element={<Home />} 
            />
        </Routes>
      <Footer name="footer"/>
      </div>
      )}
    </div>
  );
}

export default App;
