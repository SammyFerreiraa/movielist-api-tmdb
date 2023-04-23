import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import "../styles/pages/moviegrid.sass"

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${movieURL}popular?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Home;
