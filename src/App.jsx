// $npm run dev - för att öppna projektet i gitBash.

//Imports
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddMovieForm from './components/AddMovieForm/AddMovieForm';
import MovieList from './components/MovieList/Movielist';
import SortButton from './components/SortButton/SortButton'; 
import { useState } from 'react';

//Byggt med bootstrap
const App =() => {

  //Lägg en tom lista i variablen moviesList
  const [moviesList, setMoviesList] = useState([]);
  
  //funktion som hanterar vad som ska hända när en ny film från formuläret kommer in
  const handleANewMovie = (newMovie) => { //newMovie är propsen som tas emot från barnet d.v.s. objektet med ny filmdata vi skapade i barnet
    //Ta hela gamla listan och lägg i moviesList och lägg newMovie sist i listan.
    setMoviesList([...moviesList, newMovie])
    // ... = https://www.w3schools.com/howto/howto_js_spread_operator.asp
  }

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
          {/* addNewMovie blir namnet på funktionen i barnet som refererar till handleANewMovie som tar emot props från barnet*/}
          <AddMovieForm addNewMovie={handleANewMovie}></AddMovieForm> 
        </Col>
      </Row>
      {/* rad 3 */}
      <Row>
        <Col>
          <h2>Inlagda filmer</h2>
          {/*Här skickar vi med listan med filmerna så att vi kan skriva ut den på sidan*/}
          <MovieList moviesList={moviesList}></MovieList>
          <SortButton text="Alfabetisk Ordning"></SortButton>
          <SortButton text="Betygsordning"></SortButton>
        </Col>
      </Row>     
    </Container>
  );
}

export default App;