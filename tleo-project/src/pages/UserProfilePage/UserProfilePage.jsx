import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';

const UserProfilePage = () => {
  const location = useLocation();
  const { user } = location.state || {}; // Obtenemos el email desde el estado de navegación
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener los datos del usuario
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/data.json'); // Accedemos al archivo JSON
        const userFromJson = response.data.user;

        // Validar si el email coincide con el del usuario logueado
        if (user && userFromJson.email === user.email) {
          setUserData(userFromJson);
        } else {
          setError('Usuario no encontrado.');
        }
      } catch (err) {
        setError('Error al cargar los datos del usuario.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) {
    return <p>Cargando datos del usuario...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Header />
      <div style={{ padding: '50px' }}>
        <h2>Perfil de Usuario</h2>
        {userData && (
          <>
            <p><strong>Nombre:</strong> {userData.name} {userData.lastName}</p>
            <p><strong>Email:</strong> {userData.email}</p>

            <h3>Libros leídos:</h3>
            <ul>
              {userData.booksRead.map((book, index) => (
                <li key={index}>{book.title} - {book.author} ({book.year})</li>
              ))}
            </ul>

            <h3>Libros por leer:</h3>
            <ul>
              {userData.booksToRead.map((book, index) => (
                <li key={index}>{book.title} - {book.author} ({book.year})</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
