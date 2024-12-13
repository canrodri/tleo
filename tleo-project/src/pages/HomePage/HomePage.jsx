import React from 'react';
import PopularBooksCarousel from './components/PopularBooksCarousel.jsx';

const HomePage = () => {
    return (
      <div>
<div className="slide" style={{ padding:'40px 70px' }}>
    <div className="row">

      <div className="col-md-6">
      <h1 style={{ fontSize: '40px', color: '#2F2F2F', fontWeight: '700' }}>Únete a la comunidad  de amantes los libros  más grande del mundo</h1>
      <ul className="list-unstyled slide-list">
  <li className="d-flex align-items-center">
    <i className="bi bi-check-circle me-2" style={{ fontSize: '30px', padding:'5px 0px'}}></i>
    <div className="text-slide">Mantén un seguimiento de lo que lees</div>
  </li>
  <li className="d-flex align-items-center">
    <i className="bi bi-plus-circle me-2" style={{ fontSize: '30px', padding:'5px 0px' }}></i>
    <div className="text-slide">Crea tus listas con las lecturas pendientes</div>
  </li>
  <li className="d-flex align-items-center">
    <i className="bi bi-person-circle me-2" style={{ fontSize: '30px', padding:'5px 0px' }}></i>
    <div className="text-slide">Recibe todas las novedades del mundo literario</div>
  </li>
  <li className="d-flex align-items-center">
    <i className="bi bi-skip-forward-circle me-2" style={{ fontSize: '30px', padding:'5px 0px' }}></i>
    <div className="text-slide">¡Descubre qué puedes leer a continuación!</div>
  </li>
</ul>

        <button 
    className="btn btn-primary mt-4" 
    style={{
      backgroundColor: '#2F2F2F',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: '300',
      color: '#fff',
      borderRadius: '25px',
      cursor: 'pointer'
    }}
  >
    REGÍSTRATE AHORA
  </button>
      </div>

      <div className="col-md-6 d-flex justify-content-center align-items-center">
  <img 
    src="/src/assets/img/Book-Lover-bro.png" 
    width="423"  
    alt="TLeo logo" 
  />
</div>

    </div>
  </div>
  <div className="carousel-libros">
      <h1 style={{ fontSize: '35px', color: '#2F2F2F', fontWeight: '500' }}>Libros en tendencia <i class="bi bi-arrow-up-right-square"></i></h1>
      <p style={{ color: '#2F2F2F', fontWeight: '400' }}>Libros con más reacciones en los últimos 3 días</p>
  <PopularBooksCarousel />
  </div>

  <div className="carousel-libros">
      <h1 style={{ fontSize: '35px', color: '#2F2F2F', fontWeight: '500' }}>Los libros más vendidos <i class="bi bi-arrow-up-right-square"></i></h1>
      <p style={{ color: '#2F2F2F', fontWeight: '400' }}>Libros más leídos de todos los tiempos</p>
  <PopularBooksCarousel />
  </div>

  <div className="carousel-libros">
      <h1 style={{ fontSize: '35px', color: '#2F2F2F', fontWeight: '500' }}>Top libros pendientes <i class="bi bi-arrow-up-right-square"></i></h1>
      <p style={{ color: '#2F2F2F', fontWeight: '400' }}>Libros más añadidos a pendientes por los usuarios</p>
  <PopularBooksCarousel />
  </div>

      </div>
    );
  };
  
  export default HomePage;