import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { addToCart } from '../redux/cart/cart';

function CardItem({ card }) {
  const itemCount = useSelector((state) => state.cart.itemCount);
  const dispatch = useDispatch();

  const addItem = (id) => {
    const itemsCount = document.getElementById('item__counter');
    dispatch(addToCart(id));
    itemsCount.innerHTML = itemCount;
  };

  return (
    <Card style={{ width: '25rem', height: '30rem' }} className="card">
      <Card.Img variant="top" src={card.image} width={50} height={200} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <p>
          $
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
