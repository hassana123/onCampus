import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Events from "../components/Events";

import Layout from "../components/Layout";
const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Events pageTitle={"Up Comming Events"} />
    </Layout>
  );
};

export default Home;
