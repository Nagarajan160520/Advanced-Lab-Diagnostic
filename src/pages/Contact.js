import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Spinner } from 'react-bootstrap';

const API_BASE_URL = 'https://med-q-diagnostics-backend.onrender.com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to format WhatsApp message
  const formatWhatsAppMessage = (data) => {
    return `🔔 *NEW CONTACT FORM MESSAGE* 🔔

👤 *CONTACT DETAILS*
------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

📋 *MESSAGE DETAILS*
------------------
Subject: ${data.subject}
Message: ${data.message}

⏰ *SUBMISSION TIME*
------------------
${new Date().toLocaleString()}

Thank you for contacting MedQ Diagnostics!`;
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
    setIsLoading(true);

    try {
      console.log('🔄 Sending contact form...');
      console.log('📤 Form data:', formData);
      
      // Validate form
      if (!formData.name.trim()) throw new Error('Please enter your name');
      if (!formData.email.trim()) throw new Error('Please enter your email');
      if (!formData.subject.trim()) throw new Error('Please enter subject');
      if (!formData.message.trim()) throw new Error('Please enter your message');

      // Try to send to backend
      try {
        const response = await fetch(`${API_BASE_URL}/api/contact/send`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        console.log('📨 Response status:', response.status);
        
        const result = await response.json();
        console.log('📨 Response data:', result);

        if (result.success) {
          console.log('✅ Message saved to backend');
        } else {
          console.log('⚠️ Backend save failed, but continuing...');
        }
      } catch (backendError) {
        console.log('⚠️ Backend error, but continuing with WhatsApp...');
      }

      // Send WhatsApp message
      console.log('📱 Sending WhatsApp message...');
      sendWhatsAppMessage(formData);
      
      setAlertVariant('success');
      setAlertMessage('✅ Message sent! WhatsApp opened with your details. Please send the message to confirm.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('❌ Form submission failed:', error);
      setAlertVariant('danger');
      setAlertMessage(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  return (
    <Container className="py-5" style={{ marginTop: '60px' }}>
      <Row className="text-center mb-5">
        <Col>
          <h1 className="fw-bold text-success">📱 Contact Us</h1>
          <p className="lead">Get in touch with our healthcare team via WhatsApp</p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col lg={8}>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-success text-white">
              <h5 className="mb-0">
                <i className="bi bi-whatsapp me-2"></i>
                Send us a Message (via WhatsApp)
              </h5>
            </Card.Header>
            <Card.Body className="p-4">
              {showAlert && (
                <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                  {alertMessage}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number <span className="text-success">(WhatsApp preferred)</span></Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your WhatsApp number"
                      />
                      <Form.Text className="text-muted">
                        Include country code (e.g., +91 for India)
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Subject <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Enter subject"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    variant="success" 
                    size="lg" 
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Spinner size="sm" className="me-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-whatsapp me-2"></i>
                        Send via WhatsApp
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Header className="bg-light">
              <h5 className="mb-0">Contact Information</h5>
            </Card.Header>
            <Card.Body className="p-4">
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 text-primary rounded p-2 me-3">
                    📍
                  </div>
                  <div>
                    <h6 className="mb-1">Address</h6>
                    <p className="text-muted mb-0">
                      38CW+36Q,Tenkasi<br />
                      Madurai Rd,kadaiyanallur,Tamilnadu-627751
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success bg-opacity-10 text-success rounded p-2 me-3">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">WhatsApp</h6>
                    <p className="text-muted mb-0">+91 6381095854</p>
                    <small className="text-success">Click "Send via WhatsApp" button above</small>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="bg-info bg-opacity-10 text-info rounded p-2 me-3">
                    ✉️
                  </div>
                  <div>
                    <h6 className="mb-1">Email</h6>
                    <p className="text-muted mb-0">nagarajan16052001@gmail.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="bg-warning bg-opacity-10 text-warning rounded p-2 me-3">
                    ⏰
                  </div>
                  <div>
                    <h6 className="mb-1">Working Hours</h6>
                    <p className="text-muted mb-0">
                      Mon-Fri: 8:00 AM - 8:00 PM<br />
                      Sat: 9:00 AM - 6:00 PM<br />
                      Sun: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h6>Emergency Contact</h6>
                <p className="text-danger">
                  📞 +91 6381095854
                </p>
                <small className="text-muted">
                  Available 24/7 for emergency cases
                </small>
              </div>

              {/* Quick WhatsApp Button */}
              <div className="mt-4 text-center">
                <a 
                  href={`https://wa.me/916381095854?text=${encodeURIComponent('Hi, I need medical assistance.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success w-100"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Quick WhatsApp Chat
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;