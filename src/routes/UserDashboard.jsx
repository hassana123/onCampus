import React from "react";
import DashNav from "../components/DashNav";
import CommunityEvents from "../components/CommunityEvents";
import SearchBar from "../components/SearchBar";
import Events from "../components/Events";
import Footer from "../components/Footer";
const UserDashboard = () => {
  return (
    <main className="h-screen">
      <DashNav />
      <SearchBar bgColor="#D8E3F4" textColor="blue-600" />
      <CommunityEvents />
      <Events pageTitle={"Events from your Communities"} />
      <Footer />
    </main>
  );
};

export default UserDashboard;
