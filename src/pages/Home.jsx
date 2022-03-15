import React from "react";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
