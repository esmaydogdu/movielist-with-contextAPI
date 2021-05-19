import React, {useState, createContext} from 'react'


//initiate-create the context outside of the component
//whenever we will want to use information in MovieProvider we will import MovieContext
//import this to actually USE the data
export const MovieContext = createContext();

//out component name is moviePROVIDER
//it is a one time thing we need to do 
//we need to wrap this MovieProvider around all the components that we wanna give this state
//duty of movieProvider component: hold the info, pass it down to the components 
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "mr nobody",
      price: "$10",
      id: 1234,
    },
    {
      name: "pulp fiction",
      price: "$15",
      id: 1235,
    },
    {
      name: "forrest gump",
      price: "$19",
      id: 1236,
    },
    {
      name: "truman show",
      price: "$19",
      id: 1237,
    },
  ]);
  return (
    //render the MovieContext here
    //you will get en error if you use value={movies} as
    // Objects are not valid as a React child (found: object with keys {name, price, id}). If you meant to render a collection of children, use an array instead.
    <MovieContext.Provider value={[movies, setMovies]}>
      {/*here we are going to render all the components in between
        you can write <Nav/> and <MovieList/> in here
        but you can also write {props.children}
      */}
      {props.children}
    </MovieContext.Provider>
  );
}