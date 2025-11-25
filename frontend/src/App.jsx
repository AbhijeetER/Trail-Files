import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingsPage from './pages/SettingsPage';
import Navbar from './components/Navbar';
import ResetPassword from './components/ResetPass';
function ScrollToTop() {
  const { pathname } = useLocation(); // ✅ useLocation is imported
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path='/reset' element={<ResetPassword />}  />
          <Route path="*" element={<div className="text-white p-8">404 - Page Not Found</div>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
