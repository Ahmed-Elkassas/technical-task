import React from 'react';

export const CartContext = React.createContext({
  items: [],
  totalQnt: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

