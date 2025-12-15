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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('🔄 Sending contact form...');
      
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
        setAlertVariant('success');
        setAlertMessage(result.message);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setAlertVariant('danger');
        setAlertMessage(result.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('❌ Network error:', error);
      setAlertVariant('danger');
      setAlertMessage('Server connection failed. Please try again.');
    } finally {
      setIsLoading(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  
  

  return (
    <Container className="py-5" style={{ marginTop: '60px' }}>
      {/* Test Button 
      <div className="text-center mb-3">
        <Button variant="outline-info" size="sm" onClick={testConnection}>
          🔧 Test Contact API
        </Button>
      </div> */}

      <Row className="text-center mb-5">
        <Col>
          <h1 className="fw-bold text-primary">Contact Us</h1>
          <p className="lead">Get in touch with our healthcare team</p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col lg={8}>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-light">
              <h5 className="mb-0">Send us a Message</h5>
            </Card.Header>
            <Card.Body className="p-4">
              {showAlert && (
                <Alert variant={alertVariant}>
                  {alertMessage}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name *</Form.Label>
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
                      <Form.Label>Email Address *</Form.Label>
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
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Subject *</Form.Label>
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
                  <Form.Label>Message *</Form.Label>
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
                    variant="primary" 
                    size="lg" 
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Spinner size="sm" className="me-2" />
                        Sending...
                      </>
                    ) : (
                      '📧 Send Message'
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
                    📞
                  </div>
                  <div>
                    <h6 className="mb-1">Phone</h6>
                    <p className="text-muted mb-0">+91 6381095854</p>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;