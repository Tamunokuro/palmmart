import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../redux/cart/cart';
import CardItem from './Card';
import Footer from './Footer';
import '../App.css';

function CardContainer() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length) return;
    dispatch(fetchCart());
  }, [dispatch, items]);

  return (
    <>
      <div className="cards--container">
        {items.length === 0 ? (<h3>Loading....</h3>) : (items.map((card) => (
          <CardItem
            key={card.id}
            card={card}
          />
        )))}
      </div>
      <Footer />
    </>
  );
}

export default CardContainer;
