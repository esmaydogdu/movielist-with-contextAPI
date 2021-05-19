import React, { useState, useContext } from 'react'
//since we imported a context, we should import the useContext from React
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  //here we will access the value in the MovieContext
  //and variable names can ofcourse be different than they are in the MovieProvider
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [movies, setMovies] = useContext(MovieContext)

  const addMovie = (e) => {
    e.preventDefault()
    setMovies([...movies, { name, price }])
  }
  const updateName = (e) => {
    setName(e.target.value)
  }
  const updatePrice = (e) => {
    setPrice(e.target.value)
  }
  return (
    <>
      <form onSubmit={addMovie}>
        <input value={name} onChange={updateName} placeholder='enter name' />
        <input value={price} onChange={updatePrice} placeholder='enter price' />
        <button type='submit'>Add Movie</button>
      </form>
    </>
  )
}

export default AddMovie;