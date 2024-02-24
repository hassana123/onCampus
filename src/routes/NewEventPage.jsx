import React from "react";
import NewEventForm from "../components/NewEventForm";
import CommunityNav from "../components/CommunityNav";
import Footer from "../components/Footer";
const NewEventPage = () => {
  return (
    <main className="h-screen">
      <CommunityNav />
      <NewEventForm />
      <Footer />
    </main>
  );
};

export default NewEventPage;
