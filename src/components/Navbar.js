import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo1.jpg';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" style={{ borderBottom: '2px solid #fff' }}>
      <div className="container">
      <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
  <img 
    src={logo} 
    alt="MedQ Logo" 
    style={{ width: '55px', height: '45px', marginRight: '10px', borderRadius: '50%' }} 
  />
  Advanced Lab & Diagnostic 
</Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} 
                to="/services"
              >
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/book-appointment' ? 'active' : ''}`} 
                to="/book-appointment"
              >
                Appointment
              </Link>
            </li>
           {/* <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} 
                to="/blog"
              >
                Health Tips
              </Link>
            </li>*/}
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${location.pathname === '/patient-portal' ? 'active' : ''}`} 
                    to="/patient-portal"
                  >
                    📋 My Profile
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle btn btn-link text-white text-decoration-none"
                    data-bs-toggle="dropdown"
                  >
                    👤 {user?.name}
                  </button>
                  <ul className="dropdown-menu">
                    {/*<li>
                      <Link className="dropdown-item" to="/dashboard">
                        📊 Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        👤 My Profile
                      </Link>
                    </li>*/}
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={handleLogout}>
                        🚪 Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="btn btn-outline-light btn-sm me-2"
                  >
                    🔐 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="btn btn-light btn-sm"
                    style={{ color: '#0056b3', fontWeight: '500' }}
                  >
                    📝 Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;