import React, { useState, useContext } from 'react'
import Movie from './Movie';
//since we imported a context, we should import the useContext from React
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  //here we will access the value in the MovieContext
  //and variable names can ofcourse be different than they are in the MovieProvider
  const [movies, setMovies] = useContext(MovieContext)
  
  return (
    <>
      {
        movies.map(movie => (
          <Movie name={movie.name} price={movie.price} key={movie.id} />
        ))
      }

    </>
  )
}

export default MovieList;