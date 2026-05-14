import ListGroup from 'react-bootstrap/ListGroup';
import './MovieListItem.css';

//const för att den inte är hämtad från bootstrap. 
const MovieListItem = (props) => {
    return (
        <ListGroup.Item>
            <h3>{props.moive.title}</h3>
            <div>
                <img src="#" alt={props.moive.title}/>
            </div>
        </ListGroup.Item>
    );
}

export default MovieListItem;