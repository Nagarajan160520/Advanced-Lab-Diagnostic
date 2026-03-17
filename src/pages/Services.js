import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  
  const labTests = [
    {
      category: "COMPLETE TEST PRICE LIST",
      icon: "📋",
      tests: [
        { name: "ABSOLUTE EOSINOPHILE COUNT", price: "₹150" },
        { name: "ACETON (URINE)", price: "₹100" },
        { name: "ALBUMIN", price: "₹100" },
        { name: "ALKALINE PHOSPHATASE", price: "₹150" },
        { name: "ALPHA FETO PROTEIN (AFP)", price: "₹800" },
        { name: "AMYLASE", price: "₹350" },
        { name: "ASO", price: "₹500" },
        { name: "BETA HCG", price: "₹400" },
        { name: "BICARBONATE", price: "₹150" },
        { name: "BILIRUBIN", price: "₹100" },
        { name: "BILIRUBIN TOTAL & DIRECT", price: "₹250" },
        { name: "BT/CT", price: "₹400" },
        { name: "CALCIUM", price: "₹150" },
        { name: "CBC", price: "₹350" },
        { name: "CHOLESTEROL", price: "₹100" },
        { name: "COMPLETE HEMOGRAM (CBC+PS)", price: "₹950" },
        { name: "CORTISOL", price: "₹600" },
        { name: "CPK-MB", price: "₹500" },
        { name: "CREATININE", price: "₹100" },
        { name: "CRP", price: "₹400" },
        { name: "D - DIMER", price: "₹1000" },
        { name: "DC", price: "₹50" },
        { name: "DENGUE IgM,IgG & NS1(CARD)", price: "₹500" },
        { name: "ELECTROLYTES (sodium, pottassium, lonized calcium,chloride)", price: "₹500" },
        { name: "ESR", price: "₹100" },
        { name: "ESTRODIOL(E2)", price: "₹800" },
        { name: "FERRITIN", price: "₹700" },
        { name: "FERTILITY PROFILE (LH,FSH,PRL)", price: "₹1000" },
        { name: "FSH", price: "₹400" },
        { name: "GLOMERULAR FILTRATION RATE", price: "₹500" },
        { name: "GROUP/RH", price: "₹50" },
        { name: "HB", price: "₹50" },
        { name: "HBA1C", price: "₹500" },
        { name: "HBsAg CARD", price: "₹300" },
        { name: "HCV CARD", price: "₹400" },
        { name: "HIV-CARD", price: "₹300" },
        { name: "KOH MOUNT", price: "₹1000" },
        { name: "LDH", price: "₹500" },
        { name: "LFT", price: "₹650" },
        { name: "LH", price: "₹500" },
        { name: "LIPASE", price: "₹600" },
        { name: "LIPID PROFILE", price: "₹500" },
        { name: "LIPO PROTEIN A", price: "₹900" },
        { name: "MANTOUX", price: "₹100" },
        { name: "MF", price: "₹150" },
        { name: "OESTEROGEN", price: "₹600" },
        { name: "PARA THYROID HORMANE", price: "₹1300" },
        { name: "PHOSPHORUS", price: "₹200" },
        { name: "PLATELET COUNT", price: "₹200" },
        { name: "POTTASSIUM", price: "₹150" },
        { name: "PROCALCITONIN", price: "₹2000" },
        { name: "PROGESTERONE", price: "₹600" },
        { name: "PROSTATE SPECIFIC ANTIGEN (PSA)", price: "₹800" },
        { name: "PROTEINS", price: "₹200" },
        { name: "RA FACTOR", price: "₹400" },
        { name: "RBC COUNT", price: "₹100" },
        { name: "RETICULOCYTE COUNT", price: "₹200" },
        { name: "RFT", price: "₹200" },
        { name: "RPR (RAPID PLASMA REGIN)", price: "₹250" },
        { name: "SEMEN ANALYSIS (CASA)", price: "₹1000" },
        { name: "SEMEN FRUCTOSE", price: "₹200" },
        { name: "SGGT", price: "₹200" },
        { name: "SGOT", price: "₹200" },
        { name: "SGPT", price: "₹200" },
        { name: "STOOL - COMPLETE EXAMINATION", price: "₹200" },
        { name: "STOOL - OCCULT BLOOD", price: "₹200" },
        { name: "SUGAR -FASTING/PPBS", price: "₹50+50" },
        { name: "TC", price: "₹50" },
        { name: "THYROID PANEL 1 (T3,T4,TSH)", price: "₹500" },
        { name: "THYROID PANEL 2 (FT3,FT4,TSH)", price: "₹700" },
        { name: "THYROID PANEL 3 (T3,T4,TSH,FT3,FT4)", price: "₹800" },
        { name: "THYROID PANEL 4 (T3,T4,TSH,FT3,FT4 TPO)", price: "₹2000" },
        { name: "TOTAL IGE", price: "₹900" },
        { name: "TOTAL-TESTOSTERONE", price: "₹700" },
        { name: "TRIGLYCERIDEDES", price: "₹200" },
        { name: "TROPONNI - I", price: "₹1000" },
        { name: "TROPONNI - T", price: "₹1200" },
        { name: "TSH", price: "₹200" },
        { name: "UREA", price: "₹100" },
        { name: "URIC ACID", price: "₹150" },
        { name: "URINE COMPLETE", price: "₹200" },
        { name: "URINE CULTURE", price: "₹200" },
        { name: "URINE ROUTINE", price: "₹100" },
        { name: "VDRL", price: "₹200" },
        { name: "VITAMIN-B12", price: "₹900" },
        { name: "VITAMIN-D", price: "₹900" },
        { name: "WIDAL", price: "₹400" }
      ]
    }
  ];

  /* const popularTests = [
    { name: "Complete Blood Count (CBC)", price: "₹150", time: "4 hours", icon: "🩸" },
    { name: "Blood Sugar Fasting", price: "₹700", time: "2 hours", icon: "💉" },
    { name: "Thyroid Panel 1 (T3,T4,TSH)", price: "₹2000", time: "6 hours", icon: "🦋" },
    { name: "Liver Function Test", price: "₹650", time: "6 hours", icon: "🧪" },
    { name: "Kidney Function Test (RFT)", price: "₹250", time: "6 hours", icon: "💧" },
    { name: "Lipid Profile", price: "₹500", time: "6 hours", icon: "🩺" },
    { name: "Urine Complete", price: "₹200", time: "2 hours", icon: "💧" },
    { name: "Vitamin D", price: "₹200", time: "24 hours", icon: "☀️" }
  ];

  const healthPackages = [
    {
      name: "BASIC HEALTH CHECKUP",
      price: "₹999",
      tests: ["CBC", "SUGAR -FASTING", "URINE ROUTINE", "TSH", "CREATININE", "CHOLESTEROL"],
      ideal: "For general health screening",
      icon: "🩺"
    },
    {
      name: "DIABETES PROFILE",
      price: "₹1200",
      tests: ["HBA1C", "SUGAR -FASTING/PPBS", "MICROALBUMIN", "CREATININE", "LIPID PROFILE"],
      ideal: "For diabetes patients",
      icon: "🩸"
    },
    {
      name: "LIVER FUNCTION TEST",
      price: "₹650",
      tests: ["BILIRUBIN", "SGOT", "SGPT", "ALKALINE PHOSPHATASE", "PROTEINS"],
      ideal: "Liver health assessment",
      icon: "🧪"
    },
    {
      name: "THYROID PROFILE",
      price: "₹2000",
      tests: ["THYROID PANEL 1 (T3,T4,TSH)", "TSH", "FT3", "FT4"],
      ideal: "Complete thyroid assessment",
      icon: "🦋"
    }
  ];  */

  return (
    <div style={{ paddingTop: '70px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '80px 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Our Diagnostic Services
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '0',
            opacity: '0.9'
          }}>
            Comprehensive Medical Testing with Accuracy and Precision
          </p>
        </div>
      </section>

      {/* Complete Test Price List */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(220, 53, 69, 0.3)',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '0.5rem'
            }}>
              COMPLETE TEST PRICE LIST
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              marginBottom: '0',
              opacity: '0.95',
              fontWeight: '600'
            }}>
              EFFECTIVE FROM APRIL 2026
            </p>
          </div>

          {/* Test Categories */}
          <div className="row g-4">
            {labTests.map((category, index) => (
              <div key={index} className="col-lg-12">
                <div className="category-card" style={{
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e9ecef',
                  height: '100%'
                }}>
                  {/* Category Header */}
                  <div style={{
                    background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                    color: 'white',
                    padding: '1.2rem 1.5rem',
                    borderBottom: '2px solid #1e7e34'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ 
                          fontSize: '1.8rem', 
                          marginRight: '0.8rem'
                        }}>
                          {category.icon}
                        </span>
                        <h4 style={{ 
                          margin: '0', 
                          fontWeight: 'bold',
                          fontSize: '1.5rem'
                        }}>
                          {category.category}
                        </h4>
                      </div>
                      <div style={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        padding: '3px 10px',
                        borderRadius: '15px',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {category.tests.length} Tests
                      </div>
                    </div>
                  </div>

                  {/* All Tests in Grid */}
                  <div style={{ padding: '2rem' }}>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                      gap: '0.8rem'
                    }}>
                      {category.tests.map((test, testIndex) => (
                        <div key={testIndex} style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.8rem 1rem',
                          backgroundColor: testIndex % 2 === 0 ? '#f8f9fa' : 'white',
                          borderRadius: '8px',
                          border: '1px solid #e9ecef',
                          transition: 'all 0.2s ease'
                        }}>
                          <span style={{ 
                            fontWeight: '500',
                            color: '#2d3748',
                            fontSize: '0.9rem'
                          }}>
                            {test.name}
                          </span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: '#28a745',
                            fontSize: '1rem',
                            backgroundColor: '#e8f5e9',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            whiteSpace: 'nowrap',
                            marginLeft: '10px'
                          }}>
                            {test.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tests - Quick Access 
      <section style={{ padding: '60px 0', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.2rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              color: '#2c5530'
            }}>
              Quick Book Tests
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#6c757d'
            }}>
              Most frequently booked tests with quick results
            </p>
          </div>

          <div className="row g-4">
            {popularTests.map((test, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="popular-test-card" style={{
                  background: 'white',
                  border: '2px solid #e9ecef',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: '1rem'
                  }}>
                    {test.icon}
                  </div>
                  <h6 style={{ 
                    fontWeight: 'bold', 
                    marginBottom: '0.5rem',
                    fontSize: '0.95rem',
                    color: '#2c5530'
                  }}>
                    {test.name}
                  </h6>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ 
                      fontWeight: 'bold', 
                      fontSize: '1.1rem',
                      color: '#28a745'
                    }}>
                      {test.price}
                    </span>
                  </div>
                  <small style={{ 
                    color: '#6c757d',
                    fontWeight: '500'
                  }}>
                    Report: {test.time}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Health Packages 
      <section style={{ 
        padding: '60px 0', 
        background: 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem', color: 'white' }}>
            <h2 style={{ 
              fontSize: '2.2rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem'
            }}>
              Health Checkup Packages
            </h2>
            <p style={{ 
              fontSize: '1.1rem',
              opacity: '0.9'
            }}>
              Comprehensive health assessment packages for preventive care
            </p>
          </div>

          <div className="row g-4">
            {healthPackages.map((pkg, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="package-card" style={{
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  height: '100%',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                    color: 'white',
                    textAlign: 'center',
                    padding: '1.5rem'
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>{pkg.icon}</div>
                    <h5 style={{ 
                      marginBottom: '0.5rem',
                      fontWeight: 'bold',
                      fontSize: '1rem'
                    }}>
                      {pkg.name}
                    </h5>
                    <h4 style={{ 
                      margin: '0',
                      fontWeight: 'bold',
                      fontSize: '1.5rem'
                    }}>
                      {pkg.price}
                    </h4>
                  </div>
                  <div style={{ 
                    padding: '1.5rem', 
                    backgroundColor: 'white'
                  }}>
                    <p style={{ 
                      color: '#6c757d', 
                      fontSize: '0.85rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      {pkg.ideal}
                    </p>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: '0',
                      margin: '0'
                    }}>
                      {pkg.tests.map((test, testIndex) => (
                        <li key={testIndex} style={{ 
                          marginBottom: '0.5rem',
                          padding: '0.4rem',
                          backgroundColor: testIndex % 2 === 0 ? '#f8f9fa' : 'white',
                          borderRadius: '5px'
                        }}>
                          <small style={{ 
                            color: '#28a745',
                            fontWeight: '500'
                          }}>
                            ✓ {test}
                          </small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Home Collection Service */}
      <section style={{ 
        padding: '60px 0', 
        backgroundColor: 'white'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 style={{ 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                fontSize: '1.8rem',
                color: '#2c5530'
              }}>
                🏠 Home Collection Service
              </h2>
              <p style={{ 
                marginBottom: '2rem',
                fontSize: '1rem',
                color: '#6c757d'
              }}>
                Get your samples collected from the comfort of your home or office. 
                Our trained phlebotomists will visit you at your preferred time.
              </p>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#f8f9fa',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #28a745'
                  }}>
                    <span style={{ 
                      color: '#28a745', 
                      fontSize: '1.5rem', 
                      marginRight: '0.8rem' 
                    }}>
                      ✅
                    </span>
                    <div>
                      <strong style={{ 
                        color: '#212529',
                        fontSize: '0.9rem'
                      }}>
                        Below 3 Kilometers
                      </strong>
                      <div style={{ 
                        color: '#28a745', 
                        fontWeight: 'bold',
                        fontSize: '1.1rem'
                      }}>
                        Rs. 50/-
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#f8f9fa',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #28a745'
                  }}>
                    <span style={{ 
                      color: '#28a745', 
                      fontSize: '1.5rem', 
                      marginRight: '0.8rem' 
                    }}>
                      ✅
                    </span>
                    <div>
                      <strong style={{ 
                        color: '#212529',
                        fontSize: '0.9rem'
                      }}>
                        Above 3 - 10 Kilometers
                      </strong>
                      <div style={{ 
                        color: '#28a745', 
                        fontWeight: 'bold',
                        fontSize: '1.1rem'
                      }}>
                        Rs. 100/-
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div style={{
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                border: '2px solid #dee2e6'
              }}>
                <div style={{ 
                  fontSize: '4rem', 
                  marginBottom: '1rem',
                  color: '#28a745'
                }}>
                  🏠
                </div>
                <h6 style={{ 
                  fontWeight: 'bold',
                  color: '#2c5530'
                }}>
                  Call for Home Collection
                </h6>
                <p style={{ 
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#dc3545',
                  margin: '0'
                }}>
                  📞 7338994779
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ 
        padding: '60px 0', 
        backgroundColor: '#2c5530',
        color: 'white' 
      }}>
        <div className="container text-center">
          <h3 style={{ 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>
            Advanced Lab & Diagnostic Centre
          </h3>
          <p style={{ 
            marginBottom: '0.5rem',
            fontSize: '0.9rem',
            opacity: '0.9'
          }}>
            176/1,NH44,Kollam to Thirumangalam Road<br />
            Opposite Union Office, Kadayanallur,<br />
            Tenkasi-627751, Tamil Nadu, India
          </p>
          <p style={{ 
            marginBottom: '2rem',
            fontSize: '1.1rem',
            fontWeight: '600'
          }}>
            📞 7338994779
          </p>
          <Link 
            to="/contact" 
            className="btn btn-light btn-lg"
            style={{
              fontWeight: 'bold',
              padding: '10px 25px',
              borderRadius: '25px'
            }}
          >
            📍 Visit Our Lab
          </Link>
        </div>
      </section>
 
      {/* Add CSS for hover effects */}
      <style>
        {`
          .popular-test-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            border-color: #28a745;
          }
          
          .category-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          
          .package-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
};

export default Services;