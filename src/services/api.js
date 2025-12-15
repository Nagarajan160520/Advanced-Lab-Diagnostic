import axios from 'axios';

const API_BASE_URL = 'https://med-q-diagnostics-backend.onrender.com';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') || localStorage.getItem('adminToken');
    console.log('🔐 Sending request with token:', token ? 'Yes' : 'No');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('✅ Authorization header added');
    }
    return config;
  },
  (error) => {
    console.error('❌ Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Handle responses
api.interceptors.response.use(
  (response) => {
    console.log('✅ API Response received:', response.config.url);
    return response;
  },
  (error) => {
    console.error('❌ API Response error:', {
      url: error.config?.url,
      status: error.response?.status,
      message: error.response?.data?.message
    });
    
    if (error.response?.status === 401) {
      console.log('🚨 401 Unauthorized - Removing token');
      localStorage.removeItem('token');
      localStorage.removeItem('adminToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// ✅ FIXED: Auth API - CORRECT ENDPOINTS
export const authAPI = {
  register: (userData) => {
    console.log('🔄 Registering user:', userData.email);
    return api.post('/api/auth/register', userData);
  },
  login: (credentials) => {
    console.log('🔄 Logging in user:', credentials.email);
    return api.post('/api/auth/login', credentials);
  },
  getMe: () => {
    console.log('🔄 Getting user profile');
    return api.get('/api/auth/me');
  },
  updateProfile: (profileData) => api.put('/api/auth/update-profile', profileData),
  changePassword: (passwordData) => api.put('/api/auth/change-password', passwordData),
  logout: () => api.post('/api/auth/logout'),
  verifyToken: () => api.get('/api/auth/verify'),
};

// ✅ FIXED: Patients API - CORRECT ENDPOINTS
export const patientsAPI = {
  getAll: (params) => api.get('/api/patients', { params }),
  getById: (id) => api.get(`/api/patients/${id}`),
  create: (patientData) => api.post('/api/patients', patientData),
  update: (id, patientData) => api.put(`/api/patients/${id}`, patientData),
  delete: (id) => api.delete(`/api/patients/${id}`),
  getDashboard: (id) => api.get(`/api/patients/${id}/dashboard`),
  getMedicalHistory: (id) => api.get(`/api/patients/${id}/medical-history`),
  search: (query) => api.get(`/api/patients/search?q=${query}`),
};

// ✅ FIXED: Appointments API - CORRECT ENDPOINTS
export const appointmentsAPI = {
  getAll: (params) => api.get('/api/appointments', { params }),
  getById: (id) => api.get(`/api/appointments/${id}`),
  create: (appointmentData) => {
    console.log('📤 Sending appointment data:', appointmentData);
    return api.post('/api/appointments', appointmentData);
  },
  update: (id, appointmentData) => api.put(`/api/appointments/${id}`, appointmentData),
  delete: (id) => api.delete(`/api/appointments/${id}`),
  getByPatient: (patientId) => api.get(`/api/appointments/patient/${patientId}`),
  getByDoctor: (doctorId) => api.get(`/api/appointments/doctor/${doctorId}`),
  getToday: () => api.get('/api/appointments/today'),
  getUpcoming: () => api.get('/api/appointments/upcoming'),
};

// ✅ FIXED: Tests API - CORRECT ENDPOINTS
export const testsAPI = {
  getAll: (params) => api.get('/api/tests', { params }),
  getById: (id) => api.get(`/api/tests/${id}`),
  create: (testData) => api.post('/api/tests', testData),
  update: (id, testData) => api.put(`/api/tests/${id}`, testData),
  delete: (id) => api.delete(`/api/tests/${id}`),
  getByPatient: (patientId) => api.get(`/api/tests/patient/${patientId}`),
  updateResults: (id, results) => api.put(`/api/tests/${id}/results`, results),
  getPending: () => api.get('/api/tests/pending'),
  getCompleted: () => api.get('/api/tests/completed'),
};

// ✅ FIXED: Staff API - CORRECT ENDPOINTS
export const staffAPI = {
  getAll: (params) => api.get('/api/staff', { params }),
  getById: (id) => api.get(`/api/staff/${id}`),
  create: (staffData) => api.post('/api/staff', staffData),
  update: (id, staffData) => api.put(`/api/staff/${id}`, staffData),
  delete: (id) => api.delete(`/api/staff/${id}`),
  getByRole: (role) => api.get(`/api/staff/role/${role}`),
  
  // ✅ CORRECT getDoctors method:
  getDoctors: () => {
    console.log('🔄 Fetching doctors from /api/staff/doctors endpoint...');
    return api.get('/api/staff/doctors');
  },
  
  getDashboard: (id) => api.get(`/api/staff/${id}/dashboard`),
  updateAvailability: (id, availability) => api.put(`/api/staff/${id}/availability`, availability),
  getAvailableDoctors: (date) => api.get(`/api/staff/available/${date}`),
};

// ✅ FIXED: Reports API - CORRECT ENDPOINTS
export const reportsAPI = {
  getAll: (params) => api.get('/api/reports', { params }),
  getById: (id) => api.get(`/api/reports/${id}`),
  create: (reportData) => api.post('/api/reports', reportData),
  update: (id, reportData) => api.put(`/api/reports/${id}`, reportData),
  delete: (id) => api.delete(`/api/reports/${id}`),
  getByPatient: (patientId) => api.get(`/api/reports/patient/${patientId}`),
  getByDoctor: (doctorId) => api.get(`/api/reports/doctor/${doctorId}`),
  getCritical: () => api.get('/api/reports/critical'),
  generateReport: (data) => api.post('/api/reports/generate', data),
};

// ✅ FIXED: Admin API - CORRECT ENDPOINTS
export const adminAPI = {
  getDashboardStats: () => api.get('/api/admin/dashboard'),
  getPatients: (params) => api.get('/api/admin/patients', { params }),
  getAppointments: () => api.get('/api/admin/appointments'),
  getStaff: (params) => api.get('/api/admin/staff', { params }),
  getTests: () => api.get('/api/admin/tests'),
  getReports: () => api.get('/api/admin/reports'),
  
  // ✅ ADDED: Additional admin endpoints
  deletePatient: (id) => api.delete(`/api/admin/patients/${id}`),
  deleteStaff: (id) => api.delete(`/api/admin/staff/${id}`),
  deleteAppointment: (id) => api.delete(`/api/admin/appointments/${id}`),
  deleteReport: (id) => api.delete(`/api/admin/reports/${id}`),
  deleteTest: (id) => api.delete(`/api/admin/tests/${id}`),
  
  // ✅ SETTINGS
  getSettings: () => api.get('/api/admin/settings'),
  updateSettings: (settings) => api.put('/api/admin/settings', settings),
  
  // ✅ PROFILE
  getAdminProfile: () => api.get('/api/admin/profile'),
  updateAdminProfile: (profile) => api.put('/api/admin/profile', profile),
};

// ✅ ADDED: Contact API
export const contactAPI = {
  getAll: () => api.get('/api/contact/all'),
  getById: (id) => api.get(`/api/contact/${id}`),
  delete: (id) => api.delete(`/api/contact/${id}`),
  updateStatus: (id, status) => api.put(`/api/contact/${id}/status`, { status }),
  sendReply: (id, replyData) => api.post(`/api/contact/${id}/reply`, replyData),
};

// ✅ ADDED: Referrals API
export const referralsAPI = {
  getAll: () => api.get('/api/referrals'),
  getById: (id) => api.get(`/api/referrals/${id}`),
  create: (referralData) => api.post('/api/referrals', referralData),
  update: (id, referralData) => api.put(`/api/referrals/${id}`, referralData),
  delete: (id) => api.delete(`/api/referrals/${id}`),
  getByPatient: (patientId) => api.get(`/api/referrals/patient/${patientId}`),
  getByDoctor: (doctorId) => api.get(`/api/referrals/doctor/${doctorId}`),
};

// ✅ ADDED: Settings API
export const settingsAPI = {
  get: () => api.get('/api/settings'),
  update: (settings) => api.put('/api/settings/update', settings),
  reset: () => api.post('/api/settings/reset'),
};

// ✅ ADDED: Profile API
export const profileAPI = {
  get: () => api.get('/api/profile/me'),
  update: (profile) => api.put('/api/profile/update', profile),
  changePassword: (passwordData) => api.post('/api/profile/change-password', passwordData),
};

export default api;