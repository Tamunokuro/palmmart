import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { removeFromCart } from '../redux/cart/cart';

function MyCart() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.mycart);

  return (
    <div className="cards--container">
      {item.length === 0 ? (<h5><i>YOUR CART IS EMPTY</i></h5>) : (item.map((card) => (
        <Card key={card.id} style={{ width: '25rem', height: '30rem' }} className="card">
          <Card.Img variant="top" src={card.image} width={50} height={200} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <p>
              $
              {card.price}
            </p>
            <Button variant="primary" onClick={() => dispatch(removeFromCart(card.id))}>Remove from Cart</Button>
          </Card.Body>
        </Card>
      )))}
    </div>
  );
}

export default MyCart;
