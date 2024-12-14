import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function RegisterPage() {
  // Estado para manejar los valores del formulario
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Por favor, acepta los términos y condiciones.");
      return;
    }

    alert("Registro exitoso!");
  };

  return (
    <div>
      <Header />
      <div style={{ padding: "50px", maxWidth: "600px", margin: "auto"}}>
        <h3 className="text-center mb-5">
          Regístrate
        </h3>
        <form onSubmit={handleSubmit} className="formulario-especifico">

        {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              className="form-control"
              required
            />
          </div>

          {/*Apellidos */}
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Apellidos"
              className="form-control"
              required
            />
          </div>

          {/*Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control"
              required
            />
          </div>

          {/*Contraseña */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              className="form-control"
              required
            />
          </div>

          {/* Checkbox para aceptar términos */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="form-check-input"
              style={{ transform: "scale(0.4)", margin:"4px"}}
            />
            <label htmlFor="termsAccepted" className="form-check-label">
              Acepto las Condiciones y Términos de uso de TLeo
            </label>
          </div>

          {/* Botón de Enviar */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#d4af37",
                color: "white",
                borderRadius: "4px",
                padding: "10px 20px",
                fontWeight: "bold",
                border: "none",
              }}
            >
              Regístrate
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPage;
