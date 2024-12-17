import React from "react";
import { Link } from "react-router-dom";

const GenreCard = ({ genre }) => {
  return (
    <div className="genre-card">
      {/* Asegurándote de mantener los estilos del contenedor */}
      <Link 
        to={`/genre/${genre.name.toLowerCase()}`} 
        className="genre-link" // Esto asegura que el enlace no interfiera con los estilos
      >
        <img 
          src={genre.imageUrl} 
          alt={genre.name} 
          className="genre-image" // Aquí también podemos añadir una clase específica si deseas dar más estilo a la imagen
        />
        <h3 className="genre-title">{genre.name}</h3> {/* No cambies los estilos del título */}
      </Link>
    </div>
  );
};

export default GenreCard;
