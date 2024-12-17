// GenrePage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Asegúrate de importar Link
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import "../../style/GenrePage.css";

const GenrePage = () => {
  const { genre } = useParams(); // Obtén el género de la URL
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener libros por género
  const fetchBooksByGenre = async (genre) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (err) {
      setError('Error al cargar los libros');
    } finally {
      setLoading(false);
    }
  };

  // Llamada a la API cuando el componente se monta
  useEffect(() => {
    fetchBooksByGenre(genre);
  }, [genre]);

  // Mostrar los libros o un mensaje de carga
  if (loading) {
    return <div>Cargando libros...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="genrepage2">
      <h1>Libros de {genre.charAt(0).toUpperCase() + genre.slice(1)} <i class="bi bi-arrow-up-right-square"></i></h1>
      <div className="book-list">
        {books.length === 0 ? (
          <p>No se encontraron libros en este género.</p>
        ) : (
          books.map((book) => (
            <div key={book.id} className="book-item">
              <Link to={`/book/${book.id}`}>
              <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                  style={{ width: '100px', height: '150px' }}
                />
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconocido'}</p>
              </Link>
            </div>
          ))
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GenrePage;
