import React from "react";
import Hero from "../components/Hero";
import Events from "../components/Events";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <SearchBar bgColor="var(--color-dark)" textColor="white" />
      <Events pageTitle={"Up Comming Events"} />
    </Layout>
  );
};

export default Home;
