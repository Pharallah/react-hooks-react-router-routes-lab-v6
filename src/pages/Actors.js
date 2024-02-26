import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"


function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then(res => res.json())
      .then(data => setActors(data))
  }, [])

  // DISPLAY ACTORS
  const displayActors = actors.map(actor => {
    
    //ITERATE THRU ACTOR MOVIES
    const displayMovies = actor.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })

    return <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>{displayMovies}</ul>
    </article>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {displayActors}
      </main>
    </>
  );
};

export default Actors;
