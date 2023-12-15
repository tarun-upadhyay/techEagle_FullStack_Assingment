import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../Redux/Products/action";
import LoadingCardSkeleton from "../../../Components/LoadingCardSkeleton";
import CardGrid from "../../../Components/CardGrid";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import ProductComp from "./ProductComp";
const AllProduct = () => {
  const dispatch = useDispatch();
  const storeContext = useSelector((store) => store.AppReducer);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getData);
  }, [dispatch]);
  return (
    <div className="mt-28 w-[90%] md:w-[80%] mx-auto">
      <div className="bg-white p-5 rounded-lg">
        <h1 className="leading-8 text-3xl font-poppins">
          Products in our Store
        </h1>
      </div>
      <div className="my-10 mb-10">
        {storeContext.isLoading ? (
          <div className="flex gap-5">
            <LoadingCardSkeleton />
            <LoadingCardSkeleton />
            <LoadingCardSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {storeContext.products.products &&
              storeContext.products.products.map(
                ({ name, image, price, description, _id,stock }) => {
                  return (
                    <ProductComp
                      className=""
                      name={name}
                      image={image}
                      price={price}
                      description={description}
                      key={_id}
                      stock={stock}
                      id={_id}
                    ></ProductComp>
                  );
                }
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProduct;
