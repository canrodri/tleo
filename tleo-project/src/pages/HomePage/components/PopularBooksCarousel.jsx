import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

function PopularBooksCarousel() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Llamada a la API de Google Books
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=bestsellers")
      .then((response) => {
        setBooks(response.data.items || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    prevArrow: <button className="slick-prev">{"<"}</button>, // Personaliza la flecha
    nextArrow: <button className="slick-next">{">"}</button>, // Personaliza la flecha
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-img-wrapper">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                  className="book-img"
                />
              </div>
              <h4 className="book-title">{book.volumeInfo.title}</h4>
              <p className="book-authors">{book.volumeInfo.authors?.join(", ")}</p>
            </div>
          ))
        ) : (
          <p>Cargando libros...</p>
        )}
      </Slider>
    </div>
  );
}

export default PopularBooksCarousel;

