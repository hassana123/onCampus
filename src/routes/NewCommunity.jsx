import React from "react";
import DashNav from "../components/DashNav";
import Footer from "../components/Footer";
import NewCommunityForm from "../components/NewCommunityForm";
const NewCommunity = () => {
  return (
    <main className="h-screen">
      <DashNav />
      <NewCommunityForm />
      <Footer />
    </main>
  );
};

export default NewCommunity;
