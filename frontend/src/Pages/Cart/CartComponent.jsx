import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartComponent = ({
  cartItems,
  increaseItem,
  decreaseItem,
  deleteItem,
  decValue,
  makePlaceOrder,
}) => {
  const storeContext = useSelector((store) => store.AppReducer);

  return (
    <div className="mx-auto max-w-2xl w-[90%]">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="h-[50vh] bg-white flex flex-col md:flex-row items-center justify-center round">
          {" "}
          <img
            src="https://png.pngtree.com/png-vector/20230424/ourmid/pngtree-oops-text-in-speech-bubble-style-vector-png-image_256294.png"
            alt="oopsimg"
          />
          <p className="text-2xl font-bold font-poppins">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="bg-white p-8 rounded-2xl">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row space-y-5 items-start border-b border-gray-300 py-2 mt-1 justify-center items-center"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-[100%] md:w-48 h-48 object-cover mr-4 rounded-lg"
                />
                <div className="flex-1">
                  <p className="font-semibold text-xl uppercase">
                    {item.product.name}
                  </p>
                  <p className="my-2 text-dash font-bold">
                    Price: Rs {item.product.price}
                  </p>

                  <div className="flex items-center mt-2 gap-2">
                    <button
                      onClick={() => decreaseItem(item._id, item.quantity - 1)}
                      value={decValue}
                      className={`bg-gray-200 rounded-full px-2 py-1 mr-2 ${
                        item.quantity == 1 ? "cursor-not-allowed" : ""
                      } `}
                      disabled={item.quantity == 1}
                    >
                      -
                    </button>
                    {storeContext.isLoading ? (
                      <div className="flex justify-center items-center mt-8">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"></div>
                      </div>
                    ) : (
                      <span className="mr-2">{item.quantity}</span>
                    )}

                    <button
                      onClick={() => increaseItem(item._id, item.quantity + 1)}
                      value={decValue}
                      className="bg-gray-200 rounded-full px-2 py-1 mr-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => deleteItem(item._id)}
                      className="text-red-500 hover:text-red-600 border p-2 rounded shadow-2xl bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 p-10 my-2 rounded-xl font-poppins">
            <h2 className="text-2xl font-bold mb-4 ">Place Order</h2>
            <p className="text-xl text-blue-600 font-bold">
              Total Price : Rs {storeContext.cartTotalPrice}
            </p>
            <button
              className="inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 text-white bg-black  hover:bg-black/80  mt-2"
              onClick={() => makePlaceOrder()}
            >
              Place order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;
