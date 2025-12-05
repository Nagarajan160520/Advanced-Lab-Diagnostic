import React from 'react';
import { Link } from 'react-router-dom';

const Technology = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 52, 96, 0.9), rgba(15, 52, 96, 0.9)), url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: '100px 0 80px 0',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Our Advanced Technology</h1>
          <p className="lead mb-4 fs-4">
            Cutting-edge diagnostic equipment for precise and reliable results
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Link
              to="/services"
              className="btn btn-light btn-lg px-4 py-3 fw-bold"
              style={{ 
                backgroundColor: '#2E8B57', 
                color: 'white', 
                border: 'none',
                borderRadius: '8px'
              }}
            >
              View Our Services
            </Link>
            <Link
              to="/appointment"
              className="btn btn-outline-light btn-lg px-4 py-3 fw-bold"
              style={{ borderRadius: '8px' }}
            >
              Book Test Now
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold display-5 mb-4" style={{ color: '#0F3460' }}>
                State-of-the-Art Diagnostic Technology
              </h2>
              <p className="text-muted mb-4 fs-5">
                At Advanced Lab & Diagnostic, we invest in the latest medical technology 
                to ensure accurate, reliable, and timely diagnostic results. Our advanced 
                equipment is maintained to the highest standards and operated by certified 
                professionals.
              </p>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <span className="fs-2 me-3" style={{ color: '#2E8B57' }}>✅</span>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: '#0F3460' }}>ISO Certified</h6>
                      <small className="text-muted">Quality standards</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <span className="fs-2 me-3" style={{ color: '#2E8B57' }}>🔬</span>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: '#0F3460' }}>Advanced Equipment</h6>
                      <small className="text-muted">Latest technology</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <span className="fs-2 me-3" style={{ color: '#2E8B57' }}>👨‍⚕️</span>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: '#0F3460' }}>Expert Team</h6>
                      <small className="text-muted">Certified professionals</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <span className="fs-2 me-3" style={{ color: '#2E8B57' }}>📊</span>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: '#0F3460' }}>Digital Reports</h6>
                      <small className="text-muted">Online access</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Modern Laboratory Equipment"
                className="img-fluid rounded-3 shadow-lg w-100"
                style={{
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3" style={{ color: '#0F3460' }}>
              Our Technology Portfolio
            </h2>
            <p className="text-muted lead">
              Comprehensive diagnostic solutions across all medical specialties
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                title: 'Clinical Chemistry Analyzers',
                icon: '🧪',
                description: 'Fully automated chemistry analyzers for precise biochemical testing',
                features: ['Liver Function', 'Renal Profile', 'Lipid Profile', 'Diabetes Panel'],
                image: 'https://images.unsplash.com/photo-1585435557343-3b092031d5ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                title: 'Hematology Systems',
                icon: '💉',
                description: 'Advanced hematology analyzers for complete blood count and analysis',
                features: ['CBC Analysis', 'Differential Count', 'ESR Testing', 'Coagulation Studies'],
                image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                title: 'Immunoassay Systems',
                icon: '🔍',
                description: 'High-sensitivity immunoassay platforms for hormonal and tumor markers',
                features: ['Thyroid Profile', 'Cancer Markers', 'Hormonal Assays', 'Infection Markers'],
                image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                title: 'Molecular Diagnostics',
                icon: '🧬',
                description: 'PCR and genetic testing equipment for advanced molecular analysis',
                features: ['DNA Testing', 'RT-PCR', 'Genetic Screening', 'Viral Load Testing'],
                image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                title: 'Radiology & Imaging',
                icon: '📷',
                description: 'Digital imaging systems for comprehensive radiological diagnostics',
                features: ['Digital X-Ray', 'Ultrasound', 'CT Scan', 'MRI'],
                image: 'https://images.unsplash.com/photo-1516549655669-df66554e4470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                title: 'Microbiology & Culture',
                icon: '🦠',
                description: 'Automated culture systems and microscopy for infection detection',
                features: ['Culture & Sensitivity', 'Microscopy', 'Stain Testing', 'Antibiotic Testing'],
                image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              }
            ].map((tech, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div 
                  className="card h-100 border-0 shadow-sm card-hover"
                  style={{ 
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderRadius: '15px',
                    overflow: 'hidden'
                  }}
                >
                  <img 
                    src={tech.image} 
                    className="card-img-top"
                    alt={tech.title}
                    style={{ 
                      height: '200px', 
                      objectFit: 'cover' 
                    }}
                  />
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="fs-2 me-3">{tech.icon}</span>
                      <h5 className="card-title fw-bold mb-0" style={{ color: '#0F3460' }}>
                        {tech.title}
                      </h5>
                    </div>
                    <p className="card-text text-muted mb-3">
                      {tech.description}
                    </p>
                    <div className="mt-3">
                      {tech.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="badge bg-light text-dark me-1 mb-2 px-3 py-2"
                          style={{ 
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            border: '1px solid #dee2e6'
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
        </div>
      </section>

      {/* Equipment Brands Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3" style={{ color: '#0F3460' }}>
              Trusted Global Brands
            </h2>
            <p className="text-muted lead">
              We partner with world-leading medical equipment manufacturers
            </p>
          </div>

          <div className="row align-items-center justify-content-center g-4">
            {[
              { name: 'Siemens Healthineers', logo: '🔬', desc: 'Clinical Chemistry & Immunoassay' },
              { name: 'Roche Diagnostics', logo: '💊', desc: 'Molecular Diagnostics & Analytics' },
              { name: 'Abbott Laboratories', logo: '🧫', desc: 'Hematology & Point-of-Care' },
              { name: 'Beckman Coulter', logo: '⚗️', desc: 'Automated Laboratory Systems' },
              { name: 'Sysmex', logo: '🩸', desc: 'Hematology & Urinalysis' },
              { name: 'GE Healthcare', logo: '📊', desc: 'Radiology & Imaging Systems' }
            ].map((brand, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div 
                  className="card border-0 shadow-sm h-100 text-center p-4"
                  style={{ 
                    borderRadius: '15px',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <div className="card-body">
                    <div className="brand-logo mb-3" style={{ fontSize: '3rem' }}>
                      {brand.logo}
                    </div>
                    <h5 className="fw-bold mb-2" style={{ color: '#0F3460' }}>
                      {brand.name}
                    </h5>
                    <p className="text-muted small mb-0">
                      {brand.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Quality Control Laboratory"
                className="img-fluid rounded-3 shadow-lg w-100"
                style={{
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <div className="col-lg-6">
              <h2 className="fw-bold display-5 mb-4" style={{ color: '#0F3460' }}>
                Quality Assurance & Accreditation
              </h2>
              <p className="text-muted mb-4 fs-5">
                Our commitment to quality is demonstrated through rigorous quality control 
                processes and international accreditations.
              </p>

              <div className="row">
                {[
                  {
                    icon: '🏆',
                    title: 'NABL Accredited',
                    desc: 'National Accreditation Board for Testing & Calibration Laboratories'
                  },
                  {
                    icon: '✅',
                    title: 'ISO 15189:2012',
                    desc: 'International standard for medical laboratories quality management'
                  },
                  {
                    icon: '🔍',
                    title: 'Daily QC Checks',
                    desc: 'Routine quality control procedures for all equipment'
                  },
                  {
                    icon: '📈',
                    title: 'Regular Calibration',
                    desc: 'Scheduled maintenance and calibration of all instruments'
                  }
                ].map((item, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0">
                        <span 
                          className="fs-3"
                          style={{ color: '#2E8B57' }}
                        >{item.icon}</span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="fw-bold mb-1" style={{ color: '#0F3460' }}>{item.title}</h6>
                        <p className="text-muted small mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-5 text-white text-center"
        style={{ backgroundColor: '#0F3460' }}
      >
        <div className="container">
          <h2 className="fw-bold display-5 mb-4">Ready to Experience Advanced Diagnostics?</h2>
          <p className="lead mb-4 fs-4">
            Book your test today and get accurate results with our cutting-edge technology
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Link
              to="/appointment"
              className="btn btn-light btn-lg px-5 py-3 fw-bold"
              style={{ 
                backgroundColor: '#2E8B57', 
                color: 'white', 
                border: 'none',
                borderRadius: '8px'
              }}
            >
              Book Appointment Now
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
              style={{ borderRadius: '8px' }}
            >
              Contact Our Lab
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15) !important;
        }
        
        .brand-logo {
          transition: transform 0.3s ease;
        }
        
        .card:hover .brand-logo {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Technology;