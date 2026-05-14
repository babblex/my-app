import Button from 'react-bootstrap/Button';

function SortButton({text, sortOnClick }) {
  //Vi tar emot sortOnClick funktionen som kopplar ihop aktuell sorteringsfunktion i App.jsx beroendes på vilken knapp som klickades på.
  return (
    <>
    {/* className="me-3" ger marginal mellan knapparna: https://getbootstrap.com/docs/5.1/utilities/spacing/*/}
      <Button variant="primary" onClick={sortOnClick} className="me-3">{text}</Button>
    </>
  );
}

export default SortButton;