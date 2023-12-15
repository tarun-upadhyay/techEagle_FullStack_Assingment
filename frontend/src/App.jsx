import React from "react";
import MainRoute from "./Pages/MainRoute";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className="">
      <Navbar />
      <MainRoute />
      <Footer />
    </div>
  );
};

export default App;
