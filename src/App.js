// 1. Create a card view to show movies
// 2. Each movie should have movie name, rating, released date
// 3. Create a simple JSON for movies data. Minimum 20 movies required.
// 4. Create a simple API in NodeJS to read data from JSON source
// 5. Integrate your React app with the NodeJS API.
// 6. Use React router in wherever possible here.
// 7. Application UI should be clean and simple.
import React from "react";
import "./App.scss";
import { useState, useEffect } from "react";
import MovieCard from "./components/movies/MovieCard";

export default function App() {
  const [moviesList, setMoviesList] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/getMovies");
      const moviesData = await response.json();
      setMoviesList(moviesData.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="main-container">
      <ul className="movies-container">
        {moviesList.map((each) => (
          <MovieCard details={each} key={each._id} />
        ))}
      </ul>
    </div>
  );
}
