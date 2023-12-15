import { Button, Input, Option, Select } from "@material-tailwind/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { productValidator } from "../../../validator/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";
let initalState = {
  image: "",
  name: "",
  weight: "",
  description: "",
  price: "",
  stock: "",
};
const Addproduct = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  function handleSubmit(values) {
    let value = values.weight;

    values.weight = { value, unit: "kilogram" };

    axios
      .post("/api/v1/products", values)
      .then((res) => {
        return Swal.fire({
          title: `${res.data.msg}`,
          text: "Successfully added!",
          icon: "success",
        });
      })
      .then((res) => navigate("/allproduct"))
      .catch((err) =>
        Swal.fire({
          title: `${err.response.data.msg}`,
          text: "Failed to add",
          icon: "error",
        })
      );
  }

  const formik = useFormik({
    initialValues: initalState,
    validationSchema: productValidator,
    onSubmit: handleSubmit,
  });
  return (
    <div className="flex flex-col gap-5 w-[90%] md:w-1/2 mx-auto bg-white p-8 font-poppins px-10 rounded-3xl my-24">
      <h1 className="text-xl leading-8 font-bold text-blue-900">
        Add New Product
      </h1>
      <form onSubmit={formik.handleSubmit} className="mt-3 flex flex-col gap-3">
        <label htmlFor="">
          Add Image url
          <Input
            label="Image Url"
            name="image"
            type="url"
            onChange={formik.handleChange}
            value={formik.values.image}
            onBlur={formik.handleBlur}
          />
          {formik.errors.image && formik.touched.image && (
            <span className="text-red-600 pl-2 text-sm">
              {formik.errors.image}
            </span>
          )}
        </label>
        <label htmlFor="">
          Add Name of product
          <Input
            label="Name of product"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <span className="text-red-600 pl-2 text-sm">
              {formik.errors.name}
            </span>
          )}
        </label>
        <label htmlFor="">
          Add Price of product
          <Input
            label="Price of product"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
            onBlur={formik.handleBlur}
          />
          {formik.errors.price && formik.touched.price && (
            <span className="text-red-600 pl-2 text-sm">
              {formik.errors.price}
            </span>
          )}
        </label>
        <label htmlFor="">
          Add description of product
          <Input
            label="Description of product"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            onBlur={formik.handleBlur}
          />
          {formik.errors.description && formik.touched.description && (
            <span className="text-red-600 pl-2 text-sm">
              {formik.errors.description}
            </span>
          )}
        </label>
        <label htmlFor="" className="">
          Add Weight of product
          <Input
            label="Weight of the product"
            name="weight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.weight}
            onBlur={formik.handleBlur}
          />
          {formik.errors.weight && formik.touched.weight && (
            <span className="text-red-600 pl-2 text-sm">
              {formik.errors.weight}
            </span>
          )}
          <select id="unit" name="unit" className="border-2 w-full my-2">
            <option value="kilogram">kilogram</option>
            <option value="gram">gram</option>
            <option value="lbs">lbs</option>
            <option value="pounds">pounds</option>
          </select>
        </label>
        <label htmlFor="">
          Add Stock of the product
          <Input
            label="Remain Stock"
            name="stock"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.stock}
            onBlur={formik.handleBlur}
          />
          {formik.errors.stock && formik.touched.stock && (
            <span className="text-red-600 pl-2 text-sm">
              {formik.errors.stock}
            </span>
          )}
        </label>
        <Button className="my-5 bg-black text-white" type="submit">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default Addproduct;
