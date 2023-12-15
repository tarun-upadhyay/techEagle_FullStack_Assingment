import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../Redux/Products/action";
import OrderStatusButton from "../../Ui-Components/OrderStatusButton";

const Order = () => {
  const dispatch = useDispatch();
  const storeContext = useSelector((store) => store.AppReducer);

  useEffect(() => {
    dispatch(getAllOrder);
    window.scroll(0, 0);
  }, [dispatch]);
  return (
    <div className="my-32">
      <h1 className="text-xl text-center p-3 font-bold"> Past Orders</h1>
      <div className="flex flex-col gap-5 md:w-[60%] w-[90%] mx-auto">
        {storeContext.orderedProduct.map((items) => {
          return (
            <div key={items._id} className="mt-1 bg-[#ffffff] rounded-2xl">
              <div className="bg-[#f0f2f2] rounded-t-2xl border bottom-1 px-6 py-4 font-dmsans flex md:flex-row flex-col space-y-2 justify-between">
                <div className="flex md:flex-row flex-col md:gap-10 gap-2 uppercase">
                  <div>
                    <p>ORDER PLACED</p>
                    <p> {items.createdAt}</p>
                  </div>
                  <div>
                    <p>Total</p>
                    <p>Rs: {items.totalAmount}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>ORDER ID</p>
                    <p># {items._id}</p>
                  </div>
                </div>
              </div>
              <div className="px-5 pt-3 pb-7">
                <div className="flex md:flex-row flex-col gap-7 relative">
                  <div className="flex items-center justify-center">
                    <img
                      src={items.orderItems[0].image}
                      alt=""
                      className="h-[150px] w-[200px] rounded-xl"
                    />
                  </div>
                  <div>
                    <h4 className="leading-8 text-xl uppercase text-blue-500 font-semibold">
                      {items.orderItems[0].name}
                    </h4>
                    <h4 className="leading-8 text-sm">
                      Quantity #{items.orderItems[0].amount}
                    </h4>
                  </div>
                  <div className="absolute md:right-24 bottom-1 right-1 font-poppins uppercase">
                    <h3>Current Status</h3>
                    <OrderStatusButton items={items}> </OrderStatusButton>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
