import * as types from "./actionTypes";
const initialState = {
  products: [],
  singleProduct: null,
  isLoading: false,
  isError: false,
  cartItem: [],
  errorMessage: "",
  isCartError: false,
  cartTotalPrice: 0,
  orderedProduct: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        isError: false,
        isLoading: false,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case types.GET_SINGLE_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_SINGLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        singleProduct: payload,
        isError: false,
        isLoading: false,
        errorMessage: "",
      };
    case types.GET_SINGLE_PRODUCTS_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case types.ADD_TO_CART_REQUEST:
      return {
        ...state,
      };
    case types.ADD_TO_CART_SUCCESS:
      state.errorMessage = "";
      return {
        ...state,
        errorMessage: "Added Successfully",
        isLoading: false,
      };
    case types.ADD_TO_CART_FAILURE:
      state.errorMessage = "";
      return {
        ...state,
        isCartError: true,
        isLoading: false,
        errorMessage: payload,
      };
    case types.GET_CART_REQUEST:
      return {
        ...state,
        errorMessage: "",
        isLoading: true,
      };
    case types.GET_CART_SUCCESS:
      return {
        ...state,
        cartItem: [...payload.cartItems],
        isError: false,
        isLoading: false,
        cartTotalPrice: payload.totalPrice,
        errorMessage: "",
      };
    case types.GET_CART_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case types.EDIT_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.EDIT_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.EDIT_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case types.DELETE_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.DELETE_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.DELETE_CART_FAILURE:
      return {
        ...state,
        isError: true,
      };

    case types.GET_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ORDER_SUCCESS:
      return {
        ...state,
        orderedProduct: payload,
        isError: false,
        isLoading: false,
      };
    case types.GET_ORDER_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case types.EDIT_PRODUCT_FAILURE:
      return state;
    default:
      return state;
  }
};
