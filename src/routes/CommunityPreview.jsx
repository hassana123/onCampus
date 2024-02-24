import React from "react";
import Navbar from "../components/Navbar";
import CommunityDetails from "../components/CommunityDetails";
import Footer from "../components/Footer";
const CommunityPreview = () => {
  return (
    <main className="h-screen">
      <Navbar />
      <CommunityDetails />
      <Footer />
    </main>
  );
};

export default CommunityPreview;
