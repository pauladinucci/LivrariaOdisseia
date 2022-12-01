import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Card1 from '../../images/card1.png';
import './Card.css';

function CardInicio() {
  return (
    <Card className='card' style={{ width: '18rem' }}>
      <img
      src={Card1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardInicio;