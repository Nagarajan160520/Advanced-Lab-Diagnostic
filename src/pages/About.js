import React from 'react';

const About = () => {
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
          margin: 30,
          autoplay: true,
          dots: true,
          autoplayTimeout: 3000,
          smartSpeed: 500,
          responsive: {
            0: {
              items: 1
            },
            576: {
              items: 2
            },
            768: {
              items: 3
            },
            992: {
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

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="lab-hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-8 mx-auto text-center text-block">
              <h1 className="display-4 fw-bold mb-4">About Advanced Lab & Diagnostic Centre</h1>
              <p className="lead mb-4">
                Your Trusted Partner in Accurate Diagnostics and Healthcare Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <div className="image-hover-wrapper position-relative">
                <img
                  src="https://i.pinimg.com/736x/93/de/1f/93de1f8fe4740220224a24cd8e2f2906.jpg"
                  alt="Diagnostic Lab"
                  className="img-fluid rounded shadow-lg image-hover-zoom"
                  style={{
                    maxWidth: '90%',
                    borderRadius: '20px',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold text-primary mb-4">Who We Are</h2>
              <p className="mb-4">
                <strong>Advanced Lab & Diagnostic Centre</strong> is a state-of-the-art medical laboratory 
                established with a vision to provide accurate, reliable, and timely diagnostic services 
                to the community. With over 15 years of experience in healthcare diagnostics, we have 
                become a trusted name in medical testing.
              </p>
              <p className="mb-4">
                Our centre is equipped with the latest technology and staffed by highly qualified 
                professionals who are committed to maintaining the highest standards of quality and 
                precision in every test we conduct.
              </p>
              
              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <div className="border rounded p-3">
                    <h3 className="text-primary fw-bold">15+</h3>
                    <p className="mb-0">Years Experience</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="border rounded p-3">
                    <h3 className="text-primary fw-bold">500+</h3>
                    <p className="mb-0">Tests Available</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="border rounded p-3">
                    <h3 className="text-primary fw-bold">50K+</h3>
                    <p className="mb-0">Patients Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div className="lab-icon mission">🎯</div>
                  </div>
                  <h3 className="text-center text-primary mb-3">Our Mission</h3>
                  <p className="text-center">
                    To provide accurate, reliable, and timely diagnostic services that empower 
                    healthcare providers and patients with the information needed for better 
                    health outcomes through advanced technology and expert medical professionals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div className="lab-icon vision">🔭</div>
                  </div>
                  <h3 className="text-center text-primary mb-3">Our Vision</h3>
                  <p className="text-center">
                    To be the leading diagnostic centre recognized for excellence in laboratory 
                    medicine, innovation in diagnostic solutions, and commitment to patient care 
                    and community health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose Advanced Lab?</h2>
          <div className="row g-4">
            {[
              {
                icon: '🔬',
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment and latest diagnostic technology for accurate results.'
              },
              {
                icon: '👨‍⚕️',
                title: 'Expert Team',
                description: 'Highly qualified pathologists, technicians, and medical professionals.'
              },
              {
                icon: '⚡',
                title: 'Quick Results',
                description: 'Fast turnaround time with most reports available within 24 hours.'
              },
              {
                icon: '💰',
                title: 'Affordable Pricing',
                description: 'Competitive prices with various health insurance partnerships.'
              },
              {
                icon: '🏠',
                title: 'Home Collection',
                description: 'Convenient sample collection from your home or office.'
              },
              {
                icon: '📱',
                title: 'Digital Reports',
                description: 'Online report access and digital storage for easy retrieval.'
              }
            ].map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card lab-feature-card h-100 border-0">
                  <div className="card-body text-center p-4">
                    <div className="lab-feature-icon mb-3">{feature.icon}</div>
                    <h5 className="fw-bold">{feature.title}</h5>
                    <p className="text-muted">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Accreditations & Certifications</h2>
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="bg-white rounded p-3 text-dark">
                <h6 className="fw-bold">NABL</h6>
                <small>Accredited Laboratory</small>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="bg-white rounded p-3 text-dark">
                <h6 className="fw-bold">ISO 9001</h6>
                <small>Quality Certified</small>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="bg-white rounded p-3 text-dark">
                <h6 className="fw-bold">CAP</h6>
                <small>College of American Pathologists</small>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="bg-white rounded p-3 text-dark">
                <h6 className="fw-bold">ICMR</h6>
                <small>Approved Laboratory</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Owl Carousel - 3 Cards */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Medical Experts</h2>
          <div className="owl-carousel owl-theme">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                qualification: 'MD, DNB Pathology',
                experience: '15+ years',
                specialization: 'Chief Pathologist',
                //image: 'https://i.pinimg.com/736x/dc/29/6d/dc296de22eba90f8a94e037d92d2c76e.jpg'
              },
              {
                name: 'Dr. Priya Sharma',
                qualification: 'MD Microbiology',
                experience: '12+ years',
                specialization: 'Microbiology Head',
                //image: 'https://i.pinimg.com/736x/50/89/73/508973ffe734c67376691718e39e33a5.jpg'
              },
              {
                name: 'Dr. Prakash Reddy',
                qualification: 'MD Biochemistry',
                experience: '10+ years',
                specialization: 'Biochemistry Head',
                //image: 'https://i.pinimg.com/736x/dc/29/6d/dc296de22eba90f8a94e037d92d2c76e.jpg'
              },
              {
                name: 'Dr. Sam Verma',
                qualification: 'MD Hematology',
                experience: '8+ years',
                specialization: 'Hematology Specialist',
                //image: 'https://i.pinimg.com/736x/dc/29/6d/dc296de22eba90f8a94e037d92d2c76e.jpg'
              },
              {
                name: 'Dr. Anjali Mehta',
                qualification: 'MD Radiology',
                experience: '14+ years',
                specialization: 'Radiology Head',
                //image: 'https://i.pinimg.com/736x/50/89/73/508973ffe734c67376691718e39e33a5.jpg'
              },
              {
                name: 'Dr. Vikram Singh',
                qualification: 'MD Immunology',
                experience: '9+ years',
                specialization: 'Immunology Specialist',
                //image: 'https://i.pinimg.com/736x/dc/29/6d/dc296de22eba90f8a94e037d92d2c76e.jpg'
              }
            ].map((doctor, index) => (
              <div key={index} className="item">
                <div className="card lab-team-card border-0 shadow-sm h-100 mx-2" style={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}>
                 {/* <img 
                    src={doctor.image} 
                    className="card-img-top" 
                    alt={doctor.name}
                    style={{
                      height: '280px',
                      objectFit: 'cover',
                      width: '100%'
                    }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x280/007bff/ffffff?text=Doctor+Image';
                    }}
                  /> */}
                  <div className="card-body text-center p-4">
                    <h5 className="fw-bold mb-2 text-primary">{doctor.name}</h5>
                    <h6 className="text-dark mb-2" style={{ fontSize: '0.9rem' }}>{doctor.qualification}</h6>
                    <p className="text-muted mb-2 small">{doctor.specialization}</p>
                    <p className="text-danger mb-0 small fw-bold">
                      <i className="fas fa-briefcase me-1"></i>
                      Experience: {doctor.experience}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Visit Our Lab</h2>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h4 className="text-primary mb-4">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    Our Location 
                  </h4>
                  
                  {/* Google Map Embed */}
                  <div className="map-container rounded shadow-sm mb-4" style={{ height: '300px', overflow: 'hidden' }}>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.123456789012!2d77.3455658!3d9.0699243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06849048f72b85%3A0x50a01d5138d80332!2s389W%2BX68%2C%20Maharaj%20Nagar%2C%20Kadayanallur%2C%20Tamil%20Nadu%20627751!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, borderRadius: '10px' }}
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Advanced Lab & Diagnostic Centre, Kadayanallur"
                    ></iframe>
                  </div>

                  <div className="contact-info">
                    <div className="row">
                      <div className="col-12 mb-3">
                        <h6 className="fw-bold text-dark">
                          <i className="fas fa-building me-2 text-primary"></i>
                          Advanced Lab & Diagnostic Centre
                        </h6>
                        <p className="mb-1">
                        <i className="fas fa-map-pin me-2 text-danger"></i>
                          Med Q, 176/1,kollam to thirumangalam road,
                        </p>
                        <p className="mb-1"> NH 744, opposite union office,kadayanallur</p>
                        <p className="mb-0 text-muted small">tenkasi-627751, tamil nadu,india</p>
                      </div>
                      
                      <div className="col-md-6 mb-2">
                        <p className="mb-1">
                          <i className="fas fa-phone me-2 text-success"></i>
                          <strong>+91-7338994779</strong>
                        </p>
                      </div>
                      <div className="col-md-6 mb-2">
                        <p className="mb-1">
                          <i className="fas fa-envelope me-2 text-info"></i>
                          medqlaboratory@gmail.com
                        </p>
                      </div>
                      
                      <div className="col-md-6 mb-2">
                        <p className="mb-1">
                          <i className="fas fa-clock me-2 text-warning"></i>
                          Mon-Sat: 6:00 AM - 10:00 PM
                        </p>
                      </div>
                      <div className="col-md-6 mb-2">
                        <p className="mb-1">
                          <i className="fas fa-clock me-2 text-warning"></i>
                          Sunday: 7:00 AM - 2:00 PM
                        </p>
                      </div>

                      <div className="col-12 mt-3">
                        <div className="alert alert-info mb-0">
                          <i className="fas fa-info-circle me-2"></i>
                          <strong>Emergency Services:</strong> Available 24/7 for critical tests
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h4 className="text-primary mb-4">
                    <i className="fas fa-info-circle me-2"></i>
                    Lab Facilities & Services
                  </h4>
                  
                  <div className="facilities-list">
                    {[
                      { icon: '🩸', text: 'Complete Blood Count (CBC)' },
                      { icon: '💊', text: 'Biochemistry Tests' },
                      { icon: '🦠', text: 'Microbiology & Culture' },
                      { icon: '🧬', text: 'Haemotology test' },
                      { icon: '🖼️', text: 'Radiology & Imaging' },
                      { icon: '🧪', text: 'Hormones test' },
                      { icon: '🏠', text: 'Home Sample Collection' },
                      { icon: '🚑', text: 'Emergency Services' },
                      { icon: '📱', text: 'Online Report Delivery' },
                      { icon: '🏥', text: 'Corporate Health Checks' },
                      { icon: '👶', text: 'URINE Test' },
                      { icon: '🤰', text: 'Pregnancy Tests HCG' },
                      { icon: '🫀', text: 'Serology test' },
                      { icon: '🧬', text: 'Semen Tests' }
                    ].map((facility, index) => (
                      <div key={index} className="d-flex align-items-center mb-3">
                        <span className="me-3 fs-5">{facility.icon}</span>
                        <span className="text-dark">{facility.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-primary text-white rounded">
                    <h6 className="mb-2">
                      <i className="fas fa-star me-2"></i>
                      Emergency Services Available
                    </h6>
                    <p className="mb-0 small">
                      24/7 emergency lab services with quick turnaround time for critical tests. 
                      Direct coordination with hospitals and healthcare providers.
                    </p>
                  </div>

                  <div className="mt-3 p-3 bg-success text-white rounded">
                    <h6 className="mb-2">
                      <i className="fas fa-home me-2"></i>
                      Home Collection Service
                    </h6>
                    <p className="mb-0 small">
                      Free home sample collection available within Kadayanallur and surrounding areas. 
                      Call to schedule a pickup.
                    </p>
                  </div>
                </div>
              </div>
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
        .image-hover-zoom:hover {
          transform: scale(1.05);
        }
        .lab-feature-card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
        .lab-team-card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
        }
        .map-container {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .facilities-list {
          max-height: 400px;
          overflow-y: auto;
          padding-right: 10px;
        }
        .facilities-list::-webkit-scrollbar {
          width: 5px;
        }
        .facilities-list::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .facilities-list::-webkit-scrollbar-thumb {
          background: #007bff;
          border-radius: 10px;
        }
        
        /* Owl Carousel Custom Styles for Medical Experts - 3 Cards */
        .owl-carousel .item {
          padding: 15px 5px;
          opacity: 0.8;
          transform: scale3d(0.95, 0.95, 1);
          transition: all 0.3s ease-in-out;
        }
        
        .owl-carousel .owl-item.active.center .item {
          opacity: 1;
          transform: scale3d(1.0, 1.0, 1);
        }
        
        .owl-theme .owl-dots {
          margin-top: 20px !important;
        }

        .owl-theme .owl-dots .owl-dot.active span, 
        .owl-theme .owl-dots .owl-dot:hover span {
          background: #0d6efd !important;
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
          background-color: rgba(13, 110, 253, 0.8) !important;
          width: 45px;
          height: 45px;
          border-radius: 50% !important;
          color: white !important;
          font-size: 20px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .owl-carousel .owl-nav button.owl-next {
          right: -20px;
        }

        .owl-carousel .owl-nav button.owl-prev {
          left: -20px;
        }

        .owl-carousel .owl-nav button.owl-next:hover, 
        .owl-carousel .owl-nav button.owl-prev:hover {
          background-color: #0d6efd !important;
          color: white !important;
        }

        @media (max-width: 768px) {
          .owl-carousel .owl-nav button.owl-next {
            right: -10px;
          }
          .owl-carousel .owl-nav button.owl-prev {
            left: -10px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;