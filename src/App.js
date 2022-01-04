import React, { useState, useEffect } from 'react';
import MovieList from './MovieList'
import getMovieData from './GetMovieData'

function App() {
  const [movies, setMovies] = useState({ hits: []});
  const lst = ['Blade Runner', 'Dune', 'Star Wars']

  var arr = []
    useEffect(async () => {
      for (var i = 0; i < lst.length; i++) {
        const data = await getMovieData(lst[i]);
        console.log(data['title'])
        arr.push(data['title'])
      };
      setMovies(arr)
  })
  // const [movies, setMovies] = useState([{id: 1, name: 'Blade Runner', year: '1982'}])
return (
  <>
    <MovieList movies={movies} />
  </>

)
}

export default App;
