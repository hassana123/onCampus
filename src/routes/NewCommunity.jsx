import React from "react";
import DashNav from "../components/DashNav";
import Footer from "../components/Footer";
import CommunityForm from "../components/CommunityForm";
const NewCommunity = () => {
  return (
    <main className="h-screen">
      <DashNav />
      <CommunityForm />
      <Footer />
    </main>
  );
};

export default NewCommunity;
