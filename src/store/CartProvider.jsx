import { useContext, useReducer } from "react";
import { CartContext } from "./cart-context";
import { ADD, DECREASE, INCREASE, REMOVE } from "../constants/actionsType";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case INCREASE:
      const tempstate1 = state.map((item) => {
        if (item.id === action.id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      return tempstate1;
    case DECREASE:
      const tempstate2 = state.map((item) => {
        if (item.id === action.id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      return tempstate2;
    case REMOVE:
      const tempState = state.items.filter((item) => item.id !== action.id);
      return {
        items: tempState,
      };
    default:
      return initialState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: ADD, item });
  };


const incrementItemHandler = (item) => {
    dispatchCartAction({ type: INCREASE, item });
  };

  const decrementItemHandler = (item) => {
    dispatchCartAction({ type: DECREASE, item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: REMOVE, id });
  };

  const cartContext = {
    items: cartState.items,
    totalQty: cartState.totalAmount,
    addItem: addItemHandler,
    incrementItem: incrementItemHandler,
    decrementItem: decrementItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

// Custom hook
export const useGlobalContext = () => {
  return useContext(CartContext);
};
