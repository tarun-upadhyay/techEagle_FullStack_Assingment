import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import BuyDesk from "./BuyDesk/BuyDesk";
import DetailPage from "./Detailpage/DetailPage";
import Cart from "./Cart/Cart";
import Order from "./Order/Order";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/buydesk" element={<BuyDesk />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/order" element={<Order />}></Route>
      <Route path="/buydesk/:id" element={<DetailPage />}></Route>
      <Route
        path="*"
        element={
          <div className="mt-36 text-center h-screen">
            <h1 className="leading-8 text-5xl"> 404 Page Not Found</h1>
          </div>
        }
      ></Route>
    </Routes>
  );
};

export default MainRoute;
