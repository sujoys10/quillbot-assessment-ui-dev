import React, { useEffect } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieDetails } from "../MovieDetails/MovieDetails";
import "./Gallery.css";

export const SIDEBAR_WIDTH = 250;
export const ContentPadding =  window.innerWidth > 768 ? 48 : 24;

const getContentWidth = () => {
  const contentWidth = window.innerWidth > 768 ? window.innerWidth - SIDEBAR_WIDTH - (ContentPadding * 2) : window.innerWidth - (ContentPadding * 2);
  return contentWidth;
}

const getRowSize = () => {
  const contentWidth = getContentWidth();
  if (contentWidth > 768) {
    return 5;
  }
  if (contentWidth > 600) {
    return 4;
  }
  return 3;
};

export const Gallery = ({ movies, galleryRef }) => {
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [rowSize, setRowSize] = React.useState(0);

  const getMovieRows = () => {
    const movieRows = [];
    let row = [];
    for (let i = 0; i < movies.length; i++) {
      row.push(movies[i]);
      if (row.length === rowSize) {
        movieRows.push(row);
        row = [];
      }
    }
    if (row.length > 0) {
      movieRows.push(row);
    }
    return movieRows;
  };

  useEffect(() => {
    const handleResize = () => {
      const newRowSize = getRowSize();
      setRowSize(newRowSize);

      const contentWidth = getContentWidth();
      if (galleryRef.current) {
        galleryRef.current.style.width = `${contentWidth}px`; // Dynamically set the width
      }

      const cardWidth = contentWidth / newRowSize;
      galleryRef.current.style.setProperty("--card-width", cardWidth + "px");
    };

    // Initialize row size on mount
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const movieRows = getMovieRows();

  if (movies.length === 0) {
    return <div className="movies">No movies found</div>;
  }

  return (
    <div className="movies">
      {movieRows.map((row, rowNum) => {
        return (
          <div key={rowNum} className="movies-row">
            {selectedMovie && rowNum === selectedMovie.rowNumber ? (
              <MovieDetails key={selectedMovie.Title} {...selectedMovie} />
            ) : null}
            <div className="movies-row-list">
              {row.map((movie, index) => {
                return (
                  <MovieCard
                    key={index}
                    {...movie}
                    onCick={() => {
                      if (selectedMovie?.imdbID === movie.imdbID) {
                        setSelectedMovie(null);
                      } else {
                        setSelectedMovie({ ...movie, rowNumber: rowNum });
                      }
                    }}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
