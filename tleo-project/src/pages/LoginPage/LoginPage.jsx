import React, { useState } from 'react';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    acceptPolicies: false,
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de validación de usuario y contraseña
    if (formData.email === 'pepe@example.com' && formData.password === '1234') {
      // Si las credenciales son correctas, guardamos el usuario en el estado local
      setLoggedIn(true);
      navigate("/user-profile")
      
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div>
      <Header />
      <div style={{ padding: '50px' }}>
        <h2 style={{ textAlign:'center', padding:'0px 0px 50px 0px' }}>Inicia sesión con tu cuenta de usuario</h2>
        <form className="formulario-especifico" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Usuario:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
           type="password"
           id="password"
           name="password"
           value={formData.password}
           onChange={handleChange}
           required
            />
          </div>

          <button type="submit">Enviar</button>
        </form>
       </div>
      <Footer />
    </div>
  );
};

export default ContactPage;