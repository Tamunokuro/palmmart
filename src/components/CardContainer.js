import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../redux/cart/cart';
import CardItem from './Card';
// import cardItems from '../data/data.json';
import '../App.css';

function CardContainer() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length) return;
    dispatch(fetchCart());
  }, [dispatch, items.length]);

  return (
    <div className="cards--container">
      {items.length === 0 ? (<h3>Loading....</h3>) : (items.map((card) => (
        <CardItem
          key={card.id}
          image={card.image}
          title={card.title}
          text={card.text}
          price={card.price}
        />
      )))}
    </div>
  );
}

export default CardContainer;