import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CategoryDetail = () => {
  const { categoryName } = useParams();
  
  const labTests = {
    "haemotology": {
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
    "biochemistry": {
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
    "urine-tests": {
      category: "URINE TESTS",
      icon: "e",
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
    "fluid-analysis": {
      category: "FLUID ANALYSIS",
      icon: "💧",
      tests: [
        { name: "ANY FLUID ANALYSIS", price: "₹800" },
        { name: "MALIGNANT CELLS", price: "₹800" }
      ]
    },
    "semen-analysis": {
      category: "SEMEN ANALYSIS",
      icon: "🔍",
      tests: [
        { name: "SEMEN ANALYSIS", price: "₹400" },
        { name: "IU SEMEN PROCESS", price: "₹4500" }
      ]
    },
    "microbiology": {
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
    "motion-tests": {
      category: "MOTION TESTS",
      icon: "",
      tests: [
        { name: "COMPLETE ANALYSIS", price: "₹200" },
        { name: "OCCULT BLOOD", price: "₹100" },
        { name: "HANGING DROP", price: "₹150" }
      ]
    },
    "serology": {
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
    "hormones": {
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
  };

  const category = labTests[categoryName];

  if (!category) {
    return (
      <div style={{ 
        paddingTop: '70px', 
        textAlign: 'center', 
        padding: '50px',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh'
      }}>
        <div style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <h2 style={{ color: '#dc3545', marginBottom: '1rem' }}>Category Not Found</h2>
          <p style={{ color: '#6c757d', marginBottom: '2rem' }}>
            The requested test category was not found.
          </p>
          <Link 
            to="/services" 
            style={{
              display: 'inline-block',
              backgroundColor: '#28a745',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Fix for duplicate word in description
  const categoryDescription = category.category.toLowerCase().endsWith('tests') 
    ? category.category.toLowerCase()
    : `${category.category.toLowerCase()} tests`;

  return (
    <div style={{ 
      paddingTop: '70px', 
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      overflowX: 'hidden',
      width: '100%'
    }}>
      {/* Back Button */}
      <div style={{ 
        padding: '20px 0', 
        backgroundColor: 'white', 
        borderBottom: '1px solid #dee2e6',
        width: '100%'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Link 
            to="/services" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#28a745',
              fontWeight: '500',
              fontSize: '1rem',
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #28a745',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#28a745';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#28a745';
            }}
          >
            <span style={{ marginRight: '8px' }}>←</span>
            Back to All Services
          </Link>
        </div>
      </div>

      {/* Category Header */}
      <section style={{ 
        background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
        padding: '10px 0',
        color: 'white',
        textAlign: 'center',
        width: '100%'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}>
            <span style={{ 
              fontSize: '4rem', 
              marginBottom: '1rem',
              display: 'block'
            }}>
              {category.icon}
            </span>
            <h1 style={{ 
              fontSize: '2.8rem', 
              fontWeight: 'bold', 
              marginBottom: '0.5rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              {category.category}
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '0',
              opacity: '0.9',
              fontWeight: '500'
            }}>
              {category.tests.length} Tests Available
            </p>
          </div>
        </div>
      </section>

      {/* Tests List */}
      <section style={{ padding: '50px 0', width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            overflow: 'hidden',
            marginBottom: '3rem',
            width: '100%'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #2c5530 0%, #28a745 100%)',
              color: 'white',
              padding: '1.8rem 2rem',
              borderBottom: '3px solid #1e7e34'
            }}>
              <h3 style={{ 
                margin: '0',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span>Complete Test List</span>
                <span style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  {category.tests.length} Tests
                </span>
              </h3>
            </div>
            
            <div style={{ maxHeight: '70vh', overflowY: 'auto', width: '100%' }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                fontSize: '0.95rem',
                tableLayout: 'fixed'
              }}>
                <colgroup>
                  <col style={{ width: '70%' }} />
                  <col style={{ width: '30%' }} />
                </colgroup>
                <thead>
                  <tr style={{ 
                    backgroundColor: '#f8f9fa',
                    borderBottom: '2px solid #dee2e6',
                    position: 'sticky',
                    top: 0,
                    zIndex: 10
                  }}>
                    <th style={{ 
                      padding: '1.5rem 2rem',
                      textAlign: 'left',
                      fontWeight: 'bold',
                      color: '#495057',
                      fontSize: '1rem',
                      borderBottom: '2px solid #dee2e6',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      TEST NAME
                    </th>
                    <th style={{ 
                      padding: '1.5rem 2rem',
                      textAlign: 'right',
                      fontWeight: 'bold',
                      color: '#495057',
                      fontSize: '1rem',
                      borderBottom: '2px solid #dee2e6',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      PRICE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {category.tests.map((test, testIndex) => (
                    <tr 
                      key={testIndex}
                      style={{
                        borderBottom: '1px solid #f1f3f4',
                        transition: 'all 0.2s ease',
                        backgroundColor: testIndex % 2 === 0 ? '#ffffff' : '#fafbfc'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#e8f5e8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = testIndex % 2 === 0 ? '#ffffff' : '#fafbfc';
                      }}
                    >
                      <td style={{ 
                        padding: '1.2rem 2rem',
                        fontWeight: '500',
                        color: '#2d3748',
                        fontSize: '0.95rem',
                        borderBottom: '1px solid #f1f3f4',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {test.name}
                      </td>
                      <td style={{ 
                        padding: '1.2rem 2rem',
                        textAlign: 'right',
                        fontWeight: 'bold',
                        color: '#28a745',
                        fontSize: '1.05rem',
                        borderBottom: '1px solid #f1f3f4',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {test.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            padding: '1rem 1rem',
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            border: '2px solid #28a745',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>
              📞
            </div>
            <h4 style={{ 
              color: '#2c5530',
              marginBottom: '1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              Ready to Book Your Test?
            </h4>
            <p style={{ 
              color: '#6c757d',
              marginBottom: '2rem',
              fontSize: '1.1rem',
              maxWidth: '500px',
              margin: '0 auto 2rem auto',
              lineHeight: '1.6'
            }}>
              Call us now to schedule your {categoryDescription} or home collection service. Our team is ready to assist you.
            </p>
            
            {/* Clickable Phone Number */}
            <a 
              href="tel:6381095854"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#28a745',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '30px',
                fontWeight: 'bold',
                fontSize: '1.3rem',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: 'none',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#218838';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#28a745';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.3)';
              }}
            >
              📞 Call: 6381095854
            </a>
            
            <p style={{ 
              marginTop: '1.5rem',
              color: '#6c757d',
              fontSize: '0.9rem'
            }}>
              Available 24/7 for emergency services
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;