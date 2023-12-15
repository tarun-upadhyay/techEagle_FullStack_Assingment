import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, getSingleData } from "../../Redux/Products/action";
import Skeleton from "react-loading-skeleton";
import { ToastContainer, toast } from "react-toastify";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, isLoading, errorMessage, isCartError } = useSelector(
    (store) => store.AppReducer
  );
  const storeStatus = useSelector((store) => store.AppReducer);
  console.log(storeStatus);
  useEffect(() => {
    dispatch(getSingleData(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  const handleAddToCart = () => {
    console.log("first");
    dispatch(addToCart({ product: id })).then(() => {
      if (isCartError) {
        toast.warn(`${errorMessage}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.success("🦄 Added to Cart Successfuly!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  };
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="mx-auto w-1/2">
          <Skeleton height={350} />
          <Skeleton count={3} />
        </div>
      );
    }

    if (!singleProduct) {
      return null;
    }

    const { image, name, description, weight, price } = singleProduct;
    const { value, unit } = weight;

    return (
      <div className="flex w-[90%] md:w-1/2 mx-auto space-x-6 bg-white p-8 font-poppins px-10 rounded-3xl">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <img src={image} alt={name} className="h-[350px] w-[350px]" />
        <div className="p-2">
          <h3 className="text-2xl uppercase text-blue-600 font-semibold">
            {name}
          </h3>
          <div className="mt-3">
            <p className="text-gray-500 text-sm my-3">{description}</p>
            <p className="overflow-hidden text-dash font-bold">
              Price: Rs {price}
            </p>
            <div className="flex gap-4 mt-2 font-bold">
              <p>Weight</p>
              <p>
                {value} <span>{unit}</span>
              </p>
            </div>
            <button
              className="inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 text-white bg-black hover:bg-black/80 mt-2"
              onClick={() => handleAddToCart()}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  return <div className="my-36">{renderContent()}</div>;
};

export default DetailPage;
