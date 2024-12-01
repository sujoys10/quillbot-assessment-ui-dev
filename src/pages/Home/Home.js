import React, { useRef } from "react";
import movies from "./data.json";
import { Searchbox } from "../../components/Searchbox/Searchbox";
import { Gallery } from "../../components/Gallery/Gallery";
import "./Home.css";

export const Home = () => {
  const galleryRef = useRef(null);
  const [filteredMovies, setFilteredMovies] = React.useState(movies);

  const handleSearchTermChange = (searchTerm) => {
    const filteredMovies = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(searchTerm)
    );
    setFilteredMovies(filteredMovies);
  };

  return (
    <div className="content" ref={galleryRef}>
      <div className="content-header">
        <Searchbox onChange={handleSearchTermChange} />
      </div>
      <Gallery movies={filteredMovies} galleryRef={galleryRef} />
    </div>
  );
};
