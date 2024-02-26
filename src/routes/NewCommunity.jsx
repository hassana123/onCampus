import React from "react";
import DashNav from "../components/DashNav";
import Footer from "../components/Footer";
import CommunityForm from "../components/CommunityForm";
const NewCommunity = () => {
  const handleCreateCommunity = (formData) => {
    // Logic to create a new event using formData
    console.log("Create event with data:", formData);
  };
  return (
    <main className="h-screen">
      <DashNav />
      <CommunityForm onSubmit={handleCreateCommunity} buttonTexts={"Create"} />
      <Footer />
    </main>
  );
};

export default NewCommunity;
