import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";

import "../styles/pages/movie.sass";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieURL);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="infor">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{movie.revenue}</p>
          </div>

          <div className="infor">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{movie.revenue} minutos</p>
          </div>

          <div className="infor">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime}</p>
          </div>

          <div className="infor">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
