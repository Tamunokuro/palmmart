import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { addToCart } from '../redux/cart/cart';

function CardItem(props) {
  const {
    id,
    image, title, price,
  } = props;

  const itemCount = useSelector((state) => state.cart.itemCount);
  const dispatch = useDispatch();

  const addItem = () => {
    const itemsCount = document.getElementById('item__counter');
    dispatch(addToCart());
    itemsCount.innerHTML = itemCount;
  };

  return (
    <Card style={{ width: '25rem', height: '30rem' }} className="card">
      <Card.Img variant="top" src={image} width={50} height={200} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>
          $
          {price}
        </p>
        <Button variant="primary" onClick={() => addItem(id)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardItem;
