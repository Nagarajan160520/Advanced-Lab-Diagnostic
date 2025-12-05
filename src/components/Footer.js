import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => { 
  return (
    <footer className="footer" style={{backgroundColor: '#1e293b', color: 'white', padding: '40px 0'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>🔬 Advanced Lab & Diagnostic Centre</h5>
            <p>Providing accurate and reliable diagnostic testing services with advanced technology and expert pathologists.</p>
            <div className="mt-3">
              <strong>Phone:</strong> +91-6381095854<br />
              <strong>Email:</strong> nagarajan16052001@gmail.com<br />
              <strong>Hours:</strong> 6:00 AM - 10:00 PM
            </div>
          </div>
          
          <div className="col-md-2 mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/services" className="text-light text-decoration-none">Our Tests</Link></li>
              <li><Link to="/book-test" className="text-light text-decoration-none">Book a Test</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4">
            <h6>Our Services</h6>
            <ul className="list-unstyled">
              <li><a href="#blood-tests" className="text-light text-decoration-none">Blood Tests</a></li>
              <li><a href="#imaging" className="text-light text-decoration-none">Imaging Services</a></li>
              <li><a href="#pathology" className="text-light text-decoration-none">Pathology</a></li>
              <li><a href="#wellness" className="text-light text-decoration-none">Wellness Packages</a></li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4">
            <h6>Contact Info</h6>
            <ul className="list-unstyled">
              <li>Med Q,176/1,kollam to</li>
              <li>thirumangalam road</li>
              <li>opposite union office,kadayanallur,</li>
              <li>tenkasi-627751, tamil nadu,india</li>
              <li>📞 +91-6381095854</li>
              <li>📧 nagarajan16052001@gmail.com</li>
              <li>🕒 Open Daily: 9AM-10PM</li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2025 Advanced Lab & Diagnostic Centre.</p>
            <p>Developed by Nagarajan(MERN stack developer)</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#privacy" className="text-light text-decoration-none me-3">Privacy Policy</a>
            <a href="#terms" className="text-light text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;