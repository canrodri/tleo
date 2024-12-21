import React, { useState, useEffect } from 'react';
import BookDetails from '../BookDetails/BookDetails';  
import axios from 'axios';

const SearchPage = () => {
  const [bookId, setBookId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Obtenemos la query de búsqueda desde la URL
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('q');
    setSearchQuery(query || ''); // Si no hay query, dejamos la búsqueda vacía.
  }, []);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
        );
        const data =  response.data;
        const firstBook = data.items?.[0]; // Tomamos el primer libro

        if (firstBook) {
          setBookId(firstBook.id); // Guardamos el ID del primer libro
        } else {
          setBookId(null); // Si no se encuentran resultados
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchQuery]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!bookId) {
    return <p>No se encontraron libros para la búsqueda {searchQuery}.</p>;
  }

  return <BookDetails id={bookId} />;
};

export default SearchPage;
