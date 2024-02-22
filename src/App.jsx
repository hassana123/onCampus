import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import EventPage from "./routes/EventPage";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import UserDashboard from "./routes/UserDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="event-details/:id" element={<EventPage />} />
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="user" element={<UserDashboard />} />
    </Routes>
  );
}

export default App;
