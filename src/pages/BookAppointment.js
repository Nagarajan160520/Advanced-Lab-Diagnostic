// src/pages/BookAppointment.js - UPDATED FOR RENDER BACKEND
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { appointmentsAPI } from '../services/api';

const API_BASE_URL = 'https://med-q-diagnostics-backend.onrender.com';

const BookAppointment = () => {
  const { user, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    // Patient details (text fields)
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    patientGender: '',
    patientAge: '',
    patientDOB: '',
    patientAddress: '',
    patientBloodGroup: '', // ✅ Blood group field
    
    // Appointment details
    appointmentDate: '',
    appointmentTime: '',
    reason: '',
    type: 'consultation',
    notes: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Blood group options
  const bloodGroupOptions = [
    'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'
  ];

  // Auto-fill user data if logged in
  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData(prev => ({
        ...prev,
        patientName: user.name || '',
        patientEmail: user.email || '',
        patientPhone: user.phone || '',
        patientBloodGroup: user.bloodGroup || '' // Auto-fill blood group if available
      }));
    }
  }, [isAuthenticated, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    setLoading(true);

    try {
      console.log('🚀 ========== NEW APPOINTMENT BOOKING ==========');
      
      // Step 1: Validate authentication
      if (!isAuthenticated) {
        throw new Error('Please login first');
      }

      // Step 2: Validate form
      if (!formData.patientName.trim()) throw new Error('Please enter patient name');
      if (!formData.patientEmail.trim()) throw new Error('Please enter email');
      if (!formData.patientPhone.trim()) throw new Error('Please enter phone number');
      if (!formData.patientGender) throw new Error('Please select gender');
      if (!formData.appointmentDate) throw new Error('Please select appointment date');
      if (!formData.appointmentTime) throw new Error('Please select appointment time');
      if (!formData.reason.trim()) throw new Error('Please provide reason for appointment');

      console.log('✅ Form validation passed');

      // Step 3: Prepare data - WITH PROPER BLOOD GROUP STRUCTURE
      const appointmentData = {
        // ✅ Patient details - DIRECT FIELDS (not nested)
        patientName: formData.patientName.trim(),
        patientEmail: formData.patientEmail.trim(),
        patientPhone: formData.patientPhone.trim(),
        patientGender: formData.patientGender,
        patientAge: formData.patientAge || null,
        patientDOB: formData.patientDOB || null,
        patientAddress: formData.patientAddress.trim() || '',
        patientBloodGroup: formData.patientBloodGroup || null, // ✅ BLOOD GROUP AS DIRECT FIELD
        
        // Appointment details
        appointmentDate: formData.appointmentDate,
        appointmentTime: formData.appointmentTime,
        reason: formData.reason.trim(),
        type: formData.type,
        notes: formData.notes.trim(),
        status: 'scheduled',
        
        // User reference
        userName: user?.name || formData.patientName,
        userEmail: user?.email || formData.patientEmail,
        userPhone: user?.phone || formData.patientPhone
      };

      console.log('📤 COMPLETE APPOINTMENT DATA BEING SENT:');
      console.log('Blood Group Selected:', formData.patientBloodGroup);
      console.log('Blood Group in Data:', appointmentData.patientBloodGroup);
      console.log('Full Data:', appointmentData);

      // Step 4: Test backend connection - UPDATED TO RENDER URL
      console.log('🔗 Testing backend connection...');
      try {
        const testResponse = await fetch(`${API_BASE_URL}/api/health`);
        console.log('🏥 Backend health check:', testResponse.status);
        if (!testResponse.ok) throw new Error(`Backend returned ${testResponse.status}`);
      } catch (testError) {
        console.error('❌ BACKEND CONNECTION FAILED:', testError);
        throw new Error('Cannot connect to server. Please try again later.');
      }

      // Step 5: Send appointment request
      console.log('📨 Sending appointment request to:', API_BASE_URL);
      const response = await appointmentsAPI.create(appointmentData);
      
      console.log('✅ SUCCESS! Server response:', response.data);

      setMessage({ 
        type: 'success', 
        text: '🎉 Appointment booked successfully! It will appear in admin dashboard.' 
      });

      // Reset form but keep user data
      setFormData({
        patientName: user?.name || '',
        patientEmail: user?.email || '',
        patientPhone: user?.phone || '',
        patientGender: '',
        patientAge: '',
        patientDOB: '',
        patientAddress: '',
        patientBloodGroup: user?.bloodGroup || '', // Keep blood group if available
        appointmentDate: '',
        appointmentTime: '',
        reason: '',
        type: 'consultation',
        notes: ''
      });

    } catch (error) {
      console.error('❌ APPOINTMENT BOOKING FAILED:', error);
      
      let errorMessage = 'Error booking appointment';
      
      if (error.response) {
        console.error('📡 SERVER ERROR DETAILS:', error.response.data);
        errorMessage = error.response.data?.message || 'Server error occurred';
      } else if (error.request) {
        console.error('🌐 NETWORK ERROR - No response received');
        errorMessage = 'Cannot connect to server. Please try again later.';
      } else {
        console.error('⚠️ CLIENT ERROR:', error.message);
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

  return (
    <div style={{ paddingTop: '100px' }} className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Book Medical Appointment</h3>
              <small>Appointments will appear in admin dashboard</small>
            </div>
            <div className="card-body">
              {message.text && (
                <div className={`alert alert-${message.type} alert-dismissible fade show`}>
                  {message.text}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setMessage({ type: '', text: '' })}
                  ></button>
                </div>
              )}

              {!isAuthenticated && (
                <div className="alert alert-warning">
                  <strong>⚠️ Please Login:</strong> You need to login to book appointments.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Patient Information - TEXT FIELDS */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email <span className="text-danger">*</span></label>
                    <input
                      type="email"
                      className="form-control"
                      name="patientEmail"
                      value={formData.patientEmail}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                    <input
                      type="tel"
                      className="form-control"
                      name="patientPhone"
                      value={formData.patientPhone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Gender <span className="text-danger">*</span></label>
                    <select
                      className="form-control"
                      name="patientGender"
                      value={formData.patientGender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      name="patientAge"
                      value={formData.patientAge}
                      onChange={handleChange}
                      placeholder="Enter age"
                      min="0"
                      max="120"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Blood Group</label>
                    <select
                      className="form-control"
                      name="patientBloodGroup"
                      value={formData.patientBloodGroup}
                      onChange={handleChange}
                    >
                      <option value="">Select Blood Group</option>
                      {bloodGroupOptions.map(group => (
                        <option key={group} value={group}>{group}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      name="patientDOB"
                      value={formData.patientDOB}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    {/* Empty column for proper layout */}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    name="patientAddress"
                    rows="2"
                    value={formData.patientAddress}
                    onChange={handleChange}
                    placeholder="Enter complete address"
                  />
                </div>

                <hr />

                {/* Appointment Details */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Appointment Date <span className="text-danger">*</span></label>
                    <input
                      type="date"
                      className="form-control"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Preferred Time <span className="text-danger">*</span></label>
                    <select
                      className="form-control"
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Time Slot</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Reason for Visit <span className="text-danger">*</span></label>
                  <textarea
                    className="form-control"
                    name="reason"
                    rows="3"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Please describe your symptoms or reason for appointment..."
                    required
                  />
                </div>

                {/* Appointment Type - Optional */}
                <div className="mb-3">
                  <label className="form-label">Appointment Type</label>
                  <select
                    className="form-control"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="consultation">Consultation</option>
                    <option value="follow-up">Follow-up</option>
                    <option value="checkup">Checkup</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Additional Notes</label>
                  <textarea
                    className="form-control"
                    name="notes"
                    rows="2"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any additional information..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg w-100"
                  disabled={loading || !isAuthenticated}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Booking Appointment...
                    </>
                  ) : (
                    'Book Appointment'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;