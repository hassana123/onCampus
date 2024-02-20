import React from "react";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
