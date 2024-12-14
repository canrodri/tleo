import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-custom-header" style={{ padding: '10px 20px' }}>
<a className="navbar-brand" href="/home">
    <img src="\src\assets\img\tleo-logo-principal.png"  width="123"  height="54" alt="TLeo logo" />
</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Libros</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#">Géneros</a>
                    </li>
                </ul>

                <form
  className="form-inline my-2 my-lg-0"
  onSubmit={(e) => {
    e.preventDefault();
    const query = e.target.search.value;
    console.log('Búsqueda:', query);
  }}
>
  <div className="input-group">
  
    <div className="input-group-prepend">
      <span className="input-group-text" style={{ backgroundColor: 'transparent', border: 'none' }}>
      <i class="bi bi-search"></i>
      </span>
    </div>


    <input
      name="search"
     className="form-control w-auto"
      type="search"
      placeholder="Buscar"
      aria-label="Search"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid #2f2f2f', 
        outline: 'none', 
        borderRadius:'0px',
        boxShadow: 'none', 
      }}
    />
  </div>
</form>


            </div>

            <div className="ml-auto d-flex align-items-center">
      <div className="d-flex align-items-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/login-page">Iniciar sesión</a>
          </li>
          <div className="border-left mx-3" style={{ height: '30px', borderLeft: '2px solid #2f2f2f', alignSelf: 'center' }}></div>
          <li className="nav-item">
            <a className="nav-link" href="/RegisterPage">Registrarse</a>
          </li>
        </ul>
      </div>
    </div>
        </nav>
    );
}

export default Header;
