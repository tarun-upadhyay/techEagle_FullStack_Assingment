import clsx from "clsx";
import React from "react";

const OrderStatusButton = ({ items }) => {
  return (
    <h4
      className={clsx(` p-1 text-center rounded-3xl mt-2`, {
        "bg-yellow-300": items.status === "Pending",
        "bg-red-300": items.status === "Canceled",
        "bg-green-300": items.status === "Paid",
        "bg-green-700": items.status === "Delivered",
        "bg-green-600 text-white": items.status === "Shipped",
        "bg-[#F7CB73]": items.status === "Out for Delivery",
        "bg-red-500": items.status === "Failed",
        "bg-green-400": items.status === "Accepted",
      })}
    >
      {" "}
      {items.status}
    </h4>
  );
};

export default OrderStatusButton;
