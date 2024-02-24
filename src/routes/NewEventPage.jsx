import React from "react";
import EventForm from "../components/EventForm";
import CommunityNav from "../components/CommunityNav";
import Footer from "../components/Footer";
const NewEventPage = () => {
  const handleCreateEvent = (formData) => {
    // Logic to create a new event using formData
    console.log("Create event with data:", formData);
  };
  return (
    <main className="h-screen">
      <CommunityNav />
      <EventForm onSubmit={handleCreateEvent} buttonText="Create" />
      <Footer />
    </main>
  );
};

export default NewEventPage;
