import React from 'react';

export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  incrementItem: (item) => {},
  decrementItem: (item) => {},
  removeItem: (id) => {}
});

