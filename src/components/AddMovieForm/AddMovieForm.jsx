import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

//Tar emot props från App.jsx så vi kan skicka tillbaka datan senare
function AddMovieForm(props) { //samma som att skriva const MovieCard = () => {} (antons ex kod)
  
    const [movieTitle, setMovieTitle] = useState("");
    const [movieGrade, setMovieGrade] = useState("0");

    //Funktion som genererar ett id för varje film så det ska bli enklare att skriva ut sen, iom listan inte är static skulle man undvika key=index enligt react dokumentation.
    //Tog inspo här:https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
    const generateAnId = () => {
        return crypto.randomUUID()
    }

    //funktion som validerar användarinput och skapar ett nytt filmobjekt 
    const handleSubmit = (e) => {

        //inte skicka vidare datan i formuläret.
        e.preventDefault();

        //Validering av input, att de inte är tom eller 0
        if ((movieTitle.trim() !== "") && (movieGrade !== "0")) {
            const newMovie = {
                "id": generateAnId(),
                "title": movieTitle,
                "grade": movieGrade
            };

            //Skicka upp datan till App.jsx
            props.addNewMovie(newMovie);

            //Nollställa formulären igen
            setMovieTitle("");
            setMovieGrade("0");

        } else {
            alert("Du måste ange Titel & Betyg");
        }
    }
  
    return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Titel:</Form.Label>
        <Form.Control 
            placeholder="Titel här..."
            value={movieTitle}
            onChange={e => setMovieTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Betyg:</Form.Label>
        <Form.Select
            value={movieGrade}
            onChange={e => setMovieGrade(e.target.value)}
        >
          <option value="0">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Button variant="success" onClick={handleSubmit}>Spara film</Button>
      </Form.Group>
    </>
  );
}

export default AddMovieForm;