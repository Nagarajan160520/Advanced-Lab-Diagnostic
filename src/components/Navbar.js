import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo1.jpg';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Animation styles
  const styles = {
    navbar: {
      background: scrolled 
        ? 'linear-gradient(135deg, #0056b3 0%, #0077be 100%)' 
        : 'linear-gradient(135deg, #0077be 0%, #00a6e0 100%)',
      padding: scrolled ? '8px 0' : '15px 0',
      transition: 'all 0.4s ease-in-out',
      boxShadow: scrolled 
        ? '0 5px 20px rgba(0,0,0,0.2)' 
        : '0 2px 10px rgba(0,0,0,0.1)',
      borderBottom: '2px solid rgba(255,255,255,0.3)',
      animation: 'slideDown 0.5s ease-out'
    },
    brand: {
      animation: 'fadeInRight 0.6s ease-out',
      transform: 'translateX(0)',
      transition: 'transform 0.3s ease'
    },
    brandHover: {
      transform: 'scale(1.05)'
    },
    logo: {
      width: '55px',
      height: '45px',
      marginRight: '10px',
      borderRadius: '50%',
      transition: 'all 0.3s ease',
      animation: 'rotateIn 0.8s ease-out',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
    },
    logoHover: {
      transform: 'rotate(360deg) scale(1.1)',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
    },
    navItem: {
      margin: '0 5px',
      animation: 'fadeInUp 0.5s ease-out',
      animationFillMode: 'both'
    },
    navLink: {
      color: 'white',
      padding: '8px 15px',
      borderRadius: '25px',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      fontWeight: '500'
    },
    navLinkHover: {
      background: 'rgba(255,255,255,0.15)',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
    },
    activeLink: {
      background: 'rgba(255,255,255,0.25)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
      fontWeight: '600'
    },
    emergencyButton: {
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ff4757 100%)',
      border: 'none',
      borderRadius: '25px',
      padding: '8px 20px',
      color: 'white',
      fontWeight: '600',
      animation: 'pulse 2s infinite',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(255,71,87,0.4)',
      textDecoration: 'none',
      display: 'inline-block'
    },
    emergencyButtonHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(255,71,87,0.6)',
      background: 'linear-gradient(135deg, #ff4757 0%, #ff6b6b 100%)'
    },
    toggler: {
      border: '2px solid rgba(255,255,255,0.5)',
      borderRadius: '8px',
      padding: '8px',
      transition: 'all 0.3s ease'
    },
    togglerHover: {
      background: 'rgba(255,255,255,0.1)',
      transform: 'rotate(90deg)'
    }
  };

  // Animation keyframes as a style tag
  const animationStyles = `
    @keyframes slideDown {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes fadeInRight {
      from {
        transform: translateX(-30px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes fadeInUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes rotateIn {
      from {
        transform: rotate(-180deg) scale(0);
        opacity: 0;
      }
      to {
        transform: rotate(0) scale(1);
        opacity: 1;
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0 4px 15px rgba(255,71,87,0.4);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(255,71,87,0.6);
      }
      100% {
        transform: scale(1);
        box-shadow: 0 4px 15px rgba(255,71,87,0.4);
      }
    }

    @keyframes shine {
      to {
        left: 200%;
      }
    }

    .nav-link-shine {
      position: relative;
      overflow: hidden;
    }

    .nav-link-shine::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: left 0.5s ease;
    }

    .nav-link-shine:hover::after {
      left: 150%;
    }

    .nav-item {
      opacity: 0;
      animation: fadeInUp 0.5s ease-out forwards;
    }

    .nav-item:nth-child(1) { animation-delay: 0.1s; }
    .nav-item:nth-child(2) { animation-delay: 0.2s; }
    .nav-item:nth-child(3) { animation-delay: 0.3s; }
    .nav-item:nth-child(4) { animation-delay: 0.4s; }
    .nav-item:nth-child(5) { animation-delay: 0.5s; }
  `;

  // Handle mouse events with state
  const [hoveredItem, setHoveredItem] = useState(null);
  const [logoHover, setLogoHover] = useState(false);
  const [emergencyHover, setEmergencyHover] = useState(false);
  const [togglerHover, setTogglerHover] = useState(false);

  return (
    <>
      <style>{animationStyles}</style>
      <nav 
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={styles.navbar}
      >
        <div className="container">
          {/* Brand with animation */}
          <Link 
            className="navbar-brand fw-bold d-flex align-items-center" 
            to="/"
            style={styles.brand}
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >
            <img 
              src={logo} 
              alt="MedQ Logo" 
              style={{
                ...styles.logo,
                ...(logoHover ? styles.logoHover : {})
              }} 
            />
            <span style={{ 
              transition: 'all 0.3s ease',
              textShadow: scrolled ? '2px 2px 4px rgba(0,0,0,0.2)' : 'none'
            }}>
              Advanced Lab & Diagnostic
            </span>
          </Link>
          
          {/* Toggler with animation */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            style={{
              ...styles.toggler,
              ...(togglerHover ? styles.togglerHover : {})
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={() => setTogglerHover(true)}
            onMouseLeave={() => setTogglerHover(false)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {['Home', 'About Us', 'Our Services', 'Appointment', 'Contact'].map((item, index) => {
                const paths = ['/', '/about', '/services', '/book-appointment', '/contact'];
                return (
                  <li 
                    className="nav-item" 
                    key={item}
                    style={styles.navItem}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link 
                      className={`nav-link nav-link-shine ${location.pathname === paths[index] ? 'active' : ''}`} 
                      to={paths[index]}
                      style={{
                        ...styles.navLink,
                        ...(location.pathname === paths[index] ? styles.activeLink : {}),
                        ...(hoveredItem === item ? styles.navLinkHover : {})
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Emergency button with animation */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="btn"
                  style={{
                    ...styles.emergencyButton,
                    ...(emergencyHover ? styles.emergencyButtonHover : {})
                  }}
                  onMouseEnter={() => setEmergencyHover(true)}
                  onMouseLeave={() => setEmergencyHover(false)}
                >
                  <span style={{ marginRight: '5px' }}>📞</span>
                  Emergency: +91 7338994779
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Add some spacing for fixed navbar */}
      <div style={{ height: '80px' }}></div>
    </>
  );
};

export default Navbar;