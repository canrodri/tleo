import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Carga el archivo JSON
        const response = await axios.get("/data.json");
        const userFromJson = response.data.user;

        // buscamos al usuario
        if (userFromJson.email === "pepe@example.com") {
          setUserData(userFromJson);
        } else {
          setError("Usuario no encontrado.");
        }
      } catch (err) {
        console.error("Error al cargar el archivo JSON:", err);
        setError("Error al cargar los datos del usuario.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Cargando datos del usuario...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const settings = {
    infinite: true,
    slidesToShow: 3, 
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    prevArrow: <button className="prev-arrow">Prev</button>,
    nextArrow: <button className="next-arrow">Next</button>,
  };

  return (
    <div>
      <Header />
      <div style={{ padding: "50px", backgroundColor: "#f9f9f9" }}>
        <div className="formulario-especifico">
       
          <img 
          src="https://img.freepik.com/vector-gratis/hombre-estudiando-leccion-ilustracion-aislado_24911-115021.jpg?t=st=1734635265~exp=1734638865~hmac=5d99e9e78e2b59e5d50b02ff03af49c208998baf00e1ed90da2da8eee7907fd0&w=740"
          style={{ 
            width: "150px", 
            height: "150px", 
            objectFit: "cover",
            borderRadius:"50%" 
            }}/>
             <h2>Perfil de Usuario</h2>
          {userData && (
            <>
              <p>
                <strong>Nombre:</strong> {userData.name} {userData.lastName}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
            </>
          )}
        </div>

        {/* Libros leídos */}
        <div className="carousel-libros">
          <h1>Libros Leídos</h1>
          <Slider {...settings}>
            {userData.booksRead.map((book, index) => (
              <div className="book-card" key={index}>
                <div className="book-img-wrapper">
                  <img
                    src={book.coverImage}
                    className="book-img"
                    alt={book.title}
                  />
                </div>
                <div className="card-body">
                  <h4 className="book-title">{book.title}</h4>
                  <p className="book-authors">{book.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Libros por leer */}
        <div className="carousel-libros">
          <h1>Libros por Leer</h1>
          <Slider {...settings}>
            {userData.booksToRead.map((book, index) => (
              <div className="book-card" key={index}>
                <div className="book-img-wrapper">
                  <img
                    src={book.coverImage}
                    className="book-img"
                    alt={book.title}
                  />
                </div>
                <div className="card-body">
                  <h4 className="book-title">{book.title}</h4>
                  <p className="book-authors">{book.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
