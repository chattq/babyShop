import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function LayoutPage({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
