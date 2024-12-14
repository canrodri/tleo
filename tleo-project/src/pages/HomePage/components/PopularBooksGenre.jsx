import React from "react";
import GenreCard from "./GenreCard"; // Importamos el componente de la tarjeta de género

const genres = [
  { name: "Acción", imageUrl: "https://plus.unsplash.com/premium_photo-1661964069634-2f493e28a14c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Romántico", imageUrl: "https://plus.unsplash.com/premium_photo-1676667573109-273586405c96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Terror", imageUrl: "https://plus.unsplash.com/premium_photo-1675040022907-33cc22325b7a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Intriga", imageUrl: "https://images.unsplash.com/photo-1527918889398-64e15d328ff0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Sci-Fi", imageUrl: "https://plus.unsplash.com/premium_photo-1682124707418-3b5caef3c999?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Fantasía", imageUrl: "https://plus.unsplash.com/premium_photo-1731286446759-fe418c63b75d?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Policíaco", imageUrl: "https://plus.unsplash.com/premium_photo-1687157829884-fae305709c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Histórico", imageUrl: "https://images.unsplash.com/photo-1584619148084-a481b22b78ac?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  // Más géneros aquí
];

const PopularBooksGenre = () => {
  return (
    <div className="grid-container">
      {genres.map((genre) => (
        <GenreCard key={genre.name} genre={genre} />
      ))}
    </div>
  );
};

export default PopularBooksGenre;
