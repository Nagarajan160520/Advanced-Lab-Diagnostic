import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [recentTests, setRecentTests] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - in real app, fetch from API
    setTimeout(() => {
      setRecentTests([
        {
          id: 1,
          name: 'Complete Blood Count',
          date: '2024-01-15',
          status: 'Completed',
          result: 'Normal'
        },
        {
          id: 2,
          name: 'Thyroid Profile',
          date: '2024-01-10',
          status: 'Completed',
          result: 'Normal'
        },
        {
          id: 3,
          name: 'Vitamin D Test',
          date: '2024-01-08',
          status: 'Completed',
          result: 'Deficient'
        }
      ]);

      setUpcomingAppointments([
        {
          id: 1,
          doctor: 'Dr. Sharma',
          date: '2024-01-20',
          time: '10:00 AM',
          type: 'Follow-up'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const downloadReport = (testId) => {
    alert(`Downloading report for test #${testId}`);
    // In real app, this would download the PDF report
  };

  const viewAppointmentDetails = (appointmentId) => {
    alert(`Viewing details for appointment #${appointmentId}`);
    // In real app, this would navigate to appointment details
  };

  if (loading) {
    return (
      <div style={{ paddingTop: '100px' }} className="container">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px' }} className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="h3 mb-1">Welcome back, {user?.name}!</h1>
              <p className="text-muted">Here's your health dashboard</p>
            </div>
            <button className="btn btn-primary">
              📅 Book New Test
            </button>
          </div>

          {/* Quick Stats */}
          <div className="row g-3 mb-5">
            <div className="col-md-3">
              <div className="card border-0 bg-primary text-white">
                <div className="card-body text-center">
                  <h4>{recentTests.length}</h4>
                  <p className="mb-0">Tests Taken</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 bg-success text-white">
                <div className="card-body text-center">
                  <h4>{upcomingAppointments.length}</h4>
                  <p className="mb-0">Upcoming Appointments</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 bg-warning text-dark">
                <div className="card-body text-center">
                  <h4>2</h4>
                  <p className="mb-0">Pending Reports</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 bg-info text-white">
                <div className="card-body text-center">
                  <h4>5</h4>
                  <p className="mb-0">Health Records</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="row">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-light">
                  <h5 className="mb-0 fw-bold">Recent Test Results</h5>
                </div>
                <div className="card-body">
                  {recentTests.length === 0 ? (
                    <div className="text-center py-4">
                      <p className="text-muted">No test results found</p>
                      <button className="btn btn-primary">Book Your First Test</button>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Test Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Result</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentTests.map(test => (
                            <tr key={test.id}>
                              <td>
                                <strong>{test.name}</strong>
                              </td>
                              <td>{new Date(test.date).toLocaleDateString()}</td>
                              <td>
                                <span className="badge bg-success">{test.status}</span>
                              </td>
                              <td>
                                <span className={`badge ${
                                  test.result === 'Normal' ? 'bg-success' : 'bg-warning'
                                }`}>
                                  {test.result}
                                </span>
                              </td>
                              <td>
                                <button 
                                  className="btn btn-outline-primary btn-sm"
                                  onClick={() => downloadReport(test.id)}
                                >
                                  📄 Download
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-light">
                  <h6 className="mb-0 fw-bold">📅 Upcoming Appointments</h6>
                </div>
                <div className="card-body">
                  {upcomingAppointments.length === 0 ? (
                    <div className="text-center py-3">
                      <p className="text-muted small">No upcoming appointments</p>
                      <button className="btn btn-outline-primary btn-sm">
                        Schedule Appointment
                      </button>
                    </div>
                  ) : (
                    <>
                      {upcomingAppointments.map(apt => (
                        <div key={apt.id} className="border-start border-primary ps-3 mb-3">
                          <h6 className="mb-1">{apt.doctor}</h6>
                          <small className="text-muted d-block">
                            {new Date(apt.date).toLocaleDateString()} at {apt.time}
                          </small>
                          <small className="text-muted">{apt.type}</small>
                          <div className="mt-2">
                            <button 
                              className="btn btn-outline-info btn-sm"
                              onClick={() => viewAppointmentDetails(apt.id)}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                      <button className="btn btn-outline-primary btn-sm w-100">
                        View All Appointments
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-header bg-light">
                  <h6 className="mb-0 fw-bold">🚀 Quick Actions</h6>
                </div>
                <div className="card-body">
                  <div className="d-grid gap-2">
                    <button className="btn btn-outline-primary">
                      📋 Download Health Summary
                    </button>
                    <button className="btn btn-outline-success">
                      🏠 Book Home Collection
                    </button>
                    <button className="btn btn-outline-info">
                      📞 Contact Support
                    </button>
                    <button className="btn btn-outline-warning">
                      💊 Medicine Reminder
                    </button>
                  </div>
                </div>
              </div>

              {/* Health Tips */}
              <div className="card border-0 shadow-sm mt-4">
                <div className="card-header bg-light">
                  <h6 className="mb-0 fw-bold">💡 Health Tips</h6>
                </div>
                <div className="card-body">
                  <div className="alert alert-info small">
                    <strong>Stay Hydrated:</strong> Drink at least 8 glasses of water daily for better health.
                  </div>
                  <div className="alert alert-warning small">
                    <strong>Regular Checkups:</strong> Schedule your annual health checkup for preventive care.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;