import ListGroup from 'react-bootstrap/ListGroup';
import './MovieListItem.css';

//Importera bilder
import starIcon from '../../assets/star.png'
import deleteIcon from '../../assets/delete.png'

//const för att den inte är hämtad från bootstrap. 
const MovieListItem = (props) => {

    //funktion som genererar antalet stjärnor baserat på grade numret
    const generateStars = () => {
        //skapa en tom lista
        let numberOfStars = [];

        //loopa igenom grade och lägg till <img> element baserat på grade.
        for (let i=0; i < Number(props.movie.grade); i++) {
            //react gnäller och vill ha key i arrayer även om det inte har ett egentligt syfte här :(
            numberOfStars.push(<img key={i} src={starIcon} alt="star"/>);
        }
        //returnerar stjärnorna till diven med bilder
        return numberOfStars
    }

    //funktion som hanterar klick på deleteikonen  
    const handleDelete = () => {
        //Skicka upp filmens id för radering i App.jsx
        props.deleteMovie(props.movie.id);
    }

    
    return (
        <ListGroup.Item className='list-item'>
            <h3>{props.movie.title}</h3>
            <div>
                {/*hämta antalet stjärnor*/}
                {generateStars()}
                <img onClick={handleDelete} src={deleteIcon} alt="delete"/>
            </div>
        </ListGroup.Item>
    );
}

export default MovieListItem;