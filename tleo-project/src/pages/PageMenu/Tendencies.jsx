import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../style/Tendencies.css";

function Tendencies() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const booksPerPage = 20;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: "bestsellers", // Puedes cambiar esto por otro criterio
          startIndex: currentPage * booksPerPage, // Calcula el índice de inicio según la página actual
          maxResults: booksPerPage, // Cantidad de libros por página
        },
      })
      .then((response) => {
        setBooks(response.data.items || []);
        setTotalPages(Math.ceil(response.data.totalItems / booksPerPage)); // Establece el total de páginas
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, [currentPage]); // Se ejecuta cada vez que la página cambia

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected); // Actualiza la página actual con la página seleccionada
  };

  return (
    <div>  
      <Header />
      <div className="books-page">
        <h1>Libros en tendencia <i className="bi bi-arrow-up-right-square"></i></h1>

        {loading ? (
          <p>Cargando libros...</p>
        ) : (
          <div className="books-grid">
            {books.map((book) => (
              <div key={book.id} className="book-item">
                <Link to={`/book/${book.id}`}>
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                    className="book-img"
                  />
                  <h4>{book.volumeInfo.title}</h4>
                  <p>{book.volumeInfo.authors?.join(", ")}</p>
                </Link>
              </div>
            ))}
          </div>
        )}

        <ReactPaginate
          previousLabel={"← Anterior"}
          nextLabel={"Siguiente →"}
          pageCount={totalPages} // Número total de páginas
          onPageChange={handlePageChange} // Función que actualiza la página seleccionada
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Tendencies;
