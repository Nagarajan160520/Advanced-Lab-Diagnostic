import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  
  const labTests = [
    {
      category: "HAEMOTOLOGY",
      icon: "💉",
      tests: [
        { name: "HB", price: "₹50" },
        { name: "DC", price: "₹50" },
        { name: "PVC", price: "₹100" },
        { name: "RBC COUNT", price: "₹100" },
        { name: "AEC", price: "₹200" },
        { name: "BT/CT", price: "₹100" },
        { name: "CRT", price: "₹100" },
        { name: "IMMATURE CELLS", price: "₹200" },
        { name: "Smear Studty Opinion", price: "₹350" },
        { name: "MALARIAL PARASITE", price: "₹200" },
        { name: "MF", price: "₹200" },
        { name: "COOMBS DIRECT", price: "₹600" },
        { name: "COOMBS INDIRECT", price: "₹600" },
        { name: "LE CELLS", price: "₹600" },
        { name: "MANTOUX", price: "₹200" },
        { name: "CBC", price: "₹400" },
        { name: "ESR", price: "₹100" },
        { name: "BLOOD GROUP & RH", price: "₹50" },
        { name: "PLATELET COUNT", price: "₹100" },
        { name: "RETICULOCYTE COUNT", price: "₹250" }
      ]
    },
    {
      category: "BIOCHEMISTRY",
      icon: "🧪",
      tests: [
        { name: "TROPONIN -1", price: "₹1000" },
        { name: "SODIUM", price: "₹150" },
        { name: "POTASSIUM", price: "₹150" },
        { name: "BICARBONATE", price: "₹150" },
        { name: "CHLORIDE", price: "₹150" },
        { name: "CALCIUM", price: "₹200" },
        { name: "PHOSPHORUS", price: "₹200" },
        { name: "PT/INR", price: "₹400" },
        { name: "APTT", price: "₹400" },
        { name: "FIBRINOGEN", price: "₹800" },
        { name: "HBA1C", price: "₹500" },
        { name: "LDH", price: "₹600" },
        { name: "ADA", price: "₹600" },
        { name: "GTT", price: "₹400" },
        { name: "GTT 3 SAMPLES", price: "₹300" },
        { name: "LIPID PROFILE", price: "₹500" },
        { name: "LFT", price: "₹1000" },
        { name: "ELECTROLYTES", price: "₹500" },
        { name: "SUGAR", price: "₹50" },
        { name: "UREA", price: "₹100" },
        { name: "CHOLESTREROL", price: "₹100" },
        { name: "CREATININE", price: "₹200" },
        { name: "TRIGLYCERIDES", price: "₹250" },
        { name: "BILIRUBIN", price: "₹200" },
        { name: "Alkaline Phosphatase", price: "₹200" },
        { name: "SGOT", price: "₹200" },
        { name: "SGPT", price: "₹200" },
        { name: "SGGT", price: "₹500" },
        { name: "PROTEINS", price: "₹200" },
        { name: "URIC ACID", price: "₹200" },
        { name: "AMYLASE", price: "₹500" }, 
        { name: "LIPASE", price: "₹900" }, 
        { name: "ACID PHOSPHATASE", price: "₹600" }
      ]
    },
    {
      category: "URINE TESTS",
      icon: "",
      tests: [
        { name: "ALBUMIN", price: "₹300" },
        { name: "SUGAR", price: "₹30" },
        { name: "DEPOSIT", price: "₹50" },
        { name: "BS/BP", price: "₹100" },
        { name: "UROBILINOGEN", price: "₹50" },
        { name: "ACETONE", price: "₹100" },
        { name: "URINE ROUTINE", price: "₹100" },
        { name: "URINE COMPLETE", price: "₹200" },
        { name: "MICROALBUMIN", price: "₹500" },
        { name: "24 HRS PROTEIN", price: "₹400" },
        { name: "24 HRS CREATININE", price: "₹400" },
        { name: "PRO/CRE RATIO", price: "₹500" },
        { name: "Creatinine Clearence", price: "₹400" },
        { name: "Bence Jones Protein", price: "₹300" },
        { name: "OCCULD BLOOD", price: "₹100" },
        { name: "HCG (PREGNANCY)", price: "₹150" },
      ]
    },
    {
      category: "FLUID ANALYSIS",
      icon: "💧",
      tests: [
        { name: "ANY FLUID ANALYSIS", price: "₹800" },
        { name: "MALIGNANT CELLS", price: "₹800" }
      ]
    },
    {
      category: "SEMEN ANALYSIS",
      icon: "🔍",
      tests: [
        { name: "SEMEN ANALYSIS", price: "₹400" },
        { name: "IU SEMEN PROCESS", price: "₹4500" }
      ]
    },
    {
      category: "MICROBIOLOGY",
      icon: "🔬",
      tests: [
        { name: "GRAM STAIN", price: "₹300" },
        { name: "AFB STAIN", price: "₹300" },
        { name: "FUNGAL STAIN", price: "₹300" },
        { name: "AFB CULTURE", price: "₹1000" },
        { name: "FUNGAL CULTURE", price: "₹1000" },
        { name: "ENTERIC CULTURE", price: "₹400" },
        { name: "NON ENTERIC CULTURE", price: "₹400" },
        { name: "OTHER CULTURE", price: "₹400" }
      ]
    },
    {
      category: "MOTION TESTS",
      icon: " ",
      tests: [
        { name: "COMPLETE ANALYSIS", price: "₹200" },
        { name: "OCCULT BLOOD", price: "₹100" },
        { name: "HANGING DROP", price: "₹150" }
      ]
    },
    {
      category: "SEROLOGY",
      icon: "🛡️",
      tests: [  
        { name: "WIDAL", price: "₹200" },
        { name: "MALARIA /AB", price: "₹300" },
        { name: "S.TYPHI AB", price: "₹400" },
        { name: "VDRL", price: "₹300" },
        { name: "TRHA", price: "₹600" },
        { name: "RA FACTOR", price: "₹400" },
        { name: "ASO", price: "₹400" },
        { name: "CRP", price: "₹400" },
        { name: "Hs CRP", price: "₹800" },
        { name: "HBsAG", price: "₹350" },
        { name: "HAV IGM", price: "₹900" },
        { name: "HCV IGM", price: "₹900" },
        { name: "HCV AB", price: "₹600" },
        { name: "HIV AB", price: "₹400" },
        { name: "HIV ELIZA", price: "₹600" },
        { name: "HIV WESTERN BLOT", price: "₹2500" },
        { name: "BRUCELLA AB", price: "₹900" },
        { name: "CHIKUNGUNYA", price: "₹900" },
        { name: "DENGUE", price: "₹900" },
        { name: "LEPTOSPIRA", price: "₹900" },
        { name: "DENGUE IGG/IGM each", price: "₹600" },
      ]
    },
    {
      category: "HORMONES",
      icon: "⚖️",
      tests: [
        { name: "TH/T4/TSH(Each)", price: "₹200" },
        { name: "FT3", price: "₹400" },
        { name: "FT4", price: "₹400" },
        { name: "LH", price: "₹500" },
        { name: "FSH", price: "₹500" },
        { name: "PROLACTIN", price: "₹500" },
        { name: "Testosterone Free", price: "₹2000" },
        { name: "OE STROGEN", price: "₹600" },
        { name: "PROGESTERONE", price: "₹600" },
        { name: "BETA HCG", price: "₹600" },
        { name: "DHEAS", price: "₹1000" },
        { name: "CORTISOL", price: "₹800" },
        { name: "C-PEPTIDE", price: "₹1000" },
        { name: "ANA", price: "₹900" },
        { name: "ALPHA FETOPROTEIN", price: "₹900" },
        { name: "ANTI CCP", price: "₹1300" },
        { name: "PROTEIN EPP", price: "₹1200" },
        { name: "HB EPP", price: "₹1500" },
        { name: "TB-GOLD FERON", price: "₹3000" },
        { name: "Torch Panel-igm/igg Ab (10 Para)", price: "₹3000" },
        { name: "CA-125", price: "₹1200" },
        { name: "CA-15.3", price: "₹1600" },
        { name: "CA-19.9", price: "₹1600" },
        { name: "CD4/CD3 Absolute", price: "₹2000" },
        { name: "HIV Viral Load", price: "₹4500" },
        { name: "PSA Total", price: "₹900" },
        { name: "PSA (Free & Total)", price: "₹1000" },
      ]
    },
  ];

  const popularTests = [
    { name: "Complete Blood Count (CBC)", price: "₹400", time: "4 hours", icon: "🩸" },
    { name: "Blood Sugar Fasting", price: "₹50", time: "2 hours", icon: "💉" },
    { name: "Thyroid Profile (T3,T4,TSH)", price: "₹600", time: "6 hours", icon: "🦋" },
    { name: "Liver Function Test", price: "₹1000", time: "6 hours", icon: "🧪" },
    { name: "Kidney Function Test", price: "₹700", time: "6 hours", icon: "💧" },
    { name: "Lipid Profile", price: "₹500", time: "6 hours", icon: "🩺" },
    { name: "Urine Complete", price: "₹200", time: "2 hours", icon: "🚰" },
    { name: "ECG", price: "₹400", time: "30 minutes", icon: "❤️" }
  ];

  const healthPackages = [
    {
      name: "BASIC HEALTH CHECKUP",
      price: "₹999",
      tests: ["HB", "SUGAR", "URINE ROUTINE", "ECG", "CREATININE", "CHOLESTEROL"],
      ideal: "For general health screening",
      icon: "🩺"
    },
    {
      name: "DIABETES PROFILE",
      price: "₹800",
      tests: ["SUGAR", "HB", "URINE COMPLETE", "CREATININE", "MICROALBUMIN"],
      ideal: "For diabetes patients",
      icon: "🩸"
    },
    {
      name: "LIVER FUNCTION TEST",
      price: "₹1200",
      tests: ["BILIRUBIN", "SGOT", "SGPT", "ALBUMIN", "ALKALINE PHOSPHATASE"],
      ideal: "Liver health assessment",
      icon: "🧪"
    },
    {
      name: "KIDNEY FUNCTION TEST",
      price: "₹900",
      tests: ["CREATININE", "URIC ACID", "URINE COMPLETE", "CALCIUM", "SODIUM"],
      ideal: "Kidney health assessment",
      icon: "💧"
    }
  ];

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
              EFFECTIVE FROM APRIL 2025
            </p>
          </div>

          {/* Test Categories */}
          <div className="row g-4">
            {labTests.map((category, index) => (
              <div key={index} className="col-lg-6">
                <Link 
                  to={`/services/${category.category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="category-card" style={{
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    border: '1px solid #e9ecef',
                    height: '100%',
                    cursor: 'pointer'
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
                            fontSize: '1.1rem'
                          }}>
                            {category.category}
                          </h4>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <div style={{
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            padding: '3px 10px',
                            borderRadius: '15px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            marginRight: '10px'
                          }}>
                            {category.tests.length} Tests
                          </div>
                          <span style={{
                            fontSize: '1.2rem',
                            opacity: '0.8'
                          }}>
                            →
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Preview of first few tests */}
                    <div style={{ padding: '1rem' }}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.5rem'
                      }}>
                        <span style={{ 
                          fontSize: '0.8rem',
                          color: '#6c757d',
                          fontWeight: '500'
                        }}>
                          Click to view all {category.tests.length} tests
                        </span>
                      </div>
                      <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '0.5rem'
                      }}>
                        {category.tests.slice(0, 4).map((test, testIndex) => (
                          <div key={testIndex} style={{
                            padding: '0.4rem 0.6rem',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '6px',
                            fontSize: '0.75rem'
                          }}>
                            <div style={{ 
                              fontWeight: '500',
                              color: '#2d3748'
                            }}>
                              {test.name}
                            </div>
                            <div style={{ 
                              fontWeight: 'bold',
                              color: '#28a745',
                              fontSize: '0.7rem'
                            }}>
                              {test.price}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* Popular Tests - Quick Access */}
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
      </section>

      {/* Health Packages */}
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
      </section>

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
                  📞 6381095854
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
            Med Q, 176/1, Kollam to Thirumangalam Road<br />
            Opposite Union Office, Kadayanallur,<br />
            Tenkasi-627751, Tamil Nadu, India
          </p>
          <p style={{ 
            marginBottom: '2rem',
            fontSize: '1.1rem',
            fontWeight: '600'
          }}>
            📞 6381095854
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