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
        { name: "WIDAL", price: "₹400" },
        // New tests added from user data
        { name: "ACTH", price: "₹1400" },
        { name: "ADA", price: "₹900" },
        { name: "AMA (THYROPEROXIDASE ANTIBODY)", price: "₹1000" },
        { name: "ANTI CARDIOLIPIN ANTIBODY (IgG)", price: "₹1600" },
        { name: "ANTI CARDIOLIPIN ANTIBODY (IgM)", price: "₹1600" },
        { name: "ANTI CCP", price: "₹1000" },
        { name: "ANTI Ds-DNA", price: "₹1200" },
        { name: "ANTI HAV -IgM", price: "₹800" },
        { name: "ANTI HBc-IgG", price: "₹800" },
        { name: "ANTI HBc-lgM", price: "₹800" },
        { name: "ANTI HCV-IgM", price: "₹900" },
        { name: "ANTI HEV-IgM", price: "₹1500" },
        { name: "ANTI MULLERIAN HORMONE (AMH)", price: "₹1500" },
        { name: "ANTI PHOSPHOLIPID ANTIBODY-IgM", price: "₹800" },
        { name: "APOLIPO PROTEIN A1", price: "₹1000" },
        { name: "APTT", price: "₹400" },
        { name: "BIOPSY", price: "₹1200" },
        { name: "BIOPSY-2 SPECIMEN", price: "₹1600" },
        { name: "BLOOD CULTURE", price: "₹2000" },
        { name: "C3 (COMPLEMENT 3)", price: "₹1000" },
        { name: "C4 (COMPLEMENT 4)", price: "₹1000" },
        { name: "CA 125", price: "₹1200" },
        { name: "CA 15.3", price: "₹1600" },
        { name: "CA 19.9", price: "₹1600" },
        { name: "COPPER", price: "₹800" },
        { name: "C-PEPTIDE", price: "₹1000" },
        { name: "CRP (HIGH SENSITIVITY)", price: "₹800" },
        { name: "CYSTATIN -C", price: "₹2500" },
        { name: "DENGU-RT PCR", price: "₹3000" },
        { name: "DENGUE IgG-Ab (ELISA)", price: "₹600" },
        { name: "DENGUE IgM - Ab (ELISA)", price: "₹600" },
        { name: "DENGUE NS 1-ANTIGEN (ELISA)", price: "₹800" },
        { name: "FLUID ANALYSIS", price: "₹700" },
        { name: "FLUID CELL COUNT CYTOLOGY", price: "₹700" },
        { name: "FNAC WITH PROCEDURE", price: "₹2000" },
        { name: "FOLIC ACID", price: "₹800" },
        { name: "FREE PSA", price: "₹800" },
        { name: "FREE TESTOSTERONE", price: "₹900" },
        { name: "FUNGAL CULTURE", price: "₹1000" },
        { name: "FUNGAL STAIN", price: "₹600" },
        { name: "GRAM STAIN", price: "₹500" },
        { name: "HAV VIRAL LOAD (RT-PCR)", price: "₹3000" },
        { name: "HAV-IGM", price: "₹900" },
        { name: "HBeAG", price: "₹700" },
        { name: "HBsAg - ELISA", price: "₹600" },
        { name: "HBV-HBcAG", price: "₹900" },
        { name: "HBV VIRAL LOAD (RT PCR)", price: "₹3000" },
        { name: "HCV-ELISA", price: "₹800" },
        { name: "HCV IgG", price: "₹1200" },
        { name: "HCV VIRAL LOAD (RT PCR)", price: "₹3000" },
        { name: "HEV IgG", price: "₹1200" },
        { name: "HEV VIRAL LOAD (RT PCR)", price: "₹3000" },
        { name: "HEV-IGM", price: "₹900" },
        { name: "HIV-ELISA", price: "₹500" },
        { name: "HIV RNA QUANTITATIVE (RT PCR)", price: "₹3000" },
        { name: "HLA-B27 (RT PCR)", price: "₹3000" },
        { name: "HOMOCYSTEIN LEVEL", price: "₹1300" },
        { name: "INSULIN", price: "₹900" },
        { name: "IRON", price: "₹500" },
        { name: "KARYOTYPING", price: "₹3500" },
        { name: "LITHIUM", price: "₹600" },
        { name: "PAP SMEAR WITH PROCEDURE", price: "₹2000" },
        { name: "PAP SMEAR SLIDE", price: "₹900" },
        { name: "PERIPHERAL SMEAR STUDY", price: "₹600" },
        { name: "PROTEIN EPP", price: "₹850" },
        { name: "PUS CULTURE", price: "₹600" },
        { name: "QUADRIPLE MARKER", price: "₹3000" },
        { name: "SPUTUM CULTURE", price: "₹600" },
        { name: "SPUTUM FOR AFB", price: "₹500" },
        { name: "STONE ANALYSIS", price: "₹1200" },
        { name: "TB PCR", price: "₹3000" },
        { name: "TB QUANTIFERON", price: "₹3000" },
        { name: "TORCH PROFILE", price: "₹2000" },
        { name: "TRIPLE MARKER", price: "₹2000" },
        { name: "URINE PROTEIN CREATININE RATIO (PCR)", price: "₹500" },
        { name: "ZINC", price: "₹1500" },
        { name: "OSTEOCALCIN", price: "₹600" },
        { name: "25 -OH VITAMIN-D", price: "₹600" },
        { name: "AFB CULTURE", price: "₹600" },
        { name: "VAGINAL SWAB", price: "₹500" },
        { name: "THROAT SWAB", price: "₹500" },
        { name: "OPERATION THEATRE CULTURE", price: "₹4000" },
        { name: "24 HRS URINE PROTEIN", price: "₹250" },
        { name: "24 HRS CREATININE", price: "₹250" },
        { name: "BENCE JONCE PROTEIN ", price: "₹800" },
        { name: "COOMBS DIRECT", price: "₹400" },
        { name: "COOMBS INDIRECT", price: "₹400" },
        { name: "MAGNESIUM", price: "₹400" },
        { name: "MICRO ALBUMIN (URINE)", price: "₹500" },
        { name: "PRO/CRE RATIO", price: "₹400" },
        { name: "S.TYPHI AB", price: "₹400" },
        { name: "TOTAL IRON BINDING CAPACITY", price: "₹400" },
        { name: "ACE (Angiotensin converting enzyme)", price: "₹1700" },
        { name: "AFB STAIN", price: "₹700" },
        { name: "ALCOHOL LEVEL", price: "₹1200" },
        { name: "ANTI GAD-65", price: "₹5500" },
        { name: "ANTI HBC-IgG", price: "₹800" },
        { name: "ANTI Hbe", price: "₹1700" },
        { name: "ANTI MEASLES ANTIBODY IgG", price: "₹1200" },
        { name: "ANTI MEASLES ANTIBODY IgM", price: "₹3100" },
        { name: "ANTI SCL-70 ANTIBODIES", price: "₹2600" },
        { name: "ANTI SPERM ANTI BODY", price: "₹1300" },
        { name: "ANTI SS-A (RO-AB)", price: "₹3500" },
        { name: "ANTI SS-B (LA-AB)", price: "₹3500" },
        { name: "APOLIPO PROTEIN B", price: "₹1000" },
        { name: "ATG(ANTI THYROGLOBIN ANTIBODY)", price: "₹800" },
        { name: "BONE MARROW SMEAR (SLIDES)", price: "₹2500" },
        { name: "BRUCELLA IgG(ELISA)", price: "₹1400" },
        { name: "BRUCELLA IgM (ELISA)", price: "₹1400" },
        { name: "C.ANCA", price: "₹800" },
        { name: "CD3/CD4/CD8", price: "₹2000" },
        { name: "CENTROMERE ANTIBODY IGG", price: "₹2500" },
        { name: "CHIKUNGUNYA", price: "₹900" },
        { name: "CHROMOSOME ANALYSIS", price: "₹3500" },
        { name: "COVID IgM (ELISA)", price: "₹750" },
        { name: "COVID TOTAL", price: "₹750" },
        { name: "COVID-PCR", price: "₹1200" },
        { name: "CRT", price: "₹100" },
        { name: "CULTURE", price: "₹600" },
        { name: "CYTOLOGY", price: "₹600" },
        { name: "CYTOMEGALO VIRUS (IgG, IgM) ELISA", price: "₹800" },
        { name: "DENGUE & CHIKUNGUNYA (RT-PCR)", price: "₹3000" },
        { name: "DHEA", price: "₹2800" },
        { name: "DHEA SO4", price: "₹800" },
        { name: "DUAL MARKER", price: "₹1500" },
        { name: "FIBRINOGEN", price: "₹750" },
        { name: "FLUID CELL BLOCK", price: "₹1200" },
        { name: "GAD 65", price: "₹4000" },
        { name: "GROWTH HORMONE", price: "₹900" },
        { name: "H1N1 (RT PCR)", price: "₹3000" },
        { name: "HB EPP", price: "₹1000" },
        { name: "HBV-HBeAG", price: "₹900" },
        { name: "HBV-HBSAG", price: "₹900" },
        { name: "HCV-AB", price: "₹600" },
        { name: "HIV-AB", price: "₹350" },
        { name: "HIV WESTERN BLOT", price: "₹2500" },
        { name: "HPV (RT-PCR)", price: "₹3000" },
        { name: "HSV I & II (IgM & IgG) ELISA", price: "₹3200" },
        { name: "IL-6", price: "₹1750" },
        { name: "IMMATURE CELLS", price: "₹200" },
        { name: "INHIBIN-A", price: "₹2800" },
        { name: "INHIBIN-B", price: "₹2800" },
        { name: "LE CELLS", price: "₹400" },
        { name: "LEPSTOPIRA (RT PCR)", price: "₹3000" },
        { name: "LEPSTOPIRA IgG (ELISA)", price: "₹1200" },
        { name: "LEPSTOPIRA IgM (ELISA)", price: "₹800" },
        { name: "LUPUS ANTICOAGULANT", price: "₹1500" },
        { name: "MALARIA AG/AB", price: "₹300" },
        { name: "MICROFILARIAE ANTIBODY", price: "₹1000" },
        { name: "MICROFILARIAE ANTIGEN", price: "₹800" },
        { name: "MTB (RT PCR)", price: "₹3000" },
        { name: "P. ANCA", price: "₹800" },
        { name: "PAUL-BUNNEL TEST", price: "₹1200" },
        { name: "PROTEIN ELECTROPHOROSIS", price: "₹850" },
        { name: "PROTHROMBIN TME WITH INR", price: "₹400" },
        { name: "SCRUB THRPHUS (RT PCR)", price: "₹3000" },
        { name: "SCRUB THRPHUS IgM (ELISA)", price: "₹1800" },
        { name: "SEMAR STUDY PATHOLOGIST OPINION", price: "₹350" },
        { name: "TISSUE TRANSAGULUTAMINASE Ab (IgA)", price: "₹1300" },
        { name: "TOXOPLASMA IgG (ELISA)", price: "₹800" },
        { name: "TOXOPLASMA IgM(ELISA)", price: "₹800" },
        { name: "TPHA", price: "₹500" },
        { name: "TRANSFERRIN", price: "₹1200" },
        { name: "TSH RECEPTPOR ANTIBODY IgG", price: "₹4500" },
        { name: "URINE CREATININE CLEARENCE", price: "₹500" },
        { name: "VALPORIC ACID", price: "₹1200" },
        { name: "WEIL-FELIX TEST", price: "₹1300" },
        { name: "SERUM FOLATE", price: "₹400" },
        { name: "Tg (THYROGLOBULIN)", price: "₹400" },
        { name: "TGA (ANTI-TG)", price: "₹500" },
        { name: "TRAB", price: "₹900" },
        { name: "Rev T3", price: "₹500" },
        { name: "Lp-PLA2", price: "₹500" },
        { name: "17 -OH PROGESTRONE", price: "₹500" },
        { name: "SHBG", price: "₹700" },
        { name: "PIGF", price: "₹700" },
        { name: "PAPP-A", price: "₹500" },
        { name: "DUAL MARKER TEST (BHCG& PAPP-A)", price: "₹1000" },
        { name: "INTACT PTH", price: "₹600" },
        { name: "TOTAL PINP", price: "₹600" },
        { name: "ACTH (Adrenocorticotrophic hormone)", price: "₹700" },
        { name: "ACE (Angiotensin converting enzyme)", price: "₹700" },
        { name: "TPHA (Treponema pallidum hemogglutionation", price: "₹600" },
        { name: "CMV IgM", price: "₹700" },
        { name: "CMV IgG", price: "₹700" },
        { name: "EBV IgM", price: "₹650" },
        { name: "EBV IgG", price: "₹650" },
        { name: "SPUTUM FOR AFB (ZN/FL)", price: "₹500" },
        { name: "MODIFIED AFB (LEPRABACILLI)", price: "₹350" },
        { name: "ADENOSINE DEAMINAE TEST (ADA)", price: "₹1200" },
        { name: "ANAEROBIC CULTURE CATHETER TIP C& S", price: "₹800" },
        { name: "RUBELLA IgG", price: "₹650" },
        { name: "RUBELLA IGM", price: "₹650" },
        { name: "CMV IgG", price: "₹700" },
        { name: "CMV IgM", price: "₹700" },
        { name: "HSV-1/2 IgG", price: "₹700" },
        { name: "HSV-1/2 IgM", price: "₹700" },
        { name: "HSV-1 IgG", price: "₹700" },
        { name: "ACID PHOSPHATASE", price: "₹500" },
        { name: "CARCINO EMBRYONIC ANTIGEN (CEA)", price: "₹900" },
        { name: "CEROLOPALSMIN", price: "₹1500" },
        { name: "CREATININE CLEANRANCE", price: "₹400" },
        { name: "GLOMERULAR FILTRATION RATE", price: "₹500" },
        { name: "KOH MOUNT", price: "₹1000" },
        { name: "LIPO PROTEIN A", price: "₹900" },
        { name: "MALARIA DETECTION BY QBC", price: "₹800" },
        { name: "MALARIA PARASITE", price: "₹200" },
        { name: "MYOGLOBIN", price: "₹450" },
        { name: "CPK", price: "₹500" },
        { name: "CPK - MP", price: "₹500" }
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