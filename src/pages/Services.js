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

  return (
    <div style={{ paddingTop: '70px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '60px 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Our Diagnostic Services
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.3rem)', 
            marginBottom: '0',
            opacity: '0.9'
          }}>
            Comprehensive Medical Testing with Accuracy and Precision
          </p>
        </div>
      </section>

      {/* Complete Test Price List */}
      <section style={{ padding: '40px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
            color: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(220, 53, 69, 0.3)',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
              fontWeight: 'bold', 
              marginBottom: '0.5rem'
            }}>
              COMPLETE TEST PRICE LIST
            </h2>
            <p style={{ 
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', 
              marginBottom: '0',
              opacity: '0.95',
              fontWeight: '600'
            }}>
              EFFECTIVE FROM APRIL 2026
            </p>
          </div>

          {/* Test Categories */}
          <div className="row g-3">
            {labTests.map((category, index) => (
              <div key={index} className="col-12">
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
                    padding: '1rem 1.2rem',
                    borderBottom: '2px solid #1e7e34'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ 
                          fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', 
                          marginRight: '0.8rem'
                        }}>
                          {category.icon}
                        </span>
                        <h4 style={{ 
                          margin: '0', 
                          fontWeight: 'bold',
                          fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)'
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

                  {/* All Tests in Responsive Grid */}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                      gap: '0.8rem'
                    }}>
                      {category.tests.map((test, testIndex) => (
                        <div key={testIndex} style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.7rem 0.8rem',
                          backgroundColor: testIndex % 2 === 0 ? '#f8f9fa' : 'white',
                          borderRadius: '8px',
                          border: '1px solid #e9ecef',
                          transition: 'all 0.2s ease'
                        }}>
                          <span style={{ 
                            fontWeight: '500',
                            color: '#2d3748',
                            fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                            flex: '1',
                            marginRight: '8px'
                          }}>
                            {test.name}
                          </span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: '#28a745',
                            fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                            backgroundColor: '#e8f5e9',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            whiteSpace: 'nowrap'
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

      {/* Home Collection Service */}
      <section style={{ 
        padding: '40px 0', 
        backgroundColor: 'white'
      }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h2 style={{ 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
                color: '#2c5530'
              }}>
                🏠 Home Collection Service
              </h2>
              <p style={{ 
                marginBottom: '1.5rem',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                color: '#6c757d'
              }}>
                Get your samples collected from the comfort of your home or office. 
                Our trained phlebotomists will visit you at your preferred time.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
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
                        fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)'
                      }}>
                        Below 3 Kilometers
                      </strong>
                      <div style={{ 
                        color: '#28a745', 
                        fontWeight: 'bold',
                        fontSize: 'clamp(1rem, 3vw, 1.1rem)'
                      }}>
                        Rs. 50/-
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
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
                        fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)'
                      }}>
                        Above 3 - 10 Kilometers
                      </strong>
                      <div style={{ 
                        color: '#28a745', 
                        fontWeight: 'bold',
                        fontSize: 'clamp(1rem, 3vw, 1.1rem)'
                      }}>
                        Rs. 100/-
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div style={{
                padding: '1.5rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                border: '2px solid #dee2e6',
                textAlign: 'center'
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
                  color: '#2c5530',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                }}>
                  Call for Home Collection
                </h6>
                <p style={{ 
                  fontSize: 'clamp(1.1rem, 3.5vw, 1.2rem)',
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
        padding: '40px 0', 
        backgroundColor: '#2c5530',
        color: 'white' 
      }}>
        <div className="container text-center">
          <h3 style={{ 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            fontSize: 'clamp(1.2rem, 4vw, 1.5rem)'
          }}>
            Advanced Lab & Diagnostic Centre
          </h3>
          <p style={{ 
            marginBottom: '0.5rem',
            fontSize: 'clamp(0.85rem, 2.5vw, 0.9rem)',
            opacity: '0.9'
          }}>
            176/1,NH44,Kollam to Thirumangalam Road<br />
            Opposite Union Office, Kadayanallur,<br />
            Tenkasi-627751, Tamil Nadu, India
          </p>
          <p style={{ 
            marginBottom: '1.5rem',
            fontSize: 'clamp(1rem, 3vw, 1.1rem)',
            fontWeight: '600'
          }}>
            📞 7338994779
          </p>
          <Link 
            to="/contact" 
            className="btn btn-light btn-lg"
            style={{
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '25px',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
            }}
          >
            📍 Visit Our Lab
          </Link>
        </div>
      </section>
 
      {/* Add CSS for hover effects and responsive design */}
      <style>
        {`
          @media (max-width: 768px) {
            .category-card {
              margin-bottom: 15px;
            }
            
            .category-card div[style*="grid-template-columns"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 8px !important;
            }
            
            .category-card div[style*="grid-template-columns"] > div {
              padding: 8px 6px !important;
              font-size: 0.8rem !important;
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 5px !important;
            }
            
            .category-card div[style*="grid-template-columns"] > div span:first-child {
              font-size: 0.75rem !important;
              margin-right: 0 !important;
              width: 100% !important;
            }
            
            .category-card div[style*="grid-template-columns"] > div span:last-child {
              font-size: 0.7rem !important;
              padding: 2px 6px !important;
              margin-left: 0 !important;
              width: 100% !important;
              text-align: center !important;
            }
          }
          
          @media (max-width: 480px) {
            .category-card div[style*="grid-template-columns"] {
              gap: 5px !important;
            }
            
            .category-card div[style*="grid-template-columns"] > div {
              padding: 6px 4px !important;
            }
            
            .category-card div[style*="grid-template-columns"] > div span:first-child {
              font-size: 0.7rem !important;
            }
            
            .category-card div[style*="grid-template-columns"] > div span:last-child {
              font-size: 0.65rem !important;
              padding: 2px 4px !important;
            }
          }
          
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