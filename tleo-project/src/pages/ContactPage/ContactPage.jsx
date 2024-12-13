import React, { useState } from 'react';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import '../../style/ContactPage.css';

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
        <h2 style={{ textAlign:'center', padding:'0px 0px 50px 0px' }}>Formulario de Contacto</h2>
        <form className="formulario-especifico" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
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
            <label htmlFor="email">Correo electrónico:</label>
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
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="acceptPolicies"
                checked={formData.acceptPolicies}
                onChange={handleChange}
              />
              Acepto las <a href="/politicas-de-privacidad">políticas de privacidad</a> y los <a href="/terminos-de-servicio">términos de servicio</a>.
            </label>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
