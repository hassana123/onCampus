import React from "react";
import Footer from "../components/Footer";
import CommunityNav from "../components/CommunityNav";
import EventsCreated from "../components/EventsCreated";
const CommunityPage = () => {
  return (
    <main className="h-screen">
      <CommunityNav />
      <EventsCreated />
      <Footer />
    </main>
  );
};

export default CommunityPage;
