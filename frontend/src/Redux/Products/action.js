//Write the API calling functions here;
import axios from "axios";
import * as types from "./actionTypes";

export const getData = (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
    .get(`http://localhost:5000/api/v1/products`)
    .then((res) => {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.GET_PRODUCTS_FAILURE });
    });
};
export const getSingleData = (params) => (dispatch) => {
  dispatch({ type: types.GET_SINGLE_PRODUCTS_REQUEST });
  return axios
    .get(`/api/v1/products/${params}`)
    .then((res) => {
      dispatch({
        type: types.GET_SINGLE_PRODUCTS_SUCCESS,
        payload: res.data.product,
      });
    })
    .catch(() => {
      dispatch({ type: types.GET_SINGLE_PRODUCTS_FAILURE });
    });
};
export const addToCart = (params) => (dispatch) => {
  dispatch({ type: types.ADD_TO_CART_REQUEST });
  return axios
    .post("/api/v1/cart", params)
    .then((res) => {
      dispatch({ type: types.ADD_TO_CART_SUCCESS });
    })
    .catch((err) => {
      dispatch({
        type: types.ADD_TO_CART_FAILURE,
        payload: err.response.data.msg,
      });
    });
};

export const getCartItem = (dispatch) => {
  dispatch({ type: types.GET_CART_REQUEST });
  return axios
    .get(`/api/v1/cart`)
    .then((res) => {
      dispatch({ type: types.GET_CART_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.GET_CART_FAILURE });
    });
};

export const updateCartItem = (params) => (dispatch) => {
  dispatch({ type: types.EDIT_CART_REQUEST });
  return axios
    .patch(`/api/v1/cart/${params.productId}`, { quantity: params.quantity })
    .then((res) => {
      dispatch({ type: types.EDIT_CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: types.EDIT_CART_FAILURE,
        payload: err.response.data.msg,
      });
    });
};

export const deleteCartItem = (params) => (dispatch) => {
  console.log(params);
  dispatch({ type: types.DELETE_CART_REQUEST });
  return axios
    .delete(`/api/v1/cart/${params.id}`)
    .then(() => {
      dispatch({ type: types.DELETE_CART_SUCCESS });
    })
    .catch(() => dispatch({ type: types.DELETE_PRODUCT_FAILURE }));
};

export const placeOrder = (params) => (dispatch) => {
  console.log(params);
  dispatch({ type: types.PLACE_ORDER_REQUEST });
  return axios
    .post(`/api/v1/order`)
    .then(() => {
      dispatch({ type: types.PLACE_ORDER_SUCCESS });
    })
    .catch(() => dispatch({ type: types.PLACE_ORDER_FAILURE }));
};

export const getAllOrder = (dispatch) => {
  dispatch({ type: types.GET_ORDER_REQUEST });
  return axios
    .get(`/api/v1/order`)
    .then((res) => {
      dispatch({ type: types.GET_ORDER_SUCCESS, payload: res.data.allOrders });
    })
    .catch(() => {
      dispatch({ type: types.GET_ORDER_FAILURE });
    });
};

// export const addToCart = (id, params) => (dispatch) => {
//   dispatch({ type: types.EDIT_PRODUCT_REQUEST });
//   return axios
//     .patch(`http://localhost:5000/products/${id}`, params)
//     .then(() => {
//       dispatch({ type: types.EDIT_PRODUCT_SUCCESS });
//     })
//     .catch(() => dispatch({ type: types.EDIT_PRODUCT_FAILURE }));
// };
