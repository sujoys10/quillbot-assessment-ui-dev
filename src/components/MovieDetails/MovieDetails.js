import React from "react";
import { RatingBar } from "./RatingBar";
import "./MovieDetails.css";

export function MovieDetails({ Poster, Title, imdbRating }) {
  const movieDetailsRef = React.useRef(null);

  React.useEffect(() => {
    movieDetailsRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="movie-details" ref={movieDetailsRef}>
      <img src={Poster} alt={Title} className="movie-poster" />
      <div className="movie-info">
        <h2>{Title}</h2>
        <RatingBar imdbRating={imdbRating} />
        <ul className="movie-meta">
          <li>
            <strong>Year:</strong> 2021
          </li>
          <li>
            <strong>Running Time:</strong> 115 Min
          </li>
          <li>
            <strong>Directed by:</strong> Shawn Levy
          </li>
          <li>
            <strong>Language:</strong> English
          </li>
        </ul>
        <p className="movie-description">
          Guy is a non-player character (NPC) in Free City, a massively
          multiplayer online role-playing video game (MMORPG) developed by
          Soonami Studio.
        </p>
        <div className="action-btns">
          <button className="play-button">Play Movie</button>
          <button className="trailer-button">Watch Trailer</button>
        </div>
      </div>
    </div>
  );
}
