import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Events from "../components/Events";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <main className="h-screen">
      <Navbar />
      <Hero />
      <Events pageTitle={"Up Comming Events"} />
      <Footer />
    </main>
  );
};

export default Home;
