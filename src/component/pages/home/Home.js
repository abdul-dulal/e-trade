import React from "react";
import Banner from "./Banner";
import ProductCategory from "./ProductCategory";
import Security from "./Security";
import Slider from "./Slider";
import TrandingProduct from "./TrandingProduct";
import Ourvendor from "../../pages/home/Ourvendor";
import ClientsFeedback from "./ClientsFeedback";

const Home = () => {
  return (
    <div>
      <Slider />
      <Security />
      <ProductCategory />
      <Banner />
      <TrandingProduct />
      <Ourvendor />
      <ClientsFeedback />
    </div>
  );
};

export default Home;
