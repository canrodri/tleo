// import registrationImg from "../../../assets/img/registration-page"

function RegisterPage() {
  return (
    <div className="d-flex justify-content-left align-item-center mt-5 ms-5">
      <form>
        <h3 className="text-center">Regístrate</h3>
        <div className="mb-2">
        <i className="fa-solid fa-book-open-reader"></i>
          <label htmlFor="fname">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
          ></input>
        </div>
        <div className="mb-2">
          <label htmlFor="lname">Apellidos</label>
          <input
            type="text"
            placeholder="Apellidos"
            className="form-control"
          ></input>
        </div>
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="form-control"
          ></input>
        </div>
        <div className="mb-2">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            className="form-control"
          ></input>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="gap-2 form-check-input"/>
            <label className="gap-2">
              Al regístrarte aceptas las Condiciones y Términos de uso de TLeo
            </label>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" style={{backgroundColor: "#8B4513", color: "white"}}>Regístrate</button>
        </div>
      </form>
      <div className="w-50 d-flex justify-content-right">
      <img src="" alt="Registro en TLeo" className="" />
      </div>
    </div>
  );
}
export default RegisterPage;
