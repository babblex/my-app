import ListGroup from 'react-bootstrap/ListGroup';
import './MovieItem.css';

//const för att den inte är hämtad från bootstrap. 
const MovieItem = () => {
    return (
        <ListGroup.Item>
            <h3>Kommer kod</h3>
            <div>
                <img src="#" alt="kommer snart"/>
            </div>
        </ListGroup.Item>
    );
}

export default MovieItem;