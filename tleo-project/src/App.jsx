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
import UserProfilePage from './pages/UserProfilePage/UserProfilePage.jsx';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx';
import SearchPage from './pages/SearchBarPage/SearchBarPage.jsx';

function App() {


  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={ 
            <HomePage />
        } />
        <Route path="/cookies-policy" element={<CookiesPolicy />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        <Route path="/about-us" element={<AboutUsPage />} /> 
        <Route path="/terms-us" element={<TermsUs />} /> 
        <Route path="/contact-page" element={<ContactPage />} /> 
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/login-page" element={<LoginPage setUser={FormData}/>} />
        <Route path="/RegisterPage" element={<RegisterPage  />} />
        <Route path="/user-profile" element={<UserProfilePage  />} />
        <Route path="/Tendencies" element={<Tendencies />} />
        <Route path="/Added" element={<Added />} />
        <Route path="/most-read" element={<MostRead />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/genre/:genre" element={<GenrePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;