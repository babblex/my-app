import './MovieList.css';
import ListGroup from 'react-bootstrap/ListGroup';
import MovieListItem from '../MovieListItem/MovieListItem';

//Tar emot props från App.jsx
function MovieList(props) {
  return (
    <ListGroup>
        {/*Loopa igenom listan med filmer och för varje film skickar vi den in i MovieItem*/}
        {props.moviesList.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
    </ListGroup>
  );
}

export default MovieList;