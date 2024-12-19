import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage.jsx';
import CookiesPolicy from './pages/Policies/CookiesPolicy.jsx'; 
import PrivacyPolicy from './pages/Policies/PrivacyPolicy.jsx'; 
import TermsUs from './pages/Policies/TermsUs.jsx'; 
import ContactPage from './pages/ContactPage/ContactPage.jsx'; 
import LoginPage from './pages/LoginPage/LoginPage.jsx'; 
import BookDetails from './pages/BookDetails/BookDetails.jsx'; 
import GenrePage from './pages/GenrePage/GenrePage.jsx'; 
import Added from './pages/PageMenu/Added.jsx'; 
import MostRead from './pages/PageMenu/MostRead.jsx'; 
import Tendencies from './pages/PageMenu/Tendencies.jsx'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage.jsx';

function App() {

  const [user, setUser] = useState(null)

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={ 
            <HomePage />
        } />
        <Route path="/cookies-policy" element={<CookiesPolicy />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        {/* <Route path="/about-us" element={<AboutUsPage />} />  */}
        <Route path="/terms-us" element={<TermsUs />} /> 
        <Route path="/contact-page" element={<ContactPage setUser={setUser}/>} /> 
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/login-page" element={<LoginPage setUser={FormData}/>} />
        <Route path="/RegisterPage" element={<RegisterPage user={user} />} />
        <Route path="/user-profile" element={<UserProfilePage user={user} />} />
        <Route path="/Tendencies" element={<Tendencies />} />
        <Route path="/Added" element={<Added />} />
        <Route path="/most-read" element={<MostRead />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/genre/:genre" element={<GenrePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;