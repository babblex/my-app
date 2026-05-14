// $npm run dev - för att öppna projektet i gitBash.

//Imports
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

  //Delete funktion som tar bort en film ur listan
  const deleteMovie = (movieIdToBeRemoved) => {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    //iterera igenom moviesList och kolla om filmens id vi är på inte är samma som den filmens ID vi ska ta bort, Om de inte är samma läggs de till i en ny array. Den som matchar tas inte med in i nya arrayen.  
    setMoviesList(moviesList.filter(movie => movie.id !== movieIdToBeRemoved));
  }

  //sort källor
  // 1. https://react.dev/learn/updating-objects-in-state#updating-a-nested-object
  // 2. localeCompare: https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them
  
  //funktion som sorterar moviesList på titel
  const sortByTitle = () => {
    //Skapa en kopia av listan så orginalet inte blir muterat sedan skicka in 2 objekt åt gången.
    let sortedByTitle = [...moviesList].sort((a,b) => {
      //sortera de två objekten på titel.
      return a.title.localeCompare(b.title);
    });

    //Uppdatera listan med nya sorteringen
    setMoviesList(sortedByTitle);
  }

  //funktion som sorterar moviesList på betyg
  const sortByGrade = () => {
    //Skapa en kopia av listan så orginalet inte blir muterat sedan skicka in 2 objekt åt gången.
    let sortedByGrade = [...moviesList].sort((a,b) => {
      //sortera de två objekten på grade så högst betyg kommer först
      return Number(b.grade) - Number(a.grade);
    });

    //Uppdatera listan med nya sorteringen
    setMoviesList(sortedByGrade);
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
          {/*Här skickar vi med listan med filmerna för utskrift på sidan och deleteMovie referens så vi kan radera filmer*/}
          <MovieList moviesList={moviesList} deleteMovie={deleteMovie}></MovieList>
          <SortButton sortOnClick={sortByTitle} text="Alfabetisk Ordning"></SortButton>
          <SortButton sortOnClick={sortByGrade} text="Betygsordning"></SortButton>
        </Col>
      </Row>     
    </Container>
  );
}

export default App;