import React from 'react';

import { ShopCard } from './ShopCard';

export const CardsView = ({ cards }) => {
  return (
    <ul className="cards-view">
      {cards.map((card) => (
        <ShopCard key={card.id} {...card} />
      ))}
    </ul>
  );
};
