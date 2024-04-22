import React from 'react';
import plumbingImage from '../images/img.png';
import electricalImage from '../images/img2.jpeg';
import cleaningImage from '../images/img3.jpeg';
import landscapingImage from '../images/img4.jpeg';
import paintingImage from '../images/img5.jpeg';
import pestcontrol from "../images/img6.jpeg";
import home from "../images/img7.jpeg";
import '../Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="intro-container">
        <div className="text-container">
          <h1>Welcome to City Crew</h1>
          <p>
            City Crew is your one-stop destination for all your service needs.
            Whether you need home services, professional services, or any other service,
            City Crew has got you covered.
          </p>
          <p>
            We offer a wide range of services including plumbing, electrical works, cleaning services, landscaping, painting, and much more.
            Our team of skilled professionals ensures high-quality service delivery and customer satisfaction.
          </p>
        </div>
        <div className="image-container">
          <img src={home} alt="Plumbing" />
        </div>
      </div>
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service-card">
            <a href="#">
              <img src={plumbingImage} alt="Plumbing" />
              <h3>Plumbing</h3>
            </a>
          </div>
          <div className="service-card">
            <a href="#">
              <img src={electricalImage} alt="Electrical Works" />
              <h3>Electrical Works</h3>
            </a>
          </div>
          <div className="service-card">
            <a href="#">
              <img src={cleaningImage} alt="Cleaning Services" />
              <h3>Cleaning Services</h3>
            </a>
          </div>
          <div className="service-card">
            <a href="#">
              <img src={landscapingImage} alt="Landscaping" />
              <h3>Landscaping</h3>
            </a>
          </div>
          <div className="service-card">
            <a href="#">
              <img src={paintingImage} alt="Painting" />
              <h3>Painting</h3>
            </a>
          </div>
          <div className="service-card">
            <a href="#">
              <img src={pestcontrol} alt="Pest Control Services" />
              <h3>Pest Control Services</h3>
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 City Crew. All rights reserved. Made by Mahek Rohit Gor (21BCP104)</p>
      </footer>
    </div>
  );
}

export default Home;
