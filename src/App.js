import React, { useState } from 'react';
import MovieList from './MovieList'
import GetMovieData from './GetMovieData'

function App() {
  const lst = ['Blade Runner', 'Dune', 'Star Wars']
  const [movies, setMovies] = useState([{id: 1, name: 'Blade Runner', year: '1948'}])
return (
  <>
    <MovieList movies={movies} />
  </>

)
}

export default App;
