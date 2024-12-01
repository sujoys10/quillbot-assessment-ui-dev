import React from 'react';
import './MovieCard.css';

export function MovieCard(props) {
  const { onCick, ...rest } = props;
  return (
    <div className="movie-card" onClick={() => onCick(rest)}>
      <img src={rest.Poster} alt={rest.Title} className="movie-poster" />
      <p>{rest.Title}</p>
      <div className="movie-actions">
        <button>▶️</button>
        <button>+</button>
      </div>
    </div>
  );
}

