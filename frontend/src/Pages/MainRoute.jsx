import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import BuyDesk from "./BuyDesk/BuyDesk";
import DetailPage from "./Detailpage/DetailPage";
import Cart from "./Cart/Cart";
import Order from "./Order/Order";
import { AdminPrivateRoute, PrivateRoute } from "../Components/PrivateRoute";
import { useSelector } from "react-redux";
import AdminHomepage from "./Manager/AdminHomepage/AdminHomepage";
import AllProduct from "./Manager/allProduct/AllProduct";
import EditProduct from "./Manager/EditProduct/EditProduct";
import Addproduct from "./Manager/AddProduct/Addproduct";
import LatestOrders from "./Manager/Orders/LatestOrders";
const MainRoute = () => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuth.role === "manager" ? <AdminHomepage /> : <Homepage />}
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/buydesk" element={<BuyDesk />}></Route>
      <Route
        path="/allproduct"
        element={
          <AdminPrivateRoute>
            <AllProduct />
          </AdminPrivateRoute>
        }
      ></Route>
      <Route
        path="/addproduct"
        element={
          <AdminPrivateRoute>
            <Addproduct />
          </AdminPrivateRoute>
        }
      ></Route>
      <Route
        path="/latestorder"
        element={
          <AdminPrivateRoute>
            <LatestOrders />
          </AdminPrivateRoute>
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/order"
        element={
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/buydesk/:id" element={<DetailPage />}></Route>
      <Route path="/edit/:id" element={<EditProduct />}></Route>
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
