import React, { Suspense } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CardGrid from "../../Components/CardGrid";

import LoadingCardSkeleton from "../../Components/LoadingCardSkeleton";
import Products from "./Products";

const Homepage = () => {
  return (
    <div className="mt-24">
      <div className="my-10 ml-10 text-yellow-700 p-[20px]">
        <h3 className="leading-8 text-4xl font-poppins font-bold">
          Welcome to Tech Eagle E-Commerce Assingment
        </h3>
      </div>
      <div>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop
          showThumbs={false}
          stopOnHover={false}
          interval={2000}
          className="custom-carousel"
        >
          <div>
            <img
              src="https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg"
              alt="ca-1"
              className="h-[600px] md:h-[800px]"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651&width=1024"
              alt="ca-2"
              className="h-[600px] md:h-[800px]"
            />
          </div>
          <div>
            <img
              src="https://fruitgrowers.com/wp-content/uploads/2019/02/apples-citrus-product-stand-supermarket.jpg"
              alt="ca-3"
              className="h-[600px] md:h-[800px]"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0070/7032/files/new-product-development-process_d2c083a0-7c8d-4fe2-8e84-195da8f19041.jpg?v=1694629501"
              alt="ca-3"
              className="h-[600px] md:h-[800px]"
            />
          </div>
        </Carousel>
      </div>
      <div id="bestSellingCat" className="md:mx-3 my-5 font-poppins">
        <div className="bg-white shadow-2xl py-10 md:px-48 px-5">
          <h3 className="text-3xl font-bold text-left">BEST SELLING</h3>
          <div className="my-16">
            <Suspense fallback={<LoadingCardSkeleton />}>
              <Products />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
