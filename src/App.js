import Movie from './components/Movie';
import MovieStyle from './components/Movie.style';
import movies from './movieDummy';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item)=> {
            return (
              <MovieStyle 
              title = {item.title}
              poster_path = {item.poster_path}
              vote_average = {item.vote_average}
              overview={item.overview}
              />
              )
          })
        }
      </div>
    </div>
  );
}

export default App;
