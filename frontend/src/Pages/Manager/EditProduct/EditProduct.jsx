import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Select, Option, Button } from "@material-tailwind/react";
import { getSingleData } from "../../../Redux/Products/action";
import { ToastContainer } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import { Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import { productValidator } from "../../../validator/user";
import { useState } from "react";
import axios from "axios";
import AllFields from "./AllFields";
const initalState = [
  {
    image: "",
    name: "",
    weight: "",
    description: "",
    price: "",
    stock: "",
  },
];
const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const storeStatus = useSelector((store) => store.AppReducer);
  const { singleProduct, isLoading, errorMessage, isCartError } = useSelector(
    (store) => store.AppReducer
  );

 
  useEffect(() => {
    dispatch(getSingleData(id));
    window.scroll(0, 0);
  }, [dispatch, id]);

  return (
    <div className="flex flex-col gap-5 w-[90%] md:w-1/2 mx-auto bg-white p-8 font-poppins px-10 rounded-3xl my-36">
      {isLoading ? (
        <Skeleton count={50}></Skeleton>
      ) : singleProduct && singleProduct._id ? (
        <AllFields singleProduct={singleProduct} id={id} />
      ) : null}
    </div>
  );
};

export default EditProduct;
