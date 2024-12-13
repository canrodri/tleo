import React from 'react';

const GenreCard = ({ genre }) => {
  return (
    <div className="genre-card">
      <img src={genre.imageUrl} alt={genre.name} />
      <div className="genre-title">{genre.name}</div>
    </div>
  );
};

export default GenreCard;
