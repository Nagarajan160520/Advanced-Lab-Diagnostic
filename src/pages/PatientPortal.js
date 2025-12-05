import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { testsAPI } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const PatientPortal = () => {
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile'); 
  const [tests, setTests] = useState([]);

  const fetchPatientTests = useCallback(async () => {
    try {
      setLoading(true);
      console.log('🔄 Fetching patient tests from MongoDB...');
      
      const patientId = user?._id || user?.id;
      
      if (patientId) {
        const response = await testsAPI.getByPatient(patientId);
        console.log('📋 Tests API response:', response);
        
        if (response.data.success) {
          const testsData = response.data.data.tests || [];
          console.log('📋 Processed tests from MongoDB:', testsData);
          setTests(testsData);
        } else {
          console.error('Failed to fetch tests:', response.data.message);
          setTests([]);
        }
      } else {
        console.error('No patient ID found');
        setTests([]);
      }
    } catch (error) {
      console.error('❌ Error fetching tests:', error);
      setTests([]);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchPatientTests();
    }
  }, [isAuthenticated, user, fetchPatientTests]);

  if (!isAuthenticated) {
    return (
      <div style={{ paddingTop: '100px' }} className="container text-center">
        <div className="card shadow-lg border-0">
          <div className="card-body py-5">
            <div className="mb-4">
              <i className="fas fa-lock fa-3x text-primary mb-3"></i>
              <h3 className="text-dark">Access Denied</h3>
              <p className="text-muted">Please login to access your patient portal</p>
            </div>
            <Link to="/login" className="btn btn-primary btn-lg px-4">
              <i className="fas fa-sign-in-alt me-2"></i>
              Login to Continue
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return <LoadingSpinner text="Loading your test reports..." />;
  }

  return (
    <div style={{ paddingTop: '80px' }} className="bg-light min-vh-100">
      <div className="container">
        {/* Header Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body py-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h1 className="h3 text-primary mb-2">
                      <i className="fas fa-user-injured me-2"></i>
                      Patient Portal
                    </h1>
                    <h2 className="h5 text-dark mb-0">Welcome back, <strong>{user?.name}</strong>!</h2>
                    <p className="text-muted mb-0 mt-1">
                      <i className="fas fa-envelope me-1"></i>
                      {user?.email}
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <div className="d-grid gap-2 d-md-block">
                      {/*<Link to="/book-test" className="btn btn-primary btn-lg me-md-2 mb-2">
                        <i className="fas fa-flask me-2"></i>
                        Book New Test
                      </Link> */}
                      <Link to="/" className="btn btn-warning btn-hover  btn-lg mb-2">
                        <i className="fas fa-home me-2"></i>
                        Home Page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body p-0">
                <ul className="nav nav-pills nav-justified p-3">
                 {/* <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'reports' ? 'active' : ''} d-flex align-items-center justify-content-center`}
                      onClick={() => setActiveTab('reports')}
                    >
                      <i className="fas fa-file-medical me-2"></i>
                      My Test Reports
                      <span className="badge bg-primary ms-2">{tests.length}</span>
                    </button>
                  </li> */}
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'profile' ? 'active' : ''} d-flex align-items-center justify-content-center`}
                      onClick={() => setActiveTab('profile')}
                    >
                      <i className="fas fa-user-circle me-2"></i>
                      Patient Profile Information
                    </button>
                  </li>
                  <li className="nav-item">
                    <Link to="/book-appointment" className="nav-link d-flex align-items-center justify-content-center">
                      <i className="fas fa-calendar-check me-2 "></i>
                      Book Appointment
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="row">
          <div className="col-12">
            {/* Tests Tab */}
            {activeTab === 'reports' && (
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white border-0 py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0 text-dark">
                      <i className="fas fa-list-alt me-2"></i>
                      My Test Bookings
                    </h5>
                    <div>
                      <button 
                        className="btn btn-outline-primary btn-sm me-2"
                        onClick={fetchPatientTests}
                      >
                        <i className="fas fa-sync-alt me-1"></i>
                        Refresh
                      </button>
                      <Link to="/book-test" className="btn btn-primary btn-sm">
                        <i className="fas fa-plus me-1"></i>
                        New Test
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  {tests.length === 0 ? (
                    <div className="text-center py-5">
                      <div className="mb-4">
                        <i className="fas fa-flask fa-3x text-muted mb-3"></i>
                        <h5 className="text-dark">No Tests Found</h5>
                        <p className="text-muted">You haven't booked any diagnostic tests yet.</p>
                      </div>
                      <Link to="/book-test" className="btn btn-primary btn-lg">
                        <i className="fas fa-flask me-2"></i>
                        Book Your First Test
                      </Link>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-hover align-middle">
                        <thead className="table-light">
                          <tr>
                            <th><i className="fas fa-tag me-1"></i> Test Name</th>
                            <th><i className="fas fa-vial me-1"></i> Type</th>
                            <th><i className="fas fa-calendar me-1"></i> Scheduled Date</th>
                            <th><i className="fas fa-info-circle me-1"></i> Status</th>
                            <th><i className="fas fa-indian-rupee-sign me-1"></i> Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tests.map((test) => (
                            <tr key={test._id} className="cursor-pointer">
                              <td>
                                <div>
                                  <strong className="text-primary">{test.testName}</strong>
                                  {test.notes && (
                                    <small className="d-block text-muted mt-1">
                                      <i className="fas fa-sticky-note me-1"></i>
                                      {test.notes}
                                    </small>
                                  )}
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-light text-dark border">
                                  {test.testType}
                                </span>
                              </td>
                              <td>
                                <div>
                                  <strong>{new Date(test.scheduledDate).toLocaleDateString('en-IN')}</strong>
                                  <br />
                                  <small className="text-muted">
                                    <i className="fas fa-clock me-1"></i>
                                    {new Date(test.scheduledDate).toLocaleTimeString('en-IN')}
                                  </small>
                                </div>
                              </td>
                              <td>
                                <span className={`badge ${
                                  test.status === 'completed' ? 'bg-success' : 
                                  test.status === 'scheduled' ? 'bg-warning text-dark' : 
                                  test.status === 'cancelled' ? 'bg-danger' : 'bg-secondary'
                                }`}>
                                  <i className={`fas ${
                                    test.status === 'completed' ? 'fa-check-circle' : 
                                    test.status === 'scheduled' ? 'fa-clock' : 
                                    test.status === 'cancelled' ? 'fa-times-circle' : 'fa-question-circle'
                                  } me-1`}></i>
                                  {test.status}
                                </span>
                              </td>
                              <td>
                                <strong className="text-success">₹{test.price}</strong>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Profile Tab - Patient Profile Information Only */}
            {activeTab === 'profile' && (
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white border-0 py-3">
                  <h5 className="card-title mb-0 text-dark">
                    <i className="fas fa-user-circle me-2"></i>
                    Patient Profile Information
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8 mx-auto">
                      <div className="card bg-light border-0">
                        <div className="card-body p-4">
                          {/*<div className="text-center mb-4">
                            <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                                 style={{width: '80px', height: '80px'}}>
                              <i className="fas fa-user fa-2x text-white"></i>
                            </div>
                            <h4 className="text-primary">{user?.name}</h4>
                            <p className="text-muted">Patient Profile</p>
                          </div> */}
                          
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <div className="card border-0 bg-white h-100">
                                <div className="card-body">
                                  <h6 className="card-title text-primary mb-3">
                                    <i className="fas fa-id-card me-2"></i>
                                    Personal Information
                                  </h6>
                                  <div className="mb-3">
                                    <label className="form-label text-muted small mb-1">Full Name</label>
                                    <p className="fw-bold text-dark mb-0 fs-6">{user?.name}</p>
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label text-muted small mb-1">Email Address</label>
                                    <p className="fw-bold text-dark mb-0 fs-6">
                                      <i className="fas fa-envelope me-2 text-primary"></i>
                                      {user?.email}
                                    </p>
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label text-muted small mb-1">Patient ID</label>
                                    <p className="fw-bold text-dark mb-0 fs-6 font-monospace">
                                      <i className="fas fa-fingerprint me-2 text-primary"></i>
                                      {user?._id || user?.id}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="col-md-6 mb-3">
                              <div className="card border-0 bg-white h-100">
                                <div className="card-body">
                                  <h6 className="card-title text-primary mb-3">
                                    <i className="fas fa-heartbeat me-2"></i>
                                    Medical Summary
                                  </h6>
                                  <div className="mb-3">
                                    <label className="form-label text-muted small mb-1">Account Type</label>
                                    <p className="fw-bold text-dark mb-0 fs-6">
                                      <i className="fas fa-user-tag me-2 text-primary"></i>
                                      Patient Account
                                    </p>
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label text-muted small mb-1">Member Since</label>
                                    <p className="fw-bold text-dark mb-0 fs-6">
                                      <i className="fas fa-calendar-plus me-2 text-primary"></i>
                                      {new Date().toLocaleDateString('en-IN')}
                                    </p>
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label text-muted small mb-1">Portal Access</label>
                                    <p className="fw-bold text-dark mb-0 fs-6">
                                      <i className="fas fa-shield-alt me-2 text-primary"></i>
                                      Active & Verified
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-center mt-4">
                            <div className="bg-primary text-white rounded p-3">
                              <h6 className="mb-2">
                                <i className="fas fa-info-circle me-2"></i>
                                Need Help?
                              </h6>
                              <p className="mb-2 small">Contact our support team for any medical queries</p>
                              <div className="d-flex gap-2 justify-content-center">
                                {/*<Link to="/book-test" className="btn btn-light btn-sm">
                                  <i className="fas fa-flask me-1"></i>
                                  Book Test
                                </Link> */}
                                <Link to="/book-appointment" className="btn btn-warning btn-sm">
                                  <i className="fas fa-calendar-plus me-1"></i>
                                  Book Appointment
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;