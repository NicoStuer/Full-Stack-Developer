import { GET_DETAILS, GET_PRODUCTS } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        selectedProduct: payload,
      };
    default:
      return state;
  }
};
