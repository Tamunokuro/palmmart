import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Form, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { addToCart, updateQuantity } from '../redux/cart/cart';

function CardItem({ card }) {
  const itemCount = useSelector((state) => state.cart.itemCount);
  const dispatch = useDispatch();

  const handleQuantityChange = (event, id) => {
    const quantity = event.target.value;
    dispatch(updateQuantity(id, quantity));
  };

  const addItem = (id) => {
    const itemsCount = document.getElementById('item__counter');
    dispatch(addToCart(id));
    itemsCount.innerHTML = itemCount;
  };

  return (
    <Card style={{ width: '25rem', height: '30rem' }} className="card">
      <Card.Img variant="top" src={card.image} width={50} height={200} />
      <Card.Body>
        <Card.Title className="h4 fw-bold">{card.title}</Card.Title>
        <p className="h5 fw-bold">
          £
          {card.price}
        </p>
        <Form>
          <Row className="my-1">
            <Form.Group controlId={`quantitySelect-${card.id}`}>
              <Col xs={6}>
                <Form.Label className="h6 fw-bold">Quantity:</Form.Label>
              </Col>
              <Col xs={6}>
                <Form.Select onChange={(event) => handleQuantityChange(event, card.id)} width={25}>
                  {[...Array(card.stockCount)].map((_, index) => (
                    <option key={`option-${index + 1}`} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
          </Row>
        </Form>
        <Button variant="primary" onClick={() => addItem(card.id)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

CardItem.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    stockCount: PropTypes.number,
  }).isRequired,
};

export default CardItem;
