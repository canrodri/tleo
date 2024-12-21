import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Header() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-custom-header" style={{ padding: '10px 20px' }}>
            <a className="navbar-brand" href="/home">
                <img
                    src="\src\assets\img\tleo-logo-principal.png"
                    width="123"
                    height="54"
                    alt="TLeo logo"
                />
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* Menú Libros con submenú desplegable */}
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Libros
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a className="dropdown-item" href="/Tendencies">Tendencias</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/Added">Los más añadidos</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/most-read">Los más leídos</a>
                            </li>
                        </ul>
                    </li>

                    {/* Menú Géneros con submenú desplegable */}
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownGenres"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Géneros
                        </a>
                        <ul className="dropdown-menu genres-menu" aria-labelledby="navbarDropdownGenres">
  <div className="container">
    <div className="row">
      <div className="col-4">
        <li><Link className="dropdown-item" to="/genre/Aventura">Aventura</Link></li>
        <li><Link className="dropdown-item" to="/genre/Ciencia ficción">Ciencia ficción</Link></li>
        <li><Link className="dropdown-item" to="/genre/Comedia">Comedia</Link></li>
        <li><Link className="dropdown-item" to="/genre/Cuento">Cuento</Link></li>
        <li><Link className="dropdown-item" to="/genre/Drama">Drama</Link></li>
        <li><Link className="dropdown-item" to="/genre/Épico">Épico</Link></li>
        <li><Link className="dropdown-item" to="/genre/Ensayo">Ensayo</Link></li>
        <li><Link className="dropdown-item" to="/genre/Fantasía">Fantasía</Link></li>
      </div>
      <div className="col-4">
        <li><Link className="dropdown-item" to="/genre/Histórico">Histórico</Link></li>
        <li><Link className="dropdown-item" to="/genre/Horror">Horror</Link></li>
        <li><Link className="dropdown-item" to="/genre/Lírico">Lírico</Link></li>
        <li><Link className="dropdown-item" to="/genre/Novela">Novela</Link></li>
        <li><Link className="dropdown-item" to="/genre/Policial">Policial</Link></li>
        <li><Link className="dropdown-item" to="/genre/Realismo">Realismo</Link></li>
        <li><Link className="dropdown-item" to="/genre/Romántico">Romántico</Link></li>
        <li><Link className="dropdown-item" to="/genre/Sátira">Sátira</Link></li>
      </div>
      <div className="col-4">
        <li><Link className="dropdown-item" to="/genre/Terror">Terror</Link></li>
        <li><Link className="dropdown-item" to="/genre/Tragedia">Tragedia</Link></li>
        <li><Link className="dropdown-item" to="/genre/Distopía">Distopía</Link></li>
        <li><Link className="dropdown-item" to="/genre/Fábula">Fábula</Link></li>
        <li><Link className="dropdown-item" to="/genre/Noir">Noir</Link></li>
        <li><Link className="dropdown-item" to="/genre/Utopía">Utopía</Link></li>
        <li><Link className="dropdown-item" to="/genre/Western">Western</Link></li>
      </div>
    </div>
  </div>
</ul>
                    </li>
                </ul>

                <form
    className="form-inline my-2 my-lg-0"
    onSubmit={(e) => {
        e.preventDefault();
        window.location.href = `/search?q=${searchQuery}`;
    }}
>
    <div className="input-group">
        <div className="input-group-prepend">
            <span
                className="input-group-text"
                style={{ backgroundColor: 'transparent', border: 'none' }}
            >
                <i className="bi bi-search"></i>
            </span>
        </div>
        <input
            name="search"
            className="form-control w-auto"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid #2f2f2f',
                outline: 'none',
                borderRadius: '0px',
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
                            <a className="nav-link" href="/login-page">
                                Iniciar sesión
                            </a>
                        </li>
                        <div
                            className="border-left mx-3"
                            style={{
                                height: '30px',
                                borderLeft: '2px solid #2f2f2f',
                                alignSelf: 'center',
                            }}
                        ></div>
                        <li className="nav-item">
                            <a className="nav-link" href="/RegisterPage">
                                Registrarse
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
