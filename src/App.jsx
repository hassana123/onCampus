import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import EventPage from "./routes/EventPage";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import CommunityPreview from "./routes/CommunityPreview";
import UserDashboard from "./routes/UserDashboard";
import CommunityPage from "./routes/CommunityPage";
import NewEventPage from "./routes/NewEventPage";
import NewCommunity from "./routes/NewCommunity";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="community" element={<CommunityPreview />} />
      <Route path="event-details/:id" element={<EventPage />} />
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="user" element={<UserDashboard />} />
      <Route path="community-page" element={<CommunityPage />} />
      <Route path="new-event" element={<NewEventPage />} />
      <Route path="new-community" element={<NewCommunity />} />
    </Routes>
  );
}

export default App;
