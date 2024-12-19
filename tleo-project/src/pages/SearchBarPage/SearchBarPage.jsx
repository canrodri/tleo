import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const SearchResultsPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            if (!query) return;
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
                );
                setBooks(response.data.items || []);
            } catch (err) {
                console.error('Error fetching books:', err);
                setError('No se pudieron cargar los resultados de búsqueda.');
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, [query]);

    if (loading) return <p>Cargando resultados...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
            <h2>Resultados de búsqueda para: "{query}"</h2>
            <div className="book-results">
                {books.map((book) => (
                    <div key={book.id} className="book-card">
                        <Link to={`/book/${book.id}`}>
                            <img
                                src={
                                    book.volumeInfo.imageLinks?.thumbnail ||
                                    'https://via.placeholder.com/128x190?text=Sin+Imagen'
                                }
                                alt={book.volumeInfo.title}
                            />
                            <h3>{book.volumeInfo.title}</h3>
                        </Link>
                        <p>{book.volumeInfo.authors?.join(', ') || 'Autor desconocido'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResultsPage;
