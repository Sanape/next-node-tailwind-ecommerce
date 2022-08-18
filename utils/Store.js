import { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';

// @ts-ignore
export const Store = createContext();

const initialState = {
  cart: Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart'))
    : { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload; //recibo el item con la cantidad
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      ); //busca si ya esta en el carrito
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          ) //entre los item del carrito busca el item en cuestion para reemplazarlo con el nuevo, que tiene la cantidad actualizada
        : [...state.cart.cartItems, newItem]; //si no existe entre los elemetos lo agrega
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const newItem = action.payload;
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== newItem.slug
      );
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
