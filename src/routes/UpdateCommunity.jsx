import React from "react";
import CommunityNav from "../components/CommunityNav";
import Footer from "../components/Footer";
import CommunityForm from "../components/CommunityForm";
const UpdateCommunity = () => {
  const handleUpdateCommunity = (formData) => {
    // Logic to update the event with eventId using formData
    console.log(`Update event ${eventId} with data:`, formData);
  };
  return (
    <main>
      <CommunityNav />
      <CommunityForm onSubmit={handleUpdateCommunity} buttonTexts={"Update"} />
      <Footer />
    </main>
  );
};

export default UpdateCommunity;
