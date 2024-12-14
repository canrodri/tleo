import React, { useState } from 'react';
import Header from "../../components/Header";
import Footer from '../../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptPolicies: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptPolicies) {
      alert('Debes aceptar las políticas de privacidad y los términos para enviar el formulario.');
      return;
    }
    console.log('Formulario enviado:', formData);
  };

  return (
    <div>
      <Header />
      <div style={{ padding: '50px' }}>
        <h2 style={{ textAlign:'center', padding:'0px 0px 50px 0px' }}>Inicia sesión con tu cuenta de usuario</h2>
        <form className="formulario-especifico" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Usuario:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
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