import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';
import PatientPortal from './pages/PatientPortal';
import Contact from './pages/Contact';
//import Blog from './pages/Blog';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BookTest from './pages/BookTest'; 
import CategoryDetail from './components/CategoryDetail';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/book-appointment" element={<BookAppointment />} />
              <Route path="/patient-portal" element={<PatientPortal />} />
              <Route path="/contact" element={<Contact />} />
              {/*<Route path="/blog" element={<Blog />} />*/}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/services/:categoryName" element={<CategoryDetail />} />
              
              <Route path="/book-test" element={<BookTest />} /> {/* Add this route */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;