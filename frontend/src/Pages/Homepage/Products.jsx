import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/Products/action";
import LoadingCardSkeleton from "../../Components/LoadingCardSkeleton";
import CardGrid from "../../Components/CardGrid";
import { Link } from "react-router-dom";
const Products = () => {
  const dispatch = useDispatch();
  const storeContext = useSelector((store) => store.AppReducer);
  console.log(storeContext);
  useEffect(() => {
    dispatch(getData);
    window.scroll(0, 0);
  }, [dispatch]);
  return (
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
              ({ name, image, price, description, _id }) => {
                return (
                  <Link to={`/buydesk/${_id}`} key={_id}>
                    <CardGrid
                      name={name}
                      image={image}
                      price={price}
                      description={description}
                    />
                  </Link>
                );
              }
            )}
        </div>
      )}
    </div>
  );
};

export default Products;
