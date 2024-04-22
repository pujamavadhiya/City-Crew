import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customer from './Customer';
import CustomerReview from './CustomerReview';
import Navbar from "./Navbar";
import Home from "./Home"
import Services from './Services';

function MyApp() {
  return (
    <div>
      <Navbar />
      <Routes> {/* Use Routes instead of div */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Services />} />
        <Route path="/cr" element={<Customer />} />
        <Route path="/sr" element={<CustomerReview />} />
      </Routes> {/* Close Routes */}
    </div>
  );
}

export default MyApp;
