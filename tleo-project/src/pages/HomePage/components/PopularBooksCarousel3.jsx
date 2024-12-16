import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";

function PopularBooksCarousel() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=free-ebooks")
      .then((response) => setBooks(response.data.items || []))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-card">
              <Link to={`/book/${book.id}`}>
                <div className="book-img-wrapper">
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                    className="book-img"
                  />
                </div>
                <h4 className="book-title">{book.volumeInfo.title}</h4>
                <p className="book-authors">{book.volumeInfo.authors?.join(", ")}</p>
              </Link>
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