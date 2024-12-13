import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

function App() {
  

  return (
    <div>
       <Header />
       <HomePage />
       <Footer />
    </div>
  )
    }

export default App
