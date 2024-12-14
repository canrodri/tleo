import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light bg-custom-footer"> 
  <div className="container" style={{ padding: '20px 20px' }}>
    <div className="row">

      <div className="col-md-2">
        <img src="/src/assets/img/tleo-logo-2.png" width="123" height="54" alt="TLeo logo" />
      </div>

      <div className="col-md-2">
        <h5 style={{ fontSize: '14px', color: '#D4AF37', fontWeight: '200' }}>EMPRESA</h5>
        <ul className="list-unstyled footer-list">
          <li><a href="#" className="text-white">Información</a></li>
          <li><a href="#" className="text-white">Artículos</a></li>
          <li><a href="#" className="text-white">Sobre nosotros</a></li>
          <li><Link to="/cookies-policy">Política de Cookies</Link></li>
          <li><Link to="/privacy-policy">Política de Privacidad</Link></li>
          <li><Link to="/terms-us">Términos de uso</Link></li>
        </ul>
      </div>

      <div className="col-md-2">
      <h5 style={{ fontSize: '14px', color: '#D4AF37', fontWeight: '200' }}>ENLACES ÚTILES</h5>
        <ul className="list-unstyled footer-list">
          <li><a href="#" className="text-white">Apoyo</a></li>
          <li><Link to="/contact-page">Contacto</Link></li>
        </ul>
      </div>

      <div className="col-md-2">
      <h5 style={{ fontSize: '14px', color: '#D4AF37', fontWeight: '200' }}>SÍGUENOS</h5>
      <a href="#" className="text-white me-4" style={{ fontSize: '30px' }}><i className="bi bi-facebook"></i></a>
      <a href="#" className="text-white me-4" style={{ fontSize: '30px' }}><i className="bi bi-twitter"></i></a>
      <a href="#" className="text-white me-4" style={{ fontSize: '30px' }}><i className="bi bi-instagram"></i></a>
      </div>

      <div className="col-md-3">
      <h4 style={{ padding: '20px 0px' }}>Descarga la aplicación de TLeo</h4>
      <img src="\src\assets\img\apps.png"  width="153" alt="Apps" />
      </div>
    </div>
  </div>

  <div style={{ width: '100%', backgroundColor: '#D4AF37', padding: '10px 0', textAlign: 'center' }}>
    <p className="mb-0" style={{ color: '#fff', fontSize: '16px', margin: 0 }}>
      &copy; 2024 TLeo. Todos los derechos reservados.
    </p>
  </div>
</footer>

  );
};

export default Footer;
