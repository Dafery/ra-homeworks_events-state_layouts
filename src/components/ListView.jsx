import React from 'react';

import { ShopItem } from './ShopItem';

export const ListView = ({ items }) => {
  return (
    <ul className="list-view">
      {items.map((item) => (
        <ShopItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
