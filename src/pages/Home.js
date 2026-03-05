import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  // Initialize Owl Carousel after component mounts
  React.useEffect(() => {
    // Load Owl Carousel scripts dynamically
    const loadOwlCarousel = () => {
      // Check if Owl Carousel is already loaded
      if (window.$ && window.$.fn && window.$.fn.owlCarousel) {
        initializeCarousel();
        return;
      }

      // Load jQuery if not already loaded
      if (!window.jQuery) {
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        jqueryScript.integrity = 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=';
        jqueryScript.crossOrigin = 'anonymous';
        jqueryScript.onload = loadOwlCarouselScript;
        document.head.appendChild(jqueryScript);
      } else {
        loadOwlCarouselScript();
      }
    };

    const loadOwlCarouselScript = () => {
      const owlScript = document.createElement('script');
      owlScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
      owlScript.integrity = 'sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==';
      owlScript.crossOrigin = 'anonymous';
      owlScript.onload = initializeCarousel;
      document.head.appendChild(owlScript);
    };

    const initializeCarousel = () => {
      if (window.$ && window.$.fn && window.$.fn.owlCarousel) {
        window.$('.owl-carousel').owlCarousel({
          loop: true,
          center: true,
          items: 3,
          margin: 20,
          autoplay: true,
          dots: true,
          autoplayTimeout: 4000,
          smartSpeed: 450,
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1170: {
              items: 3
            }
          }
        });
      }
    };

    loadOwlCarousel();

    // Cleanup function
    return () => {
      if (window.$ && window.$('.owl-carousel').data('owl.carousel')) {
        window.$('.owl-carousel').trigger('destroy.owl.carousel');
      }
    };
  }, []);

  // Rolling Number Animation useEffect
  React.useEffect(() => {
    const initRollingNumbers = () => {
      const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      };

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll('.number');
            numbers.forEach(number => {
              const target = parseFloat(number.getAttribute('data-target'));
              const duration = 2000;
              const steps = 60;
              const increment = target / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                number.textContent = target % 1 === 0 ? Math.floor(current) : current.toFixed(1);
              }, duration / steps);
            });
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const statsSection = document.querySelector('.rolling-stats-section');
      if (statsSection) {
        observer.observe(statsSection);
      }
    };

    // Initialize rolling numbers when component mounts
    const timer = setTimeout(initRollingNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Hero Section - Professional Medical Background */}
      <section
        className="hero-section"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 52, 96, 0.8), rgba(15, 52, 96, 0.8)), url("https://i.pinimg.com/1200x/31/d5/6a/31d56adf9a6017be573aa959b20b9718.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: '150px 0 100px 0', // Increased top padding to account for fixed navbar
          marginTop: '0',
          position: 'relative'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            {/* Left Side Text */}
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-4 text-shadow">
                Precision Diagnostics for Better Health Outcomes
              </h1>
              <p className="lead mb-4 text-shadow" style={{ fontSize: '1.25rem' }}>
                Advanced Lab & Diagnostic Centre provides accurate, reliable diagnostic testing 
                with cutting-edge technology and board-certified pathologists. 
                Your health is our priority.
              </p>
              <div className="d-flex flex-wrap gap-3">
                {!isAuthenticated ? (
                  <>
                    <Link
                      to="/register"
                      className="btn btn-light btn-lg px-4 py-3 fw-bold"
                      style={{ 
                        backgroundColor: '#2E8B57', 
                        color: 'white', 
                        border: 'none',
                        borderRadius: '8px'
                      }}
                    >
                      Book Appointment
                    </Link>
                    <Link
                      to="/services"
                      className="btn btn-outline-light btn-lg px-4 py-3 fw-bold"
                      style={{ borderRadius: '8px' }}
                    >
                      Our Services
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/patient-portal"
                      className="btn btn-light btn-lg px-4 py-3 fw-bold"
                      style={{ 
                        backgroundColor: '#2E8B57', 
                        color: 'white', 
                        border: 'none',
                        borderRadius: '8px'
                      }}
                    >
                      Patient Portal
                    </Link>
                  </>
                )}
              </div>

              <div className="row mt-5 text-center">
                <div className="col-md-4 mb-3">
                  <h3 className="fw-bold" style={{ color: '#2E8B57' }}>200+</h3>
                  <p className="mb-0">Diagnostic Tests</p>
                </div>
                <div className="col-md-4 mb-3">
                  <h3 className="fw-bold" style={{ color: '#2E8B57' }}>50K+</h3>
                  <p className="mb-0">Patients Served</p>
                </div>
                <div className="col-md-4 mb-3">
                  <h3 className="fw-bold" style={{ color: '#2E8B57' }}>24H</h3>
                  <p className="mb-0">Report Delivery</p>
                </div>
              </div>
            </div>

            {/* Right Side - Medical Illustration */}
            <div className="col-lg-5 text-center">
              <img 
                src="https://i.pinimg.com/1200x/57/c0/bb/57c0bb18e3ce1b0423dd34b2632c49c8.jpg" 
                alt="Medical Laboratory" 
                className="img-fluid rounded-3 shadow-lg"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your sections remain exactly the same */}
      {/* Services Preview */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3" style={{ color: '#0F3460' }}>Our Diagnostic Services</h2>
            <p className="text-muted lead">
              Comprehensive range of medical tests with accurate results and quick turnaround
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                title: 'Blood Tests',
                icon: '🧪',
                desc: 'Complete hematology, biochemistry, and specialized blood work',
                features: ['CBC', 'Lipid Profile', 'Liver Function', 'Renal Profile'],
                bgColor: '#E8F4FD'
              },
              {
                title: 'Radiology & Imaging',
                icon: '📷',
                desc: 'Advanced diagnostic imaging with modern digital technology',
                features: ['Digital X-Ray', 'Ultrasound', 'CT Scan', 'MRI'],
                bgColor: '#F0F8FF'
              },
              {
                title: 'Cardiac Diagnostics',
                icon: '❤️',
                desc: 'Comprehensive heart health assessment and monitoring',
                features: ['ECG', 'Echocardiography', 'Stress Test', 'Holter'],
                bgColor: '#FFE8E8'
              },
              {
                title: 'Wellness Packages',
                icon: '⭐',
                desc: 'Preventive health checkups for all age groups',
                features: ['Basic Health', 'Executive', 'Comprehensive', 'Senior'],
                bgColor: '#F0FFF0'
              },
              {
                title: 'Specialized Tests',
                icon: '🔬',
                desc: 'Advanced molecular and genetic diagnostic testing',
                features: ['DNA Testing', 'Hormonal Assays', 'Allergy', 'Cancer Markers'],
                bgColor: '#F5F0FF'
              },
              {
                title: 'Home Collection',
                icon: '🏠',
                desc: 'Convenient sample collection at your doorstep',
                features: ['Free Service', 'Trained Phlebotomists', 'Safe', 'Quick'],
                bgColor: '#FFF8E1'
              },
            ].map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div 
                  className="card card-hover h-100 border-0 shadow-sm"
                  style={{ 
                    backgroundColor: service.bgColor,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderRadius: '12px'
                  }}
                >
                  <div className="card-body text-center p-4">
                    <div
                      className="service-icon mb-3"
                      style={{ fontSize: '3rem' }}
                    >
                      {service.icon}
                    </div>
                    <h5 className="card-title fw-bold" style={{ color: '#0F3460' }}>{service.title}</h5>
                    <p className="card-text text-muted mb-3">{service.desc}</p>
                    <div className="mt-3">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="badge bg-white text-dark me-1 mb-2 px-3 py-2"
                          style={{ 
                            borderRadius: '20px',
                            fontSize: '0.8rem'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link 
              to="/services" 
              className="btn btn-primary btn-lg px-5 py-3 fw-bold"
              style={{ 
                backgroundColor: '#2E8B57', 
                border: 'none',
                borderRadius: '8px'
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Lab Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3" style={{ color: '#0F3460' }}>
              Advanced Lab Excellence
            </h2>
          </div>

          <div className="row align-items-center">
            {/* Left Side - Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative">
                <img
                  src="https://i.pinimg.com/1200x/40/76/33/40763339cb06b861855027142081c17b.jpg"
                  alt="Advanced Laboratory Equipment"
                  className="img-fluid rounded-3 shadow-lg w-100"
                  style={{
                    height: '450px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <h3 className="fw-bold mb-4" style={{ color: '#0F3460', fontSize: '2rem' }}>
                  State-of-the-Art Diagnostic Solutions
                </h3>
                <p className="text-muted mb-4 fs-5">
                  Our advanced laboratory is equipped with the latest diagnostic technology 
                  and staffed by experienced medical professionals to ensure precise results 
                  for every patient.
                </p>

                <div className="row mb-4">
                  {[
                    {
                      icon: '🔬',
                      title: 'Advanced Equipment',
                      desc: 'Latest automated analyzers'
                    },
                    {
                      icon: '👨‍⚕️',
                      title: 'Expert Team',
                      desc: 'Certified pathologists'
                    },
                    {
                      icon: '📊',
                      title: 'Digital Reports',
                      desc: 'Online access 24/7'
                    },
                    {
                      icon: '🚚',
                      title: 'Quick Service',
                      desc: 'Fast turnaround time'
                    }
                  ].map((item, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <span className="fs-4 me-3" style={{ color: '#2E8B57' }}>
                          {item.icon}
                        </span>
                        <div>
                          <h6 className="fw-bold mb-1" style={{ color: '#0F3460' }}>
                            {item.title}
                          </h6>
                          <small className="text-muted">{item.desc}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <Link
                    to="/about"
                    className="btn btn-primary btn-lg px-4 py-3 fw-bold"
                    style={{ 
                      backgroundColor: '#2E8B57', 
                      border: 'none',
                      borderRadius: '8px'
                    }}
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Text Content */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold display-5 mb-4" style={{ color: '#0F3460' }}>
                Why Choose Advanced Lab & Diagnostic
              </h2>
              <p className="text-muted mb-4 fs-5">
                With over 15 years of experience in diagnostic services, we are committed to 
                providing the highest standards of accuracy, reliability, and patient care.
              </p>
              
              <div className="row">
                {[
                  {
                    icon: '🎯',
                    title: '99.8% Accuracy',
                    desc: 'Quality assured results with precision testing',
                  },
                  {
                    icon: '⚡',
                    title: 'Quick Reports',
                    desc: 'Most reports delivered within 6-24 hours',
                  },
                  {
                    icon: '💰',
                    title: 'Transparent Pricing',
                    desc: 'No hidden costs with competitive pricing',
                  },
                  {
                    icon: '🏆',
                    title: 'NABL Accredited',
                    desc: 'Certified quality management system',
                  },
                ].map((item, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0">
                        <span 
                          className="fs-2"
                          style={{ color: '#2E8B57' }}
                        >{item.icon}</span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="fw-bold mb-2" style={{ color: '#0F3460' }}>{item.title}</h5>
                        <p className="text-muted mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Mobile App Screenshot Style */}
            <div className="col-lg-6">
              <div className="position-relative text-center">
                {/* Mobile Device Mockup */}
                <div 
                  className="mx-auto position-relative mobile-mockup"
                  style={{
                    width: '280px',
                    height: '560px',
                    background: 'linear-gradient(135deg, #0F3460, #2E8B57)',
                    borderRadius: '35px',
                    boxShadow: `
                      0 25px 50px rgba(0, 0, 0, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      inset 0 0 20px rgba(0, 0, 0, 0.1)
                    `,
                    overflow: 'hidden',
                    border: '12px solid #1a1a1a',
                    transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                    cursor: 'pointer'
                  }}
                >
                  {/* Screen Content */}
                  <div 
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: '15px',
                      background: 'linear-gradient(135deg, #0F3460, #2E8B57)',
                      overflow: 'hidden',
                      transform: 'translateZ(0)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {/* Status Bar */}
                    <div className="d-flex justify-content-between align-items-center text-white mb-3" style={{ fontSize: '12px' }}>
                      <span>9:41</span>
                      <div className="d-flex align-items-center">
                        <span className="me-1">📶</span>
                        <span className="me-1">🔋</span>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="text-white text-center mb-4">
                      <h6 className="fw-bold mb-1">Advanced Lab</h6>
                      <small style={{ fontSize: '10px' }}>Your Health Partner</small>
                    </div>

                    {/* Welcome Card */}
                    <div 
                      className="bg-white rounded-3 p-3 mx-auto mb-3 shadow-sm"
                      style={{ maxWidth: '220px' }}
                    >
                      <div className="text-center mb-2">
                        <div className="fs-4">👋</div>
                        <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '14px' }}>Welcome Back!</h6>
                        <small className="text-muted" style={{ fontSize: '10px' }}>Ready for your health check?</small>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="row text-center text-white mb-3">
                      <div className="col-4">
                        <div className="bg-dark rounded-2 p-2 mx-1">
                          <small style={{ fontSize: '9px' }}>Reports</small>
                          <div className="fw-bold" style={{ fontSize: '12px' }}>24H</div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="bg-dark rounded-2 p-2 mx-1">
                          <small style={{ fontSize: '9px' }}>Accuracy</small>
                          <div className="fw-bold" style={{ fontSize: '12px' }}>99.8%</div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="bg-dark rounded-2 p-2 mx-1">
                          <small style={{ fontSize: '9px' }}>Tests</small>
                          <div className="fw-bold" style={{ fontSize: '12px' }}>200+</div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Reports */}
                    <div className="bg-white rounded-3 p-3 mx-auto mb-3 shadow-sm" style={{ maxWidth: '220px' }}>
                      <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '12px' }}>Recent Reports</h6>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div>
                          <small className="text-muted d-block" style={{ fontSize: '9px' }}>Blood Test</small>
                          <small className="text-muted" style={{ fontSize: '8px' }}>Nov 24, 2025</small>
                        </div>
                        <span className="badge bg-success" style={{ fontSize: '8px' }}>Ready</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <small className="text-muted d-block" style={{ fontSize: '9px' }}>Full Body</small>
                          <small className="text-muted" style={{ fontSize: '8px' }}>Nov 20, 2025</small>
                        </div>
                        <span className="badge bg-success" style={{ fontSize: '8px' }}>Ready</span>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="text-center">
                      <button 
                        className="btn btn-light btn-sm w-75 mb-2 fw-bold d-flex align-items-center justify-content-center"
                        style={{ 
                          fontSize: '10px',
                          height: '30px'
                        }}
                      >
                        <span className="me-1">📱</span>
                        View Reports
                      </button>
                      <button 
                        className="btn btn-outline-light btn-sm w-75 d-flex align-items-center justify-content-center"
                        style={{ 
                          fontSize: '10px',
                          height: '30px'
                        }}
                      >
                        <span className="me-1">📅</span>
                        Book Test
                      </button>
                    </div>

                    {/* Bottom Navigation */}
                    <div 
                      className="position-absolute bottom-0 start-0 end-0 bg-white py-2 border-top"
                      style={{ 
                        borderBottomLeftRadius: '23px', 
                        borderBottomRightRadius: '23px',
                        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <div className="row text-center">
                        <div className="col-3">
                          <div style={{ color: '#2E8B57', fontSize: '16px' }}>🏠</div>
                          <small style={{ fontSize: '8px', color: '#2E8B57' }}>Home</small>
                        </div>
                        <div className="col-3">
                          <div style={{ color: '#6c757d', fontSize: '16px' }}>📊</div>
                          <small style={{ fontSize: '8px', color: '#6c757d' }}>Reports</small>
                        </div>
                        <div className="col-3">
                          <div style={{ color: '#6c757d', fontSize: '16px' }}>👤</div>
                          <small style={{ fontSize: '8px', color: '#6c757d' }}>Profile</small>
                        </div>
                        <div className="col-3">
                          <div style={{ color: '#6c757d', fontSize: '16px' }}>⚙️</div>
                          <small style={{ fontSize: '8px', color: '#6c757d' }}>More</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements - App Store Style Badges */}
                <div 
                  className="position-absolute floating-badge-1"
                  style={{
                    top: '20%',
                    right: '-30px',
                    background: 'linear-gradient(135deg, #2E8B57, #0F3460)',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    boxShadow: '0 5px 15px rgba(46, 139, 87, 0.4)',
                    zIndex: 5,
                    transform: 'rotate(5deg)',
                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                >
                  ⭐ 4.9 Rating
                </div>
                
                <div 
                  className="position-absolute floating-badge-2"
                  style={{
                    bottom: '30%',
                    left: '-40px',
                    background: 'linear-gradient(135deg, #0F3460, #2E8B57)',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    boxShadow: '0 5px 15px rgba(15, 52, 96, 0.4)',
                    zIndex: 5,
                    transform: 'rotate(-5deg)',
                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                >
                  📱 10K+ Downloads
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add CSS for hover effects */}
        <style jsx>{`
          .mobile-mockup:hover {
            transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(-10px) !important;
            box-shadow: 
              0 35px 70px rgba(243, 250, 53, 0.91),
              inset 0 1px 0 rgba(237, 240, 39, 0.97),
              inset 0 0 30px rgba(224, 227, 22, 0.84),
              0 0 20px rgba(238, 246, 13, 1) !important;
          }

          .mobile-mockup:hover > div {
            transform: translateZ(10px) scale(0.98) !important;
          }

          .mobile-mockup:hover + .floating-badge-1 {
            transform: rotate(8deg) translateX(-5px) translateY(-5px) !important;
            box-shadow: 0 8px 25px rgba(241, 238, 35, 0.6) !important;
          }

          .mobile-mockup:hover ~ .floating-badge-2 {
            transform: rotate(-8deg) translateX(5px) translateY(-5px) !important;
            box-shadow: 0 8px 25px rgba(233, 236, 56, 0.6) !important;
          }

          /* Smooth transition for all interactive elements */
          .mobile-mockup, .mobile-mockup > div, .floating-badge-1, .floating-badge-2 {
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) !important;
          }
        `}</style>
      </section>



      {/* Rolling Numbers Statistics Section */}
      <section className="py-5 bg-light rolling-stats-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Advanced Lab Content */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="fw-bold display-5 mb-4" style={{ color: '#0F3460' }}>
                Remarkable Features You Can Count On!
              </h2>
              <p className="text-muted mb-4 fs-5">
                Jam-packed with outstanding features to elevate your diagnostic experience, 
                making healthcare smarter and more accessible than ever before.
              </p>
              
              <div className="row">
                {[
                  {
                    icon: '✅',
                    title: 'Trusted',
                    desc: 'Trusted by patients and healthcare professionals',
                  },
                  {
                    icon: '🚚',
                    title: 'Flexible Delivery',
                    desc: 'Multiple report delivery options including digital',
                  },
                  {
                    icon: '⚡',
                    title: 'Quick Service',
                    desc: 'Fast turnaround time for all diagnostic tests',
                  },
                  {
                    icon: '🛡️',
                    title: 'Quality Assured',
                    desc: 'NABL accredited with strict quality controls',
                  },
                ].map((item, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0">
                        <span 
                          className="fs-2"
                          style={{ color: '#2E8B57' }}
                        >{item.icon}</span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="fw-bold mb-2" style={{ color: '#0F3460' }}>{item.title}</h5>
                        <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Rolling Number Animation */}
            <div className="col-lg-6">
              <div className="row text-center">
                {/* Stat 1 */}
                <div className="col-6 mb-5">
                  <div className="position-relative">
                    <div 
                      className="rolling-number mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '120px',
                        height: '120px',
                        background: 'linear-gradient(135deg, #0F3460, #2E8B57)',
                        borderRadius: '50%',
                        color: 'white',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        boxShadow: '0 10px 30px rgba(15, 52, 96, 0.3)',
                        border: '5px solid #fff',
                        position: 'relative'
                      }}
                    >
                      <span className="number" data-target="200">0</span>+
                    </div>
                    <h5 className="fw-bold mt-2" style={{ color: '#0F3460' }}>Diagnostic Tests</h5>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>Comprehensive test menu</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="col-6 mb-5">
                  <div className="position-relative">
                    <div 
                      className="rolling-number mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '120px',
                        height: '120px',
                        background: 'linear-gradient(135deg, #2E8B57, #0F3460)',
                        borderRadius: '50%',
                        color: 'white',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        boxShadow: '0 10px 30px rgba(46, 139, 87, 0.3)',
                        border: '5px solid #fff',
                        position: 'relative'
                      }}
                    >
                      <span className="number" data-target="5000">0</span>+
                    </div>
                    <h5 className="fw-bold mt-2" style={{ color: '#0F3460' }}>Patients Served</h5>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>Trusted by thousands</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="col-6">
                  <div className="position-relative">
                    <div 
                      className="rolling-number mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '120px',
                        height: '120px',
                        background: 'linear-gradient(135deg, #0F3460, #1E4A76)',
                        borderRadius: '50%',
                        color: 'white',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        boxShadow: '0 10px 30px rgba(15, 52, 96, 0.3)',
                        border: '5px solid #fff',
                        position: 'relative'
                      }}
                    >
                      <span className="number" data-target="99.8">0</span>%
                    </div>
                    <h5 className="fw-bold mt-2" style={{ color: '#0F3460' }}>Accuracy Rate</h5>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>Quality assured results</p>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="col-6">
                  <div className="position-relative">
                    <div 
                      className="rolling-number mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '120px',
                        height: '120px',
                        background: 'linear-gradient(135deg, #2E8B57, #3DA56A)',
                        borderRadius: '50%',
                        color: 'white',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        boxShadow: '0 10px 30px rgba(46, 139, 87, 0.3)',
                        border: '5px solid #fff',
                        position: 'relative'
                      }}
                    >
                      <span className="number" data-target="24">0</span>H
                    </div>
                    <h5 className="fw-bold mt-2" style={{ color: '#0F3460' }}>Report Delivery</h5>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>Quick turnaround time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rolling Number Animation Styles */}
        <style jsx>{`
          .rolling-number {
            transition: all 0.5s ease-in-out;
          }
          
          .rolling-number:hover {
            transform: scale(1.1);
            box-shadow: 0 15px 40px rgba(15, 52, 96, 0.4) !important;
          }
        `}</style>
      </section>

    
      {/* Testimonials - Owl Carousel */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3" style={{ color: '#0F3460' }}>Patient Testimonials</h2>
            <p className="text-muted lead">
              Trusted by thousands of patients for accurate diagnostics
            </p>
          </div>

          <div className="owl-carousel owl-theme">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                review: 'As a referring physician, I always trust Advanced Lab for accurate and timely reports. Their professionalism is commendable.',
                rating: 5,
                test: 'Referral Partner',
                role: 'Cardiologist'
              },
              {
                name: 'Priya Sharma',
                review: 'The home collection service saved me so much time. The phlebotomist was very professional and the reports were accurate.',
                rating: 5,
                test: 'Full Body Checkup',
                role: 'Software Engineer'
              },
              {
                name: 'Mr. Suresh Menon',
                review: 'Quick service and accurate results. The online report portal is very convenient for accessing historical reports.',
                rating: 4,
                test: 'Diabetes Monitoring',
                role: 'Business Owner'
              },
              {
                name: 'Dr. Anitha Reddy',
                review: 'Excellent quality control and precise results. Our hospital has been partnering with them for 5 years.',
                rating: 5,
                test: 'Hospital Partner',
                role: 'Pathologist'
              },
              {
                name: 'Karthik M',
                review: 'Very professional staff and clean facility. Got my reports within promised timeline.',
                rating: 4,
                test: 'Pre-employment Checkup',
                role: 'IT Professional'
              },
              {
                name: 'Mrs. Geetha R',
                review: 'The wellness package was comprehensive and affordable. Doctor consultation included was very helpful.',
                rating: 5,
                test: 'Executive Health Package',
                role: 'Teacher'
              },
            ].map((testimonial, index) => (
              <div key={index} className="item">
                <div 
                  className="card shadow-sm h-100 border-0 testimonial-card"
                  style={{
                    borderRadius: '15px',
                    overflow: 'hidden',
                    backgroundColor: 'white'
                  }}
                >
                  <div className="card-body p-4">
                    <div className="text-warning mb-3 fs-5">
                      {'★'.repeat(testimonial.rating)}
                      {'☆'.repeat(5 - testimonial.rating)}
                    </div>
                    <p className="card-text fst-italic mb-4" style={{
                      lineHeight: '1.6',
                      minHeight: '100px',
                      color: '#555'
                    }}>
                      "{testimonial.review}"
                    </p>
                    <div className="mt-auto">
                      <footer>
                        <strong className="d-block" style={{ fontSize: '1.1em', color: '#0F3460' }}>
                          {testimonial.name}
                        </strong>
                        <small className="text-muted d-block">
                          {testimonial.role}
                        </small>
                        <small className="text-primary fw-bold">
                          {testimonial.test}
                        </small>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency/Quick Contact Banner */}
      <section 
        className="text-white py-4"
        style={{ backgroundColor: '#0F3460' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h4 className="mb-1 fw-bold">🕒 Need Urgent Testing?</h4>
              <p className="mb-0">
                We provide emergency testing services with same-day reports for critical cases.
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <a 
                href="tel:+91 7338994779" 
                className="btn btn-light btn-lg fw-bold px-4"
                style={{ 
                  backgroundColor: '#2E8B57', 
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px'
                }}
              >
                📞 Call Now: +91-7338994779
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Add Owl Carousel CSS */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" 
        integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" 
        integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />

      <style>{`
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
        }
        
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        /* Owl Carousel Custom Styles */
        .owl-carousel .item {
          text-align: center;
          padding: 20px 10px;
          margin-bottom: 10px;
          opacity: 0.6;
          transform: scale3d(0.8, 0.8, 1);
          transition: all 0.3s ease-in-out;
        }
        
        .owl-carousel .owl-item.active.center .item {
          opacity: 1;
          transform: scale3d(1.0, 1.0, 1);
        }
        
        .owl-theme .owl-dots .owl-dot.active span, 
        .owl-theme .owl-dots .owl-dot:hover span {
          background: #2E8B57 !important;
          width: 25px;
        }

        .owl-theme .owl-dots .owl-dot span {
          width: 12px;
          height: 12px;
          background: #6c757d;
          transition: all 0.2s ease;
        }

        .owl-carousel .owl-nav button.owl-next, 
        .owl-carousel .owl-nav button.owl-prev {
          background-color: rgba(46, 139, 87, 0.3) !important;
          width: 40px;
          height: 40px;
          border-radius: 50% !important;
          color: #2E8B57 !important;
          font-size: 18px;
        }

        .owl-carousel .owl-nav button.owl-next:hover, 
        .owl-carousel .owl-nav button.owl-prev:hover {
          background-color: #2E8B57 !important;
          color: white !important;
        }

        .testimonial-card {
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(15, 52, 96, 0.15) !important;
        }

        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Home;