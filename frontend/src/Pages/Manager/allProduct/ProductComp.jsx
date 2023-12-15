import React from "react";
import CardGrid from "../../../Components/CardGrid";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { getData } from "../../../Redux/Products/action";
import { useDispatch } from "react-redux";

const ProductComp = ({ name, price, image, description, id, stock }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/v1/products/${id}`)
          .then((res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            }).then(() => {
              dispatch(getData);
            });
          })
          .catch((err) => {
            Swal.fire({
              title: `${err.response.data.msg}`,
              text: "Your file has been deleted.",
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <div className="bg-gray-100 pb-5 hover:shadow-2xl">
      {" "}
      <CardGrid
        name={name}
        image={image}
        price={price}
        description={description}
        css={false}
      />
      <p className="p-3 text-lg text-blue-700 font-bold">
        Remaning Stocks:{" "}
        <span className="font-bold text-blue-gray-900">{stock}</span>
      </p>
      <div className="flex gap-3 px-5">
        <Link to={`/edit/${id}`}>
          <Button>Edit</Button>
        </Link>
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      </div>
    </div>
  );
};

export default ProductComp;
