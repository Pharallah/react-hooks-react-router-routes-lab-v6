import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [currentMovie, setCurrentMovie] = useState({})
  const [genres, setGenres] = useState([])
  const params = useParams();
  const movieId = params.id

  // UTILIZE URL PARAMS
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(res => res.json())
      .then(data => {
        setCurrentMovie(data)
        setGenres(data.genres)
      })
      .catch(error => console.log(error))
  }, [movieId])

  // ITERATE THRU GENRES STATE
  const displayGenres = genres.map(genre => {
    return <span key={genre}>{genre}</span>
  })
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{currentMovie.title}</h1>
        <p>Runtime: {currentMovie.time} minutes</p>
        {displayGenres}
      </main>
    </>
  );
};

export default Movie;
