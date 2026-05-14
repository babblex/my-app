import ListGroup from 'react-bootstrap/ListGroup';
import MovieListItem from '../MovieListItem/MovieListItem';

//Tar emot props från App.jsx
function MovieList(props) {
  return (
    <ListGroup>
        {/*Loopa igenom listan med filmer och för varje film skickar vi den in i MovieItem + MovieList blir mellanhand för deletefunktionen som ska användas i barnet MovieListItem*/}
        {props.moviesList.map(movie => <MovieListItem key={movie.id} movie={movie} deleteMovie={props.deleteMovie} />)}
    </ListGroup>
  );
}

export default MovieList;