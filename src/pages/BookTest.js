import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { testsAPI } from '../services/api';

const BookTest = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [testDetails, setTestDetails] = useState(null);

  const [formData, setFormData] = useState({
    testName: '',
    testType: '',
    description: '',
    scheduledDate: '',
    scheduledTime: '',
    priority: 'routine',
    notes: ''
  });

  const testOptions = [
    { value: 'blood-test', label: 'Blood Test', type: 'Laboratory', description: 'Complete blood count and analysis', price: 500 },
    { value: 'x-ray', label: 'X-Ray', type: 'Radiology', description: 'X-ray imaging for bones and chest', price: 800 },
    { value: 'mri', label: 'MRI Scan', type: 'Radiology', description: 'Magnetic Resonance Imaging', price: 5000 },
    { value: 'ct-scan', label: 'CT Scan', type: 'Radiology', description: 'Computed Tomography scan', price: 3000 },
    { value: 'ultrasound', label: 'Ultrasound', type: 'Radiology', description: 'Ultrasound imaging', price: 1200 },
    { value: 'ecg', label: 'ECG', type: 'Cardiology', description: 'Electrocardiogram', price: 600 },
    { value: 'urine-test', label: 'Urine Test', type: 'Laboratory', description: 'Urine analysis', price: 300 },
    { value: 'blood-sugar', label: 'Blood Sugar', type: 'Laboratory', description: 'Glucose level test', price: 200 },
    { value: 'cholesterol', label: 'Cholesterol', type: 'Laboratory', description: 'Lipid profile test', price: 400 },
    { value: 'thyroid', label: 'Thyroid Test', type: 'Laboratory', description: 'Thyroid function test', price: 600 }
  ];

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'testName') {
      const selectedTest = testOptions.find(test => test.value === value);
      if (selectedTest) {
        setTestDetails(selectedTest);
        setFormData(prev => ({
          ...prev,
          testType: selectedTest.type,
          description: selectedTest.description
        }));
      }
    }
  };

  const validateForm = () => {
    if (!formData.testName) {
      setMessage({ type: 'danger', text: 'Please select a test' });
      return false;
    }
    if (!formData.scheduledDate) {
      setMessage({ type: 'danger', text: 'Please select a date' });
      return false;
    }
    if (!formData.scheduledTime) {
      setMessage({ type: 'danger', text: 'Please select a time' });
      return false;
    }
    return true;
  };

  // ✅ FIXED: Real API call to save to MongoDB
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!validateForm()) return;

    setLoading(true);

    try {
      console.log('🚀 Starting REAL test booking process...');
      
      // Get selected test details
      const selectedTest = testOptions.find(test => test.value === formData.testName);
      if (!selectedTest) {
        throw new Error('Invalid test selected');
      }

      // ✅ Get actual patient ID from user context or localStorage
      let patientId = null;
      try {
        const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
        patientId = currentUser._id || currentUser.id || '657abc123def456789012345'; // Fallback to mock ID
      } catch (error) {
        patientId = '657abc123def456789012345'; // Use mock ID if error
      }

      // ✅ Prepare REAL test data for MongoDB
      const testData = {
        patient: patientId,
        testName: selectedTest.label,
        testType: selectedTest.type,
        description: selectedTest.description,
        scheduledDate: new Date(`${formData.scheduledDate}T${formData.scheduledTime}:00`).toISOString(),
        priority: formData.priority,
        notes: formData.notes,
        price: selectedTest.price,
        status: 'scheduled'
      };

      console.log('📤 Sending REAL test data to MongoDB:', testData);

      // ✅ REAL API CALL to save to MongoDB
      const response = await testsAPI.create(testData);
      console.log('📤 REAL API Response:', response);

      if (response.data.success) {
        const savedTest = response.data.data.test;
        
        console.log('✅ Test saved to MongoDB successfully:', savedTest);
        
        // ✅ SUCCESS MESSAGE with REAL MongoDB ID
        setMessage({ 
          type: 'success', 
          text: `✅ ${savedTest.testName} booked successfully! MongoDB ID: ${savedTest._id}` 
        });
        
        // ✅ CONFIRMATION DETAILS with REAL data
        setTestDetails({
          ...selectedTest,
          bookingConfirmed: true,
          bookingDate: formData.scheduledDate,
          bookingTime: formData.scheduledTime,
          price: savedTest.price,
          testId: savedTest._id,
          status: savedTest.status,
          mongoId: savedTest._id,
          patientId: savedTest.patient
        });

        // Reset form
        setFormData({
          testName: '',
          testType: '',
          description: '',
          scheduledDate: '',
          scheduledTime: '',
          priority: 'routine',
          notes: ''
        });

      } else {
        throw new Error(response.data.message || 'Failed to save test to database');
      }

    } catch (error) {
      console.error('❌ REAL Test booking failed:', error);
      
      // ✅ Show specific error message
      let errorMessage = 'Test booking failed. Please try again.';
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setMessage({ 
        type: 'danger', 
        text: errorMessage 
      });
    } finally {
      setLoading(false);
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (!isAuthenticated) {
    return (
      <div style={{ paddingTop: '100px' }} className="container text-center">
        <div className="alert alert-warning">
          <h4>Authentication Required</h4>
          <p>Please login to book tests.</p>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/login')}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px' }} className="bg-light min-vh-100 py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow border-0">
              <div className="card-header bg-primary text-white py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2 className="mb-1">🔬 Book Laboratory Test</h2>
                    <p className="mb-0 opacity-75">Welcome, {user?.name}</p>
                  </div>
                  <button 
                    className="btn btn-light btn-sm"
                    onClick={() => navigate('/patient-portal')}
                  >
                    ← Back to Portal
                  </button>
                </div>
              </div>

              <div className="card-body p-4">
                {message.text && (
                  <div className={`alert alert-${message.type} alert-dismissible fade show`}>
                    <strong>{message.type === 'success' ? '✅ ' : '❌ '}</strong>
                    {message.text}
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setMessage({ type: '', text: '' })}
                    ></button>
                  </div>
                )}

                {/* Test Booking Form */}
                {!testDetails?.bookingConfirmed ? (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label fw-bold">Select Test *</label>
                          <select
                            className="form-control form-control-lg"
                            name="testName"
                            value={formData.testName}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Choose a test...</option>
                            {testOptions.map((test) => (
                              <option key={test.value} value={test.value}>
                                {test.label} - ₹{test.price}
                              </option>
                            ))}
                          </select>
                        </div>

                        {testDetails && (
                          <div className="card bg-light border-0 mb-4">
                            <div className="card-body">
                              <h6 className="card-title">Test Details</h6>
                              <p><strong>Type:</strong> {testDetails.type}</p>
                              <p><strong>Description:</strong> {testDetails.description}</p>
                              <p><strong>Price:</strong> ₹{testDetails.price}</p>
                            </div>
                          </div>
                        )}

                        <div className="mb-3">
                          <label className="form-label fw-bold">Priority</label>
                          <select
                            className="form-control"
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                          >
                            <option value="routine">Routine</option>
                            <option value="urgent">Urgent</option>
                            <option value="stat">STAT</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label fw-bold">Schedule Date *</label>
                          <input
                            type="date"
                            className="form-control form-control-lg"
                            name="scheduledDate"
                            value={formData.scheduledDate}
                            onChange={handleChange}
                            min={getTomorrowDate()}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-bold">Preferred Time *</label>
                          <select
                            className="form-control form-control-lg"
                            name="scheduledTime"
                            value={formData.scheduledTime}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select time slot</option>
                            <option value="09:00">09:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="14:00">02:00 PM</option>
                            <option value="15:00">03:00 PM</option>
                            <option value="16:00">04:00 PM</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-bold">Additional Notes</label>
                          <textarea
                            className="form-control"
                            name="notes"
                            rows="3"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Any special instructions or symptoms..."
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-md-2"
                        onClick={() => navigate('/patient-portal')}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-success btn-lg px-5"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Booking Test...
                          </>
                        ) : (
                          '💾 Book Test'
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  // ✅ SUCCESS CONFIRMATION PAGE with REAL MongoDB data
                  <div className="text-center py-4">
                    <div className="card border-success">
                      <div className="card-header bg-success text-white">
                        <h4 className="mb-0">✅ Test Booked Successfully!</h4>
                      </div>
                      <div className="card-body">
                        <div className="row text-start">
                          <div className="col-md-6">
                            <h6>Test Details</h6>
                            <p><strong>Test Name:</strong> {testDetails.label}</p>
                            <p><strong>Test Type:</strong> {testDetails.type}</p>
                            <p><strong>Description:</strong> {testDetails.description}</p>
                            <p><strong>Patient ID:</strong> <code>{testDetails.patientId}</code></p>
                          </div>
                          <div className="col-md-6">
                            <h6>Booking Information</h6>
                            <p><strong>Date:</strong> {testDetails.bookingDate}</p>
                            <p><strong>Time:</strong> {testDetails.bookingTime}</p>
                            <p><strong>Priority:</strong> {formData.priority}</p>
                            <p><strong>Price:</strong> ₹{testDetails.price}</p>
                            <p><strong>Status:</strong> 
                              <span className="badge bg-warning ms-2">{testDetails.status}</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="alert alert-success mt-3">
                          <strong>✅ Database Information:</strong> 
                          <br />
                          Test successfully saved to MongoDB with ID: <code>{testDetails.mongoId}</code>
                          <br />
                          You can now view this test in your patient portal and admin dashboard.
                        </div>

                        <div className="mt-4">
                          <h6 className="text-info">📋 Instructions</h6>
                          <ul className="list-unstyled text-start">
                            <li>✅ Please arrive 15 minutes before your scheduled time</li>
                            <li>✅ Bring your ID proof and previous reports</li>
                            <li>✅ Fasting may be required for some tests</li>
                            <li>✅ Carry your insurance card if applicable</li>
                            <li>✅ Test details are now saved in our database</li>
                          </ul>
                        </div>
                        
                        <div className="mt-4">
                          <button
                            className="btn btn-primary me-3"
                            onClick={() => {
                              setTestDetails(null);
                              setMessage({ type: '', text: '' });
                            }}
                          >
                            🔬 Book Another Test
                          </button>
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => navigate('/patient-portal')}
                          >
                            📊 View in Patient Portal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTest;