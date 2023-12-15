import React from "react";

const CardGrid = ({ name, price, image, description }) => {
  return (
    <>
      {/* Sample cards */}
      <div className="bg-gray-100 rounded-lg hover:translate-y-5 hover:shadow-lg shadow-2xl cursor-pointer">
        <div>
          <img
            src={image}
            alt="product0image"
            className="h-[300px] w-[350px] rounded-t-lg"
          ></img>
        </div>
        <div className="mt-2 p-2 pl-5">
          <h1 className="uppercase leading-8 text-xl">{name}</h1>
          <p className="mt-5 h-[50px] overflow-hidden">{description}</p>
          <p className="mt-5 h-[50px] overflow-hidden text-dash font-bold">
            Price: Rs {price}
          </p>
        </div>
      </div>

      {/* Add more cards as needed */}
    </>
  );
};

export default CardGrid;
