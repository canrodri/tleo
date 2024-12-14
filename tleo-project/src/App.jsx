import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage.jsx';
import CookiesPolicy from './pages/Policies/CookiesPolicy.jsx'; 
import PrivacyPolicy from './pages/Policies/PrivacyPolicy.jsx'; 
import TermsUs from './pages/Policies/TermsUs.jsx'; 
import ContactPage from './pages/ContactPage/ContactPage.jsx'; 
import LoginPage from './pages/LoginPage/LoginPage.jsx'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={ 
            <HomePage />
        } />
        <Route path="/cookies-policy" element={<CookiesPolicy />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        <Route path="/terms-us" element={<TermsUs />} /> 
        <Route path="/contact-page" element={<ContactPage />} /> 
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;