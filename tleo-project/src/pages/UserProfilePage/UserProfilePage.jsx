import profilePicture from "../../assets/img/profile-picture.jpg";

function UserProfile() {
  const userData = {
    firstName: "María",
    lastName: "García",
    email: "maria.garcia@gmail.com",
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header text-center bg-primary text-white">
          <h2>Perfil del Usuario</h2>
        </div>
        <div className="card-body">
          {/* Información del Usuario */}
          <div>
            <img
              src={profilePicture}
              alt={userData.firstName}
              className="rounded-circle"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="mb-3">
            <p>
              <strong>Nombre:</strong> {userData.firstName}
            </p>
            <p>
              <strong>Apellidos:</strong> {userData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
