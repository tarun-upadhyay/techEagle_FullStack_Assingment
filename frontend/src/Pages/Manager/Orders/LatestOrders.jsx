import React, { useEffect, useState } from "react";
import { getAdminAllOrder } from "../../../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Select,
} from "@material-tailwind/react";
import axios from "axios";
import Swal from "sweetalert2";
import clsx from "clsx";
import OrderStatusButton from "../../../Ui-Components/OrderStatusButton";

const LatestOrders = () => {
  const dispatch = useDispatch();
  const [orderStatus, updateOrderStatus] = useState("");
  const storeContext = useSelector((store) => store.AppReducer);
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const handleOpen = (items) => {
    setModalData({ ...items });
    return setOpen(!open);
  };

  const handleConfirm = () => {
    axios
      .patch(`/api/v1/order/${modalData._id}`, { status: orderStatus })
      .then(() => {
        Swal.fire({
          title: `Updated successfully !`,
          text: "Successfully added!",
          icon: "success",
        });
        return dispatch(getAdminAllOrder);
      })
      .catch((err) =>
        Swal.fire({
          title: `${err.response.data.msg}`,
          text: "Failed to add",
          icon: "error",
        })
      );
    handleOpen();
  };
  useEffect(() => {
    dispatch(getAdminAllOrder);
  }, [dispatch]);

  return (
    <div className="my-28">
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Update order status.</DialogHeader>
        <DialogBody className="text-black">
          Order id: {modalData._id}
          <div>Total Amount: {modalData.totalAmount}</div>
          <div>Created At: {modalData.createdAt}</div>
          <div>Last Updated At: {modalData.updatedAt}</div>
          <div>Current Status: {modalData.status}</div>
          <select
            id="unit"
            name="unit"
            className="border-2 w-full my-2 text-black"
            value={orderStatus}
            onChange={(e) => updateOrderStatus(e.target.value)}
          >
            <option>Update Status</option>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Failed">Failed</option>
            <option value="Accepted">Accepted</option>
            <option value="Delivered">Delivered</option>
            <option value="Canceled">Canceled</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for Delivery">Out for Delivery</option>
          </select>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleConfirm}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <h1 className="text-xl text-center p-1 xl:p-3 font-bold"> Past Orders</h1>
      <div className="flex flex-col gap-5 xl:w-[60%] w-[90%] mx-auto">
        {storeContext.orderedProduct.length < 0 ? (
          <h1>No Products in order</h1>
        ) : (
          storeContext.orderedProduct.map((items) => {
            return (
              <div key={items._id} className="mt-1 bg-[#ffffff] rounded-2xl">
                <div className="bg-[#f0f2f2] rounded-t-2xl border bottom-1 xl:px-6 p-4 py-4 font-dmsans flex justify-between">
                  <div className="flex xl:flex-row flex-col gap-4 uppercase">
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
                <div className="px-5 py-4">
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
                    <div
                      className="absolute md:right-24 bottom-1 right-1 font-poppins uppercase"
                      onClick={() => handleOpen(items)}
                    >
                      <h3>Click to update Status</h3>
                      <OrderStatusButton items={items}> </OrderStatusButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default LatestOrders;
