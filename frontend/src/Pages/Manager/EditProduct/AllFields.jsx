import { Button, Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AllFields = ({ singleProduct, id }) => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    image: singleProduct.image,
    name: singleProduct.name,
    value: singleProduct.weight.value,
    weight: { value: singleProduct.value, unit: singleProduct.unit },
    unit: singleProduct.weight.unit,
    description: singleProduct.description,
    price: singleProduct.price,
    stock: singleProduct.stock,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValues.weight = { value: inputValues.value, unit: inputValues.unit };

    axios
      .patch(`/api/v1/products/${id}`, inputValues)
      .then((res) =>
        Swal.fire({
          title: `Updated successfully !`,
          text: "Successfully updated!",
          icon: "success",
        }).then(() => navigate("/allproduct"))
      )
      .catch((err) =>
        Swal.fire({
          title: `${err.response.data.msg}`,
          text: "Failed to add",
          icon: "error",
        })
      );
    
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-3 flex flex-col gap-3 font-poppins"
    >
      <h2 className="text-xl text-blue-800 font-bold">Edit Product</h2>
      <label htmlFor="">
        Edit Image url
        <Input
          label="Image Url"
          defaultValue={inputValues.image}
          name="image"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Edit Name of product
        <Input
          label="Name of product"
          value={inputValues.name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Edit Price of product
        <Input
          label="Price of product"
          defaultValue={inputValues.price}
          name="price"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Edit Name of product
        <Input
          label="Description of product"
          defaultValue={inputValues.description}
          name="description"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="" className="">
        Edit Weight of product
        <Input
          label="Weight of the product"
          defaultValue={inputValues.value}
          name="value"
          onChange={handleChange}
        />
        <select
          id=""
          defaultValue={inputValues.unit}
          name="unit"
          onChange={handleChange}
          label={inputValues.unit}
          className="w-full mt-2 border-2"
        >
          <option value="kilogram">kilogram</option>
          <option value="gram">gram</option>
          <option value="lbs">lbs</option>
          <option value="pounds">pounds</option>
        </select>
      </label>
      <label htmlFor="">
        Edit Stock of the product
        <Input
          label="Remain Stock"
          defaultValue={inputValues.stock}
          name="stock"
          onChange={handleChange}
        />
      </label>
      <Button className="my-5" type="submit">
        Update Product
      </Button>
    </form>
  );
};

export default AllFields;
