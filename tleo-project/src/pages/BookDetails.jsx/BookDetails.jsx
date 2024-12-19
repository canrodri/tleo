import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../style/BookDetails.css";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isRead, setIsRead] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [rating, setRating] = useState(0);
  const [isAdded, setIsAdded] = useState(false); // Estado para el botón de añadir

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error("Error fetching book details:", error));
  }, [id]);
    
  const handleRating = (value) => setRating(value);

  const AddToLibraryList = () => {
    setIsAdded(true); // Marca el libro como añadido
    console.log("Libro añadido a la lista:", book.volumeInfo.title);
    alert(`"${book.volumeInfo.title}" se ha añadido a tu lista!`);
  };

  if (!book) {
    return <p>Cargando detalles del libro...</p>;
  }

  const { title, authors, description, imageLinks, publishedDate, publisher } = book.volumeInfo;

  return (
    <div>
      <Header />
      <div className="book-details-container">
        <div className="book-cover">
          <img src={imageLinks?.thumbnail} alt={title} />
        </div>
        <div className="book-info">
          <h1>{title}</h1>
          <p><strong>Autor(es):</strong> {authors?.join(", ")}</p>
          <p><strong>Publicado por:</strong> {publisher} en {publishedDate}</p>
          <p><strong>Descripción:</strong></p>
          {description ? (
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className="book-description"
            ></p>
          ) : (
            <p>No hay descripción disponible.</p>
          )}

          {/* Botones de estado */}
          <div className="book-status">
            <button
              className={`status-btn ${isRead ? "active" : ""}`}
              onClick={() => setIsRead(!isRead)}
            >
              {isRead ? "✓ Libro leído" : "Marcar como leído"}
            </button>
            <button
              className={`status-btn ${isPending ? "active" : ""}`}
              onClick={() => setIsPending(!isPending)}
            >
              {isPending ? "✓ Pendiente de leer" : "Marcar como pendiente"}
            </button>
          </div>

            {/* Botón de añadir a lista */}
            <div className="add-to-library">
            <button
              className="add-btn"
              onClick={AddToLibraryList}
              disabled={isAdded} // Desactiva el botón si ya ha sido añadido
            >
              {isAdded ? "Libro añadido" : "Añadir a mi lista"}
            </button>
          </div>

          {/* Sistema de calificación */}
          <div className="book-rating">
            <p><strong>Valorar este libro:</strong></p>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? "selected" : ""}`}
                onClick={() => handleRating(star)}
              >
                ★
              </span>
            ))}
          </div>

        
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookDetails;
