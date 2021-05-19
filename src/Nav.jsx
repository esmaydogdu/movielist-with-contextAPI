import "./Nav.css";
import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'


const Nav = () => {
  //here i didnt import the setmovie function since we are not supposed to edit anything in movies in here
  //read only
  const [movies] = useContext(MovieContext)
  return (
    <header>
      <h3>esma</h3>
      <p>Total Movies: {movies.length}</p>
    </header>
  )
}


export default Nav