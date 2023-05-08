import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { addToCart } from '../redux/cart/cart';

function CardItem({ card }) {
  const dispatch = useDispatch();

  const addItem = (id) => {
    dispatch(addToCart(id));
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
  }).isRequired,
};

export default CardItem;
