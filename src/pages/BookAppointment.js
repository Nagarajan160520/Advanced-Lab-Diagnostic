// src/pages/BookAppointment.js - MODIFIED FOR WHATSAPP MESSAGES WITHOUT LOGIN
import React, { useState } from 'react';

const API_BASE_URL = 'https://med-q-diagnostics-backend.onrender.com';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    // Patient details
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    patientGender: '',
    patientAge: '',
    patientDOB: '',
    patientAddress: '',
    patientBloodGroup: '',
    
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to format WhatsApp message
  const formatWhatsAppMessage = (data) => {
    return `🔔 *NEW APPOINTMENT BOOKING* 🔔

👤 *PATIENT DETAILS*
------------------
Name: ${data.patientName}
Phone: ${data.patientPhone}
Email: ${data.patientEmail}
Gender: ${data.patientGender}
Age: ${data.patientAge || 'Not provided'}
Blood Group: ${data.patientBloodGroup || 'Not provided'}
DOB: ${data.patientDOB || 'Not provided'}
Address: ${data.patientAddress || 'Not provided'}

📅 *APPOINTMENT DETAILS*
---------------------
Date: ${data.appointmentDate}
Time: ${data.appointmentTime}
Type: ${data.type}
Reason: ${data.reason}

📝 *ADDITIONAL NOTES*
------------------
${data.notes || 'No additional notes'}

⏰ *BOOKING TIME*
---------------
${new Date().toLocaleString()}

Thank you for choosing MedQ Diagnostics!`;
  };

  // Function to send WhatsApp message
  const sendWhatsAppMessage = (data) => {
    const message = formatWhatsAppMessage(data);
    // Replace with your WhatsApp number (include country code without +)
    const whatsappNumber = '916381095854'; // CHANGE THIS TO YOUR WHATSAPP NUMBER
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    setLoading(true);

    try {
      console.log('🚀 ========== NEW APPOINTMENT BOOKING ==========');
      
      // Validate form
      if (!formData.patientName.trim()) throw new Error('Please enter patient name');
      if (!formData.patientEmail.trim()) throw new Error('Please enter email');
      if (!formData.patientPhone.trim()) throw new Error('Please enter phone number');
      if (!formData.patientGender) throw new Error('Please select gender');
      if (!formData.appointmentDate) throw new Error('Please select appointment date');
      if (!formData.appointmentTime) throw new Error('Please select appointment time');
      if (!formData.reason.trim()) throw new Error('Please provide reason for appointment');

      console.log('✅ Form validation passed');

      // Prepare data for backend
      const appointmentData = {
        patientName: formData.patientName.trim(),
        patientEmail: formData.patientEmail.trim(),
        patientPhone: formData.patientPhone.trim(),
        patientGender: formData.patientGender,
        patientAge: formData.patientAge || null,
        patientDOB: formData.patientDOB || null,
        patientAddress: formData.patientAddress.trim() || '',
        patientBloodGroup: formData.patientBloodGroup || null,
        appointmentDate: formData.appointmentDate,
        appointmentTime: formData.appointmentTime,
        reason: formData.reason.trim(),
        type: formData.type,
        notes: formData.notes.trim(),
        status: 'scheduled'
      };

      console.log('📤 Sending appointment data:', appointmentData);

      // Test backend connection
      console.log('🔗 Testing backend connection...');
      try {
        const testResponse = await fetch(`${API_BASE_URL}/api/health`);
        console.log('🏥 Backend health check:', testResponse.status);
        if (!testResponse.ok) throw new Error(`Backend returned ${testResponse.status}`);
      } catch (testError) {
        console.error('❌ BACKEND CONNECTION FAILED:', testError);
        // Continue with WhatsApp only if backend fails
        console.log('⚠️ Continuing with WhatsApp message only...');
      }

      // Try to save to backend
      try {
        const response = await fetch(`${API_BASE_URL}/api/appointments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(appointmentData)
        });

        if (response.ok) {
          const data = await response.json();
          console.log('✅ Appointment saved to backend:', data);
        } else {
          console.log('⚠️ Backend save failed, but continuing...');
        }
      } catch (backendError) {
        console.log('⚠️ Backend error, but continuing with WhatsApp...');
      }

      // Send WhatsApp message
      console.log('📱 Sending WhatsApp message...');
      sendWhatsAppMessage(formData);
      
      setMessage({ 
        type: 'success', 
        text: '✅ Appointment request sent! WhatsApp opened with your details. Please send the message to confirm.' 
      });

      // Reset form
      setFormData({
        patientName: '',
        patientEmail: '',
        patientPhone: '',
        patientGender: '',
        patientAge: '',
        patientDOB: '',
        patientAddress: '',
        patientBloodGroup: '',
        appointmentDate: '',
        appointmentTime: '',
        reason: '',
        type: 'consultation',
        notes: ''
      });

    } catch (error) {
      console.error('❌ BOOKING FAILED:', error);
      
      setMessage({ 
        type: 'danger', 
        text: error.message || 'Error booking appointment. Please try again.' 
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
            <div className="card-header bg-success text-white">
              <h3 className="mb-0">📱 Book Medical Appointment</h3>
              <small>Your details will be sent via WhatsApp</small>
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

              <form onSubmit={handleSubmit}>
                {/* Patient Information */}
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
                    <small className="text-muted">WhatsApp number preferred</small>
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
                    {/* Empty for layout */}
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
                  className="btn btn-success btn-lg w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Processing...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-whatsapp me-2"></i>
                      Book via WhatsApp
                    </>
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