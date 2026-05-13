// $npm run dev - för att öppna projektet i gitBash.

//Imports
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddMovieForm from './components/AddMovieForm/AddMovieForm';
import MovieList from './components/MovieList/Movielist';
import SortButton from './components/SortButton/SortButton'; 

//Byggt med bootstrap
const App =() => {
  return (
    <Container>
      {/* rad 1 */}
      <Row>
        <Col>
          <h1>Min Filmlista</h1>
        </Col>
      </Row>
      {/* rad 2 */}
      <Row>
        <Col>
          <h2> Lägg till en film</h2>
          <hr/>
          <AddMovieForm></AddMovieForm>
        </Col>
      </Row>
      {/* rad 3 */}
      <Row>
        <Col>
          <h2>Inlagda filmer</h2>
          <MovieList></MovieList>
          <SortButton text="Alfabetisk Ordning"></SortButton>
          <SortButton text="Betygsordning"></SortButton>
        </Col>
      </Row>     
    </Container>
  );
}

export default App;