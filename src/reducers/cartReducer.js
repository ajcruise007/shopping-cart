export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart
          .map((cartItem) => {
            if (cartItem.id === action.payload.id) {
              return { ...cartItem, qty: action.payload.qty };
            } else {
              return cartItem;
            }
          })
          .filter((cartItem) => cartItem.qty > 0),
      };
    default:
      break;
  }
};
