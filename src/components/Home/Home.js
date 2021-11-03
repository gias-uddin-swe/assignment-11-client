import React, { useState } from "react";
import "./Home.css";
import Banner from "./../Banner/Banner";
import Contact from "./../Contact/Contact";
import Footer from "./../Footer/Footer";
import Services from "../Services/Services";
import AllServices from "../AllServices/AllServices";

const Home = () => {
  return (
    <div>
      <div className="text-center mt-5"></div>
      {/* <Banner></Banner> */}
      <AllServices></AllServices>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
