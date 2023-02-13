import { CartContext } from "./cart-context";

const CartProvider = ({ children }) => {
  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalQnt: 0,
    addItem: addItemHandler,
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
  
