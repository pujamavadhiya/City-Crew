import React, { useState } from 'react';
import '../Services.css';
import { Link } from 'react-router-dom';

function Services() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.text();
      console.log('Server response:', data);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      // Show alert message
      alert('Service has been booked successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message
      alert('Failed to book the service. Please try again later.');
    }
  };

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Plumbing Services</h3>
          <p>Plumbing services involve installation, repair, and maintenance of pipes, fixtures, and fittings for water supply and drainage systems in homes.</p>
        </div>
        <div className="service-card">
          <h3>Electrical Services</h3>
          <p>Electrical services encompass installation, repair, and maintenance of electrical systems, including wiring, outlets, switches, and electrical appliances</p>
        </div>
        <div className="service-card">
          <h3>HVAC Services</h3>
          <p>HVAC services involve installation, repair, and maintenance of heating, cooling, and ventilation systems to ensure optimal indoor climate control and air quality.</p>
        </div>
        <div className="service-card">
          <h3>Cleaning Services</h3>
          <p>Cleaning services include regular or deep cleaning of homes, covering areas such as floors, surfaces, bathrooms, kitchens, and windows.</p>
        </div>
        <div className="service-card">
          <h3>Landscaping/Gardening Services</h3>
          <p> Landscaping and gardening services involve designing, installing, and maintaining outdoor spaces, including lawn care, planting, pruning, and hardscaping.</p>
        </div>
        <div className="service-card">
          <h3>Pest Control Services</h3>
          <p>Pest control services focus on the identification, elimination, and prevention of pests such as insects, rodents, and other unwanted creatures in and around homes.</p>
        </div>
        <div className="service-card">
          <h3>Home Renovation/Remodeling Services</h3>
          <p>Develop custom mobile applications for iOS and Android platforms.</p>
        </div>
        <div className="service-card">
          <h3>Painting Services</h3>
          <p>Painting services involve interior and exterior painting of homes, including preparation, priming, and applying paint or other finishes to surfaces.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="booking-form">
        <h3>Book Service</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Description about the service:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Services;
