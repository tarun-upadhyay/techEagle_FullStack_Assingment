import React, { Suspense, useEffect, } from "react";
import CartComponent from "./CartComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  getCartItem,
  updateCartItem,
  placeOrder,
} from "../../Redux/Products/action";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const storeContext = useSelector((store) => store.AppReducer);
const navigate = useNavigate()
  useEffect(() => {
    dispatch(getCartItem);
  }, [dispatch]);
  const increaseItem = (productId, quantity) => {
    dispatch(updateCartItem({ productId, quantity })).then(() =>
      dispatch(getCartItem)
    );
  };
  const decreaseItem = (productId, quantity) => {
    dispatch(updateCartItem({ productId, quantity })).then(() =>
      dispatch(getCartItem)
    );
  };
  const deleteItem = (id) => {
    dispatch(deleteCartItem({ id })).then(() => dispatch(getCartItem));
  };
  const makePlaceOrder = () => {
    dispatch(placeOrder()).then(() => dispatch(getCartItem)).then(()=> navigate("/order"));
  };

  return (
    <div className="my-36">
      {storeContext.isLoding ? (
        <div className="w-1/2 mx-auto">
          <Skeleton count={15} />
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="mx-auto w-1/2">
              <Skeleton height={350} />
              <Skeleton count={3} />
            </div>
          }
        >
          <CartComponent
            cartItems={storeContext.cartItem}
            increaseItem={increaseItem}
            decreaseItem={decreaseItem}
            deleteItem={deleteItem}
            makePlaceOrder={makePlaceOrder}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Cart;
