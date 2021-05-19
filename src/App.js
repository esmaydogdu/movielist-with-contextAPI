import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
//import the provider where this wrapping is because it is the component
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

//here we know the Nav and MovieList has access to the data in MovieProvider
function App() {
  return (
    <MovieProvider>
      <div className="App">
        {/* wrapping like this: info in movieprovider is available for nav and movielist */}
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
