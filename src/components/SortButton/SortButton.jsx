import Button from 'react-bootstrap/Button';

function SortButton({text}) {
    const handleSortClick = () => {
        {/*Kod för att hantera sortering */}
    }    
  return (
    <>
      <Button variant="primary" onClick={handleSortClick}>{text}</Button>
    </>
  );
}

export default SortButton;