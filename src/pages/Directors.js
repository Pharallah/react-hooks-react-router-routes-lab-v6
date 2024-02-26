import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"


function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(res => res.json())
      .then(data => setDirectors(data))
  }, [])
  
  // DISPLAY DIRECTORS
  const displayDirectors = directors.map(director => {
    
    //ITERATE THRU DIRECTOR MOVIES
    const displayMovies = director.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })
    
    return <article key={director.id}>
      <h2>{director.name}</h2>
      <ul>{displayMovies}</ul>
    </article>
  })


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {displayDirectors}
      </main>
    </>
  );
};

export default Directors;
