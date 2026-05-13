import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddMovieForm() { //samma som att skriva const MovieCard = () => {} (antons ex kod)
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Titel:</Form.Label>
        <Form.Control placeholder="Titel här..."/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Betyg:</Form.Label>
        <Form.Select>
          <option>Välj betyg här...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Button variant="success">Spara film</Button>
      </Form.Group>
    </>
  );
}

export default AddMovieForm;