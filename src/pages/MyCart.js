import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { removeFromCart } from '../redux/cart/cart';

function MyCart() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.mycart);

  const calculateTotalPrice = () => {
    const cartTotal = item.reduce((total, item) => total + item.price, 0);
    return cartTotal.toFixed(2);
  };

  return (
    <div className="cart--container">
      <div className="text-end p-3">
        <span>
          Total Price:
          <span className="fw-bold h5"> £</span>
          <span id="total-price" className="fw-bold h5">{calculateTotalPrice()}</span>
        </span>
        <br />
        <a role="button" target="_blank" href="www" className="btn btn-success fw-bold p-3" type="button">Checkout</a>
      </div>
      <div className="cards--container">
        {item.length === 0 ? (
          <div className="container text-center">
            <h5>YOUR CART IS EMPTY</h5>
            <h5><Link to="/">Continue Shopping</Link></h5>
            {' '}

          </div>
        ) : (item.map((card) => (
          <Card key={card.id} style={{ width: '25rem', height: '30rem' }} className="card border-0">
            <Card.Img variant="top" src={card.image} width={50} height={200} />
            <Card.Body>
              <Card.Title className="h4 fw-bold">{card.title}</Card.Title>
              <p className="h5 fw-bold">
                £
                {card.price}
              </p>
              <Button variant="primary" onClick={() => dispatch(removeFromCart(card.id))}>Remove from Cart</Button>
            </Card.Body>
          </Card>
        )))}
      </div>
    </div>
  );
}

export default MyCart;
