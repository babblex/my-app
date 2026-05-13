import './MovieList.css';
import ListGroup from 'react-bootstrap/ListGroup';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
  return (
    <ListGroup>
        {/*  Exempel på hur list item kmr se ut med innehåll.
        <ListGroup.Item>{movies.map(movie => <MovieCard movie={movie} />)}</ListGroup.Item>
        ...
      */}
      <MovieItem></MovieItem>
    </ListGroup>
  );
}

export default MovieList;