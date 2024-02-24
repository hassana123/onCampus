import React from "react";
import CommunityNav from "../components/CommunityNav";
import EventForm from "../components/EventForm";
import Footer from "../components/Footer";
const UpdateEvent = ({ eventId, initialData }) => {
  const handleUpdateEvent = (formData) => {
    // Logic to update the event with eventId using formData
    console.log(`Update event ${eventId} with data:`, formData);
  };
  return (
    <main className="h-screen">
      <CommunityNav />
      <EventForm
        onSubmit={handleUpdateEvent}
        buttonText="Update"
        initialValues={initialData}
      />
      <Footer />
    </main>
  );
};

export default UpdateEvent;
