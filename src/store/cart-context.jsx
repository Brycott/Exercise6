import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: (item) => {},
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
