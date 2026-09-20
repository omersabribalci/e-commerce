import {
  SET_ADDRESS,
  SET_CART,
  SET_PAYMENT,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

/* cart: {Object Array} will keep products are being bought
  [
      {  count: 1, product: { id: “1235”, … }  },
      {  count: 3, product: { id: “1236”, … }  },
  ]
*/

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};
