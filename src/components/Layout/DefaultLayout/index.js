import React from "react";
import Header from "@/components/Layout/components/Header";
import Sidebar from "@/components/Layout/components/Sidebar";

function DefaultLayout({ children }) {
  
  return (
    <div>
      <Header />
      <div id="container">
       # <Sidebar />
        <div id="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
